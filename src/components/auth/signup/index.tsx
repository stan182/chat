import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../ui/input";
import Button from "../../ui/button";

import styles from "../style.module.css";

type State = {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
};

const SignUp: React.FC = () => {
    const [form, setForm] = useState<State>({
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
    });
    const { email, name, password, repeatPassword } = form;

    const formFieldHandler = (fieldName: string) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => setForm({ ...form, [fieldName]: event.target.value });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign up</h1>
            <form className={styles.form}>
                <Input
                    type="email"
                    value={email}
                    placeholder={"Email"}
                    onChange={formFieldHandler("email")}
                />
                <Input
                    value={name}
                    placeholder={"Name"}
                    onChange={formFieldHandler("name")}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder={"Password"}
                    onChange={formFieldHandler("password")}
                />
                <Input
                    type="password"
                    value={repeatPassword}
                    placeholder={"Repeat password"}
                    onChange={formFieldHandler("repeatPassword")}
                />
                <Button label="Submit" />

                <Link className={styles.link} to="/signin">
                    to Sign in
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
