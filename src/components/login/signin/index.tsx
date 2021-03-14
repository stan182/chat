import React, { useState } from "react";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import styles from "./style.module.css";

type State = {
    login: string;
    password: string;
};

export const SignIn: React.FC = () => {
    const [form, setForm] = useState<State>({ login: "", password: "" });
    const { login, password } = form;

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, login: event.target.value });

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, password: event.target.value });

    return (
        <form className={styles.form}>
            <Input placeholder={"Login"} value={login} onChange={handleLogin} />
            <Input
                type="password"
                placeholder={"Password"}
                value={password}
                onChange={handlePassword}
            />
            <Button label="Submit" />
        </form>
    );
};
