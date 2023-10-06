import RowComponent from "../RowComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Row', () => {
    test("renders", () => {
        render(<RowComponent />);
        const element = screen.getByRole("myRow");
        expect(element).toBeInTheDocument();
    });
});