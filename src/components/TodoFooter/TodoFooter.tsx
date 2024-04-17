import React, { useMemo } from 'react'
import cl from "./TodoFooter.module.css"
import { Button } from '../../ui/Button/Button'

interface props{
    isList:{title:string;status:"active"|"completed"}[];
    setList: React.Dispatch<React.SetStateAction<props["isList"]>>;
    isFilter: "all"|"active"|"completed";
    setFilter: (smth:props["isFilter"])=>void
}
export const TodoFooter = ({isList,setList,isFilter,setFilter}:props) => {
    const taskLeft = useMemo(()=>{
        const n:number = isList.filter(a=>a.status==="active").length
        return n
    }, [isList])
    const clearCompleted = ()=>{
        const newArr = isList.filter(a=>a.status==="active")
        setList(newArr)
    }
  return (
    <div className={cl.TodoFooter} data-testid="footer-todo">
        <p data-testid="footer-todo-count">{taskLeft} items left</p>
        <div>
            <Button onClick={()=>setFilter("all")} style={isFilter==="all"?{border:"1px solid white"}:{}}
            data-testid="footer-todo-button">
                All
            </Button>
            <Button onClick={()=>setFilter("active")} style={isFilter==="active"?{border:"1px solid white"}:{}}
            data-testid="footer-todo-button">
                Active
            </Button>
            <Button onClick={()=>setFilter("completed")} style={isFilter==="completed"?{border:"1px solid white"}:{}}
            data-testid="footer-todo-button">
                Completed
            </Button>
        </div>
        <Button onClick={clearCompleted}
        data-testid="footer-todo-button">Clear Completed</Button>
    </div>
  )
}
