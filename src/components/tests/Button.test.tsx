import ButtonComponent from "../ButtonComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
    test("renders", () => {
        const label = "My label";
        const handleClick = jest.fn();
        render(<ButtonComponent label={label} onClick={handleClick}/>);
        const element = screen.getByRole("myButton");
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
    });
});