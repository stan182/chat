import React, { useState } from "react";

import { SignIn } from "./signin";
import { SignUp } from "./signup";

import { LoginViews } from "../../constants/rounting";

import styles from "./style.module.css";

export const Login = () => {
    const [view, setView] = useState<LoginViews>(LoginViews.SIGN_IN);

    const handleView = () =>
        setView(
            view === LoginViews.SIGN_IN
                ? LoginViews.SIGN_UP
                : LoginViews.SIGN_IN
        );

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                {view === LoginViews.SIGN_IN ? "Sign in" : "Sign up"}
            </h1>
            {view === LoginViews.SIGN_IN ? <SignIn /> : <SignUp />}
            <h3 className={styles.switcher} onClick={handleView}>
                {view === LoginViews.SIGN_IN ? "to Sign up" : "to Sign in"}
            </h3>
        </div>
    );
};
