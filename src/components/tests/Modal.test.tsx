import ModalComponent from "../ModalComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Modal', () => {
    test("renders", () => {
        const handleHide = jest.fn();
        const title = "My Title";
        const body = "My modal";
        render(<ModalComponent onHide={handleHide} title={title} body={body} show/>);
        const bodyElement = screen.getByText("My modal");
        expect(bodyElement).toBeInTheDocument();
        const titleElement = screen.getByText("My Title");
        expect(titleElement).toBeInTheDocument();
    });
});