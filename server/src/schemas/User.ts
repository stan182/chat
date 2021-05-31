import mongoose, { Document, Schema } from "mongoose";
import isEmail from "validator";

export interface IUser extends Document {
    email: string;
    fullName: string;
    password: string;
    confirmed: boolean;
    confirm_hash: string;
    avatar: string;
    last_seen: Date;
}

const UserSchema = new Schema(
    {
        email: {
            type: String,
            // validate: [isEmail, "Invalid email"],
            required: "Email address is required",
            unique: true,
        },
        fullName: {
            type: String,
            required: "Fullname is required",
        },
        password: {
            type: String,
            required: "Password is required",
        },
        confirmed: {
            type: String,
            default: false,
        },
        avatar: String,
        confirm_hash: String,
        last_seen: Date,
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
