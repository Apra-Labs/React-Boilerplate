import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
    test("renders", () => {
        render(<Footer />);
        const Element = screen.getByRole("myFooter");
        expect(Element).toBeInTheDocument();
    });
});