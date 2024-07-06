import React, { useEffect, useState } from "react";
import * as styles from "./Header.module.scss";

const Header = (props: any) => {
    const { title } = props;

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const onClick = () => {
        setMenuOpen((prev: boolean) => !prev);
    };

    return (
        <>
            <header role="banner" className={styles.header}>
                <div className={styles["hamburger-container"]}>
                    <button role="menu" onClick={onClick} className="">
                        <Hamburger />
                    </button>
                </div>

                <a className="" href="/">
                    <h1 className="">{title}</h1>
                </a>
            </header>
            {isMenuOpen && <Menu onClick={onClick} />}
        </>
    );
};

const Hamburger = (props: any) => {
    const {
        className = "",
        fill = "currentColor",
        stroke = "currentColor",
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            {...props}
            fill={fill}
            stroke={stroke}
            className={` ${className}`}
        >
            <title>Menu</title>
            <line x1="3" y1="6.375" x2="17" y2="6.375" strokeWidth="1.25" />
            <line x1="3" y1="10.375" x2="17" y2="10.375" strokeWidth="1.25" />
            <line x1="3" y1="14.375" x2="17" y2="14.375" strokeWidth="1.25" />
        </svg>
    );
};

const Menu = (props: { onClick: () => void }) => {
    const { onClick } = props;

    return (
        <div className={`${styles["menu"]} ${styles["slideIn"]}`}>
            <div className={styles["flex-wrapper"]}>
                <h2
                    role="button"
                    className={styles["back-arrow"]}
                    onClick={onClick}
                >
                    <svg viewBox="0 -960 960 960" fill="#e8eaed">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </h2>
                <h2 className={styles["menu-header"]}>Menu</h2>
            </div>
            <div className={styles["grid-wrapper"]}>
                <nav>
                    <div role="menuitem" onClick={onClick}>
                        This is menu content
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
