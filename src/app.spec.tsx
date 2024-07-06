import React from "react";
import {
    fireEvent,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./app";

jest.mock("./components/CardEntry", () => () => <div>CardEntry Component</div>);

describe("App Component", () => {
    describe("Header", () => {
        it('renders the header with the title "Register card form"', () => {
            render(<App />);
            expect(screen.getByRole("banner")).toHaveTextContent(
                "Register card form"
            );
        });
    });

    describe("Main Section", () => {
        it('displays "Please Enter Your Name" when userName is not set', () => {
            render(<App />);
            expect(
                screen.getByRole("heading", { name: "Please Enter Your Name" })
            ).toBeInTheDocument();
        });

        it('displays "Welcome {userName}" and CardEntry component when userName is set', () => {
            render(<App />);

            fireEvent.change(
                screen.getByPlaceholderText("Please enter your name"),
                { target: { value: "John" } }
            );

            // fireEvent.click(screen.getByText("Enter"));
            fireEvent(
                screen.getByText("Enter"),
                new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                })
            );

            expect(
                screen.getByRole("heading", { name: "Welcome John" })
            ).toBeInTheDocument();

            expect(screen.getByText("CardEntry Component")).toBeInTheDocument();
        });
    });

    describe("Menu", () => {
        it("toggles menu state on hamburger button click", async () => {
            render(<App />);

            const menuButton = screen.getByRole("menu");
            fireEvent.click(menuButton);
            expect(
                screen.getByText("This is menu content")
            ).toBeInTheDocument();

            const menuitem = screen.getByRole("menuitem");
            fireEvent.click(menuitem);

            expect(menuitem).not.toBeVisible();
        });
    });
});
