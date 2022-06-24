import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ className, title, ...buttonProps }) => {
  return <button className={cn(styles.button, className)} {...buttonProps}>{title}</button>;
};
