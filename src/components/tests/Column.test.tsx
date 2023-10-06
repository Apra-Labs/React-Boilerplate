import ColumnComponent from "../ColumnComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Column', () => {
    test("renders", () => {
        render(<ColumnComponent />);
        const element = screen.getByRole("myCol");
        expect(element).toBeInTheDocument();
    });
});