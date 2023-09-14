import CheckBoxComponent from "../CheckBoxComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Checkbox', () => {
    test("renders", () => {
        const label = "My label";
        render(<CheckBoxComponent label={label}/>);
        const element = screen.getByRole("myCheckbox");
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
    });
});