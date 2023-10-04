import InputFloatingLabelComponent from "../InputFloatingLabelComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Floating label input', () => {
    test("renders", () => {
        const label = "My label";
        render(<InputFloatingLabelComponent label={label} />);
        const element = screen.getByRole("myInputFloatingLabel");
        expect(element).toBeInTheDocument();
    });
});