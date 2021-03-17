import React from "react";

import styles from "./style.module.css";

 const Root: React.FC = ({ children }) => (
     <div className={styles.externalContainer}>
         <div className={styles.innerContainer}>{children}</div>
     </div>
 );

export default Root;