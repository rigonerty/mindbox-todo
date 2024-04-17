import React from 'react'
import { TodoCard } from '../TodoCard/TodoCard';
import cl from "./TodoList.module.css"

interface props{
  isList:{   
    title:string;
    status:"active"|"completed"}[];
  setList: React.Dispatch<React.SetStateAction<props["isList"]>>
  isFilter:"all"|"active"|"completed"
}

export const TodoList = ({isList,setList,isFilter}:props) => {
  const onChangeStatus = (index:number)=>{
    const newArr = [...isList]
    newArr[index].status = newArr[index].status==="active"?"completed":"active"
    setList(newArr)
  }
  return (
    <div className={cl.TodoList} data-testid="list-todo">
      {isList.length===0?<p>No items yet.</p>:<></>}
      {isList.filter(a=>isFilter==="all"?true: a.status===isFilter).map((a,index)=>{
        return <TodoCard title={a.title} status={a.status} onChangeStatus={()=>onChangeStatus(index)} key={index}/>
      })}
    </div>
  )
}
