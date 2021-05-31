import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import Input from "../../ui/input";
import Button from "../../ui/button";

import styles from "../style.module.css";

type SignUpForm = {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
};

const SignUp: React.FC = () => {
    const initialValues: SignUpForm = {
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
    };

    return (
        <Formik<SignUpForm> initialValues={initialValues} onSubmit={() => {}}>
            {({ values, handleChange }) => {
                const { email, name, password, repeatPassword } = values;

                return (
                    <div className={styles.container}>
                        <h1 className={styles.header}>Sign up</h1>
                        <form className={styles.form}>
                            <Input
                                name="email"
                                type="email"
                                value={email}
                                placeholder={"Email"}
                                onChange={handleChange}
                            />
                            <Input
                                name="name"
                                value={name}
                                placeholder={"Name"}
                                onChange={handleChange}
                            />
                            <Input
                                name="password"
                                type="password"
                                value={password}
                                placeholder={"Password"}
                                onChange={handleChange}
                            />
                            <Input
                                name="repeatPassword"
                                type="password"
                                value={repeatPassword}
                                placeholder={"Repeat password"}
                                onChange={handleChange}
                            />
                            <Button label="Submit" />
                            <Link className={styles.link} to="/signin">
                                to Sign in
                            </Link>
                        </form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SignUp;
