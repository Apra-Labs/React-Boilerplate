import RadioComponent from "../RadioComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Radio', () => {
    test("renders", () => {
        const label = "My radio";
        render(<RadioComponent label={label}/>);
        const element = screen.getByRole("myRadio");
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
    });
});