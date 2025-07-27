import React from "react";

export function TodoItem({todo, cambiarEstado}){
    const {id,task,completed} = todo;

    const fnCambiarEstado = () =>{
        cambiarEstado(id);
    }

    // Al hacer hover, se aplica un efecto visual al ítem.
    // Si la tarea está completada (checkbox marcado), el ítem se muestra con fondo verde y texto blanco.
    return (<li className={`list-group-item list-group-item-action ${completed ? 'bg-success text-white' : ''}`}>
        <input type ="checkbox" onChange={fnCambiarEstado} checked={completed} className="form-check-input me-2"></input>
        {task}</li>);
}