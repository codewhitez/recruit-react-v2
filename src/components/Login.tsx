import React, { useState } from "react";
import * as styles from "./Login.module.scss";

const Login = (props: { enterName: (name: string) => void }) => {
    const { enterName } = props;
    const [name, setName] = useState<string>("");

    return (
        <form>
            <div className={styles.login}>
                <h2 role="heading" aria-level={2} id="name-label">
                    Please Enter Your Name
                </h2>
                <input
                    type="text"
                    name="username"
                    role="textbox"
                    className={styles.username}
                    placeholder="Please enter your name"
                    onChange={(input) => setName(input.target.value)}
                    autoFocus={true}
                    aria-labelledby="name-label"
                />
                <button type="submit" onClick={() => enterName(name)}>
                    Enter
                </button>
            </div>
        </form>
    );
};

export default Login;
