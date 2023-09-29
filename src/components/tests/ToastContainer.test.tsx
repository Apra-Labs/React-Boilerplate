import ToastContainerComponent from "../ToastContainerComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Toast Container', () => {
    test("renders", () => {
        const position = "top-start";
        render(
            <ToastContainerComponent position={position}>
                <p>This is a paragraph</p>
            </ToastContainerComponent>
        );
        const element = screen.getByRole("myToastContainer");
        expect(element).toBeInTheDocument();
    });
});