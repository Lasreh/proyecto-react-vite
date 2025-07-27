import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid'
import { TodoItem } from "./TodoItem";
import { Fragment } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Para los estilos de Bootstrap (botones, layout, etc)
import 'bootstrap-icons/font/bootstrap-icons.css'; // Para que funcionen los íconos con clases "bi bi-..."

export function TodoList(){
    const [todos,setTodos] = useState([
     // todos es un arreglo (estado)  y setTodos es el metodo que me permitira cambiar el estado   
      //  {id:1}, {id:2},{id:3},{id:4}
        {id:1, task:'Tarea 1', completed:true},
        {id:2, task:'Tarea 2', completed:false},
        {id:3, task:'Tarea 3', completed:true},
        {id:4, task:'Tarea 4', completed:false}
    ]);

    const taskRef = useRef();

    const agregarTarea = () => {
        console.log("AGREGANDO TAREA");
        const task = taskRef.current.value;
        
        if (task === '')return;

        setTodos((prevTodos) => {
            const newTask = {
                id:uuid(),   // para instalar esta función  npm install uuid  y se debe importar 
                task: task,
                completed:false   //  para registrar si la tarea si se completo la tarea o se encuentra pendiente.
            }
            return [...prevTodos,newTask]
        })
    }

    const ResumenTareas = () =>{
        const cant = cantidadTareas()
        if (cant == 0) {
            return(
                <div className="alert alert-success mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>¡Felicitaciones! No tienes tareas pendientes.</h3>
                </div>
                )

        }
        
        if (cant == 1) {
            return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>Solo queda una tarea pendiente: {cant}</h3>
                </div>
                )

        }
            return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>Tienes {cant} tareas pendientes.</h3>
                </div>)

    }

    const ResumenTareasRealizadas = () =>{    //  COMPONENTE LOCAL Resumen Tarea Realizada
        const cant = cantidadTareasRealizadas()
        if (cant === todos.length) {
            return (
                <div className="alert alert-success mt-3">
                    <h2>RESUMEN TAREAS REALIZADAS </h2>
                    <h3>¡Has completado todas tus tareas!</h3>
                </div>
            );
        }

        if (cant == 0) {
            return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS REALIZADAS </h2>
                    <h3>No has realizado ninguna tarea todavía: {cant} </h3>
                </div>
                )
        }

        if (cant == 1) {
            return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS REALIZADAS </h2>
                    <h3>Solo has realizado una tarea: {cant}</h3>
                </div>
                )

        }
        return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS REALIZADAS </h2>
                    <h3>Has realizado {cant} tareas.</h3>
                </div>)
    }

    const cantidadTareas = () =>{
        return todos.filter((todo)=> !todo.completed).length;
    }

    const cantidadTareasRealizadas = () =>{
        return todos.filter((todo)=> todo.completed).length;
    }

    const cambiarEstadoTarea = (id) => {
        console.log(id)      
        const newTodos = [...todos];  //   Hace una copia de elemento     
        const todo = newTodos.find((todo)=> todo.id === id)  
        todo.completed = !todo.completed;
        setTodos(newTodos)   
    }

    const eliminarTareasCompletadas=()=> {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    {/* Ordena la lista de tareas alfabéticamente (A-Z) por el texto de la tarea */}
    const DesplegarTareasOrdenadas = () => {
        return (
            <ul className="list-group">
                {[...todos]
                .sort((a, b) => a.task.localeCompare(b.task))
                .map((todo) =>(
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        cambiarEstado={cambiarEstadoTarea}>
                    </TodoItem>
                ))}
            </ul>
        );
    }

    return(

        <Fragment>
            <div className="input-group mt-4 mb-4">
                <input className="form-control" ref={taskRef} placeholder="Agregar Tarea" type="text"></input>
                {/* Botón mejorado visualmente con Bootstrap (tamaño grande, bordes redondeados, sombra e icono) */}
                <button onClick={agregarTarea}
                className="btn btn-primary btn-lg rounded-pill shadow-lg px-4 py-2 ms-4">
                <i className="bi bi-plus-circle me-2"></i>Agregar</button> {/* Icono de agregar (Bootstrap Icons)" */}
                <button onClick={eliminarTareasCompletadas}
                className="btn btn-danger ms-2 btn-lg rounded-pill shadow-lg px-4 py-2">
                <i className="bi bi-trash me-2"></i> Eliminar</button> {/* Icono de eliminar (Bootstrap Icons)" */}
            </div>

            <ResumenTareas />

            {/* Componente local que muestra cuántas tareas han sido completadas */}
            <ResumenTareasRealizadas />

            {/* Componente local que muestra la lista de tareas ordenadas alfabéticamente (A-Z) */}
            <DesplegarTareasOrdenadas />
        </Fragment>
    );
}
