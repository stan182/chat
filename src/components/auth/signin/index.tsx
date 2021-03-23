import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import Input from "../../ui/input";
import Button from "../../ui/button";

import styles from "../style.module.css";

type SignInForm = {
    login: string;
    password: string;
};

const SignIn: React.FC = () => {
    const initialValues: SignInForm = { login: "", password: "" };

    return (
        <Formik<SignInForm> initialValues={initialValues} onSubmit={() => {}}>
            {({ values, handleChange }) => {
                const { login, password } = values;

                return (
                    <div className={styles.container}>
                        <h1 className={styles.header}>Sign in</h1>
                        <form className={styles.form}>
                            <Input
                                name="login"
                                placeholder={"Login"}
                                value={login}
                                onChange={handleChange}
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder={"Password"}
                                value={password}
                                onChange={handleChange}
                            />
                            <Button label="Submit" />
                            <Link className={styles.link} to="/signup">
                                to Sign up
                            </Link>
                        </form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SignIn;
