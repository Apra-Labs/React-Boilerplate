import HeaderComponent from "../HeaderComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    test("renders", () => {
        const label = "My label";
        render(<HeaderComponent label={label}/>);
        const element = screen.getByRole("myHeader");
        expect(element).toBeInTheDocument();
    });
});