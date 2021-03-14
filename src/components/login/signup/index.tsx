import React, { useState } from "react";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import styles from "./style.module.css";

type State = {
    email: string;
    password: string;
};

export const SignUp: React.FC = () => {
    const [form, setForm] = useState<State>({ email: "", password: "" });
    const { email, password } = form;

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, email: event.target.value });

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, password: event.target.value });

    return (
        <form className={styles.form}>
            <Input
                type="email"
                value={email}
                placeholder={"Email"}
                onChange={handleEmail}
            />
            <Input
                type="password"
                value={password}
                placeholder={"Password"}
                onChange={handlePassword}
            />
            <Button label="Submit" />
        </form>
    );
};
