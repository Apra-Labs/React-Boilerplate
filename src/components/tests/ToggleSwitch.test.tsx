import ToggleSwitchComponent from "../ToggleSwitchComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Switch', () => {
    test("renders", () => {
        const lable = "My switch";
        render(<ToggleSwitchComponent label={lable}/>);
        const element = screen.getByRole("mySwitch");
        expect(element).toBeInTheDocument();
    });
});