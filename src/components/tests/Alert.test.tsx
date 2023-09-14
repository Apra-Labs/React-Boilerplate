import AlertComponent from "../AlertComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Alert', () => {
    test("renders", () => {
        const message = "My alert";
        render(<AlertComponent message={message}/>);
        const element = screen.getByRole("myAlert");
        expect(element).toBeInTheDocument();
    });
});