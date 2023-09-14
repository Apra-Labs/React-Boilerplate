import Navigation from "../Navigation";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

window.matchMedia = jest.fn();

describe('Navigation', () => {
    test("renders", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByRole("myNavbar");
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
    });
});