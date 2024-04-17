import {TodoList} from "./TodoList"
import { render, screen } from '@testing-library/react';

describe("test todo list", ()=>{
    const list:{title:string,status:"active"|"completed"}[] = [
        {title: "1", status:"active"},
        {title: "2", status:"completed"},
        {title: "3", status:"active"},
        {title: "4", status:"completed"},
        {title: "5", status:"completed"},
    ]
    test("Existing all Todo card", async ()=>{
        render(<TodoList isList={list} isFilter="all" setList={()=>{}}/>)
        expect(await screen.getAllByTestId("todo-card").length).toEqual(5)
    })
    test("Existing active Todo card", async ()=>{
        render(<TodoList isList={list} isFilter="active" setList={()=>{}}/>)
        expect(await screen.getAllByTestId("todo-card").length).toEqual(2)
    })
    test("Existing completed Todo card", async ()=>{
        render(<TodoList isList={list} isFilter="completed" setList={()=>{}}/>)
        expect(await screen.getAllByTestId("todo-card").length).toEqual(3)
    })
})