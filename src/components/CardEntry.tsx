import React, { useState } from "react";
import * as styles from "./CardEntry.module.scss";

const CardEntry = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [expiry, setExpiry] = useState("");

    const handleSubmit = (e) => {
        console.log("Form submitted", { cardNumber, cvc, expiry });
    };

    return (
        <div className={styles["card-form"]}>
            <form onSubmit={handleSubmit}>
                <div className={styles["form-group"]}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        className="card"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={16}
                        placeholder="Credit card number"
                        autoFocus={true}
                    />
                </div>
                <div className={styles["grid-wrapper"]}>
                    <div
                        className={`${styles["form-group"]} ${styles["second-col"]}`}
                    >
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            maxLength={4}
                            placeholder="CVC"
                        />
                    </div>
                    <div className={`${styles["form-group"]}`}>
                        <label htmlFor="expiry">Expiry Date</label>
                        <input
                            type="text"
                            id="expiry"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                        />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CardEntry;
