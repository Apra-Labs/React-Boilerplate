import FloatingLabelInputComponent from "../FloatingLabelInputComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Floating label input', () => {
    test("renders", () => {
        const label = "My label";
        render(<FloatingLabelInputComponent label={label} />);
        const element = screen.getByRole("myFloatingLabelInput");
        expect(element).toBeInTheDocument();
    });
});