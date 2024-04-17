import {TodoFooter} from "./TodoFooter"
import { render, screen } from '@testing-library/react';

describe("Test todo footer", ()=>{
    const list:{title:string,status:"active"|"completed"}[] = [
        {title: "1", status:"active"},
        {title: "2", status:"completed"},
        {title: "3", status:"active"},
        {title: "4", status:"completed"},
        {title: "5", status:"completed"},
    ]
    test("Existing element that count lefted items", ()=>{
        render(<TodoFooter isList={list} setList={()=>{}} isFilter="all" setFilter={()=>{}}/>)
        expect(screen.getByText("2 items left")).toBeInTheDocument()
    })
    test("Existing button elements",async ()=>{
        render(<TodoFooter isList={list} setList={()=>{}} isFilter="all" setFilter={()=>{}}/>)
        expect((await screen.findAllByTestId("footer-todo-button")).length).toEqual(4)
        expect((await screen.findAllByRole("button")).length).toEqual(4)
    })
})