import InputComponent from "../InputComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Input', () => {
    test("renders", () => {
        render(<InputComponent />);
        const element = screen.getByRole("myInput");
        expect(element).toBeInTheDocument();
    });
});