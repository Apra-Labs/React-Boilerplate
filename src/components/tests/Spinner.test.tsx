import SpinnerComponent from "../SpinnerComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Spinner', () => {
    test("renders", () => {
        const animation = "grow";
        render(<SpinnerComponent animation={animation}/>);
        const element = screen.getByRole("mySpinner");
        expect(element).toBeInTheDocument();
    });
});