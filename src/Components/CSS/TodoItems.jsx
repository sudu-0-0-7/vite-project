import './TodoItem.css'
import tick from'../Assets/tick.png'
import not_tick from '../Assets/not_tick.png'
import cross from '../Assets/cross.png'
const TodoItems  = ({no, display, text, setTodos}) => {

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo)=>todo.no!=no)
    setTodos(data);
  }

  const toggle = () =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0; i< data.length; i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through";
        }else{
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
      <div className="todoItems">
        <div className={`todoItems-container ${display}`} onClick={()=>{toggle(no)}}>
          {display === ""?
            <img src={not_tick} alt="" className="todoItems-tick-icon" />:
            <img src= {tick} alt="" className="todoItems-tick-icon" />}
            <div className="todoitems-text">{text} </div>
        </div>
        <img src={cross} alt="" className="todiItems-cross-icon" onClick={()=>{deleteTodo(no)}} />
      </div>
  )
}

export default TodoItems
