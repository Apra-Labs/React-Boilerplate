import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import HeaderComponent from "../HeaderComponent";

describe('Header', () => {
    test("renders", () => {
        const myTitle = "My header";
        render(<HeaderComponent title={myTitle} />);
        const element = screen.getByRole("myHeader");
        expect(element).toBeInTheDocument();
    });
});