import Carousel from 'react-bootstrap/Carousel'; // Importa el carrusel de la librería externa react-bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css'; // Para los estilos de Bootstrap (botones, layout, etc).
import './App.css';

// Nuevo Compontente  "Externo".
export function TodoCarrusel() {
    return (
        <Carousel className="mx-auto mb-5 mi-carrusel shadow-lg mb-5">
        <Carousel.Item>
            <img src="/lista-tareas-1.jpg" className="d-block img-carrusel" alt="Lista de tareas 1" />
            <Carousel.Caption ><h3 className="bg-dark bg-opacity-25 text-white p-1 rounded" >TO DO LIST</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src="/lista-tareas-2.jpg" className="d-block img-carrusel" alt="Lista de tareas 2" />
            <Carousel.Caption><h3 className="bg-dark bg-opacity-25 text-white p-1 rounded" >TO DO LIST</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src="/lista-tareas-3.jpg" className="d-block img-carrusel" alt="Lista de tareas 3" />
            <Carousel.Caption><h3 className="bg-dark bg-opacity-25 text-white p-1 rounded" >TO DO LIST</h3></Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}