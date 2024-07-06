import React, { useState } from "react";
import * as styles from "./Login.module.scss";

const Login = (props: { enterName: (name: string) => void }) => {
    const { enterName } = props;
    const [name, setName] = useState<string>("");

    return (
        <div className={styles.login}>
            <input
                type="text"
                name="username"
                className={styles.username}
                placeholder="Please enter your name"
                onChange={(input) => setName(input.target.value)}
                autoFocus={true}
            />
            <button type="submit" onClick={() => enterName(name)}>
                Enter
            </button>
        </div>
    );
};

export default Login;
