import React, { FC, useState } from "react";
import "./app.scss";
import Header from "./components/Header";
import CardEntry from "./components/CardEntry";
import Login from "./components/Login";

export const App = () => {
    const [userName, setUserName] = useState<string>("");

    return (
        <>
            <Header title={"Register card form"} openMenu={false} />
            <main className="main">
                <section>
                    {userName ? (
                        <>
                            <h2 role="heading" aria-level={2}>
                                Welcome {userName}
                            </h2>
                            <CardEntry />
                        </>
                    ) : (
                        <>
                            <Login enterName={setUserName} />
                        </>
                    )}
                </section>
            </main>
        </>
    );
};
