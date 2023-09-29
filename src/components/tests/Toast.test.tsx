import ToastComponent from "../ToastComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Toast', () => {
    test("renders", () => {
        const header = "My toast";
        render(<ToastComponent header={header}/>);
        const element = screen.getByTestId("toast");
        expect(element).toBeInTheDocument();
    });
});