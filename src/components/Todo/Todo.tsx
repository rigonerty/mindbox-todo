import React, {useState,useLayoutEffect} from 'react'
import cl from "./Todo.module.css"
import { Input } from '../../ui/Input/Input'
import { Button } from '../../ui/Button/Button'
import { TodoList } from '../TodoList/TodoList'
import { TodoFooter } from '../TodoFooter/TodoFooter'



export const Todo = () => {
    const [isNewTaskValue, setNewTaskValue] = useState("")
    const [isList,setList] = useState<IList[]>(JSON.parse(localStorage.getItem("list")||"[]")||[])
    const [isFilter,setFilter] = useState<"all"|"active"|"completed">("all")
    useLayoutEffect(()=>{
        localStorage.setItem("list", JSON.stringify(isList))
    },[isList])
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter" && isNewTaskValue){
            const newCard:IList = {title:isNewTaskValue,status:"active"}
            setList((a)=>[...a,newCard])
            setNewTaskValue("")
        }
    }
  return (
    <div className={cl.Todo}>
        <Input name='' placeholder='What needs to be done?' isValue={isNewTaskValue} setValue={setNewTaskValue} onKeyDown={onEnter}/>
        <TodoList isList={isList} setList={setList} isFilter={isFilter}/>
        <TodoFooter isList={isList} setList={setList} isFilter={isFilter} setFilter={setFilter}/>
    </div>
  )
}






interface IList{
    title:string;
    status:"active"|"completed"
}