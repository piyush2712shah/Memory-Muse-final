"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" className={styles.myinput} placeholder="username" name="username" />
      <input type="password" className={styles.myinput} placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} 
        <span className="registerlink">
          <b> Register</b>
        </span>
      </Link>
    </form>
  );
};

export default LoginForm;
