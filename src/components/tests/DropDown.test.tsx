import DropDownComponent from "../DropDownComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Dropdown', () => {
    test("renders", () => {
        const label = "My label";
        const items = [{key: "Ramesh", value: "Belagavi"}, {key: "Suresh", value: "Bangalore"}];
        render(<DropDownComponent label={label} items={items}/>);
        const element = screen.getByRole("myDropdown");
        expect(element).toBeInTheDocument();
    });
});