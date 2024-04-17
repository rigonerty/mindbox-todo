import userEvent from "@testing-library/user-event";
import {Todo} from "./Todo"
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing Todo", ()=>{
    test("Input Element in document", ()=>{
        render(<Todo />);
        expect(screen.getByTestId("custom-input-element")).toBeInTheDocument()
    })
    test("Footer Element in document", ()=>{
        render(<Todo />);
        expect(screen.getByTestId("footer-todo")).toBeInTheDocument()
    })
    test("List Element in document", ()=>{
        render(<Todo />);
        expect(screen.getByTestId("list-todo")).toBeInTheDocument()
    })
    test("adding task", async ()=>{

        render(<Todo/>)
        
        fireEvent.change(screen.getByTestId("custom-input-element-input"),{
            target: { value: "add new test" }
        }) 
        expect(screen.getByDisplayValue("add new test")).toBeInTheDocument()
        fireEvent.keyDown(screen.getByTestId("custom-input-element-input"),{key:"Enter",code: 'Enter',charCode: 13})
        expect(await screen.getAllByTestId("todo-card").length).toEqual(1)
        
    })
})