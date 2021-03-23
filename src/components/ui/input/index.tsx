import React, { InputHTMLAttributes } from "react";

import styles from "./style.module.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    return (
        <input className={`${styles.input} ${props.className}`}
            {...props}
        />
    );
};

export default Input;