import { Request, Response } from "express";
import { UserModel } from "../schemas";

class UserController {
    get(req: Request, res: Response) {
        const id: string = req.params.id;
        UserModel.findById(id, (error: any, user: any) => {
            if (error) {
                return res.status(404).json({
                    message: "User not found",
                });
            }
            res.json(user);
        });
    }

    getMe() {
        //TODO: return self user data
    }

    create(req: Request, res: Response) {
        const postData = {
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
        };
        const user = new UserModel(postData);
        user.save()
            .then((obj: any) => {
                res.json(obj);
            })
            .catch((reason: any) => {
                res.json(reason);
            });
    }

    delete(req: Request, res: Response) {
        const id: string = req.params.id;
        UserModel.findOneAndDelete({ _id: id })
            .then((user) => {
                if (user) {
                    res.json({
                        message: `User ${user.fullName} deleted`,
                    });
                }
            })
            .catch(() => {
                res.json({
                    message: `User not found`,
                });
            });
    }
}

export default UserController;
