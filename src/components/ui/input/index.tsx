import React, { InputHTMLAttributes } from "react";

import styles from "./style.module.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ type, placeholder, onChange }) => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    );
};

export default Input;