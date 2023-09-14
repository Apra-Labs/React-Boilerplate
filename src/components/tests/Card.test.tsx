import CardComponent from "../CardComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Card', () => {
    test("renders", () => {
        const title = "My Card";
        const message = "My Card";
        render(<CardComponent title={title} message={message}/>);
        const element = screen.getByRole("myCard");
        expect(element).toBeInTheDocument();
    });
});