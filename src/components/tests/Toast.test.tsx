import ToastComponent from "../ToastComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Toast', () => {
    test("renders", () => {
        const position = "top-start";
        const arrayOfToasts = [{ header: "Toast"}]
        render(
            <ToastComponent position={position} messages={arrayOfToasts}/>
        );
        const element = screen.getByTestId("toast");
        expect(element).toBeInTheDocument();
    });
});