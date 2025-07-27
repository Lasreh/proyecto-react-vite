import './App.css';
import { TodoHeader } from './TodoHeader';
import { TodoFooter } from './TodoFooter';
import { TodoList } from './TodoList';

// Importa el componente externo que muestra un carrusel de imágenes.
import { TodoCarrusel } from './TodoCarrusel';

export function App() {

  return (
    <>
    {/* Encabezado de la aplicación con estilos Bootstrap */}
    <TodoHeader />

    {/* Carrusel de imágenes (componente externo) */}
    <TodoCarrusel />

    {/* Lista de tareas (componente local) */}
    <TodoList />

    {/* Pie de página de la aplicación */}
    <TodoFooter />
    </>
  );
}

export default App
