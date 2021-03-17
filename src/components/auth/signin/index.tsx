import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../ui/input";
import Button from "../../ui/button";

import styles from "../style.module.css";

type State = {
    login: string;
    password: string;
};

const SignIn: React.FC = () => {
    const [form, setForm] = useState<State>({ login: "", password: "" });
    const { login, password } = form;

    const formFieldHandler = (fieldName: string) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => setForm({ ...form, [fieldName]: event.target.value });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign in</h1>
            <form className={styles.form}>
                <Input
                    placeholder={"Login"}
                    value={login}
                    onChange={formFieldHandler("login")}
                />
                <Input
                    type="password"
                    placeholder={"Password"}
                    value={password}
                    onChange={formFieldHandler("password")}
                />
                <Button label="Submit" />
                <Link className={styles.link} to="/signup">
                    to Sign up
                </Link>
            </form>
        </div>
    );
};

export default SignIn;
