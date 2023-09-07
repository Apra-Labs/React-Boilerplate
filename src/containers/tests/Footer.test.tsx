import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
    test("renders", () => {
        render(<Footer />);
        const paragraphElement = screen.getByTestId("myFooter");
        expect(paragraphElement).toBeInTheDocument();
    });
});