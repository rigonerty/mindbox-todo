import React from 'react'
import cl from "./TodoCard.module.css"
import { Button } from '../../ui/Button/Button';

interface props{
  title:string;
  status:"active"|"completed";
  onChangeStatus: ()=>void;
} 

export const TodoCard = ({title, status,onChangeStatus}:props) => {
  const cls = [cl.TodoCard]
  if(status === "completed"){ cls.push(cl.active) }
  return (
    <div className={cls.join(" ")} onClick={onChangeStatus} data-testid="todo-card"><Button>{status==="completed"?"✔":""}</Button><p>{title}</p></div>
  )
}
