import ImageComponent from "../ImageComponent";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Image', () => {
    test("renders", () => {
        render(<ImageComponent src={require("../../assets/images/apra_logo.png")}/>);
        const element = screen.getByRole("myImage");
        expect(element).toBeInTheDocument();
    });
});