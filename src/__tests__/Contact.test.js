import { render,screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

test("Contact component",()=>{
    render(<Contact/>);
    const button = screen.getByRole('button');
    // const input_boxes = screen.getAllByRole('textbox');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    // expect(input_boxes.length).toBe(2);
});
test("Contact component",()=>{
    render(<Contact/>);
    // const button = screen.getByRole('button');
    const input_boxes = screen.getAllByRole('textbox');

    // expect(button).toBeInTheDocument();
    expect(input_boxes.length).toBe(2);
})