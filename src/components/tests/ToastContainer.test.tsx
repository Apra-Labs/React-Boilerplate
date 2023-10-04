import ToastComponent from "../ToastComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Toast Container', () => {
    test("renders", () => {
        const position = "top-start";
        const arrayOfToasts = [{ header: "Toast"}]
        render(
            <ToastComponent position={position} toasts={arrayOfToasts}/>
        );
        const element = screen.getByRole("myToastContainer");
        expect(element).toBeInTheDocument();
    });
});