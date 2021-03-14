import React, { ButtonHTMLAttributes } from "react";

import styles from "./style.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
};

export const Button: React.FC<Props> = (props) => (
    <button {...props} className={styles.button}>
        {props.label}
    </button>
);
