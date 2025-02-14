import { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";

function InscripcionPage() {
    const { negocio } = useContext(AppContext);

    return (
        <>

            <h1>Formulario de Inscripcion</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formNombreEquipo">
                    <h3>EQUIPO</h3>
                    <Form.Label>Nombre del equipo*</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEntrenador">
                    <h3>ENTRENADOR - PROFESOR/A</h3>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Primer apellido*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Segundo apellido*</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCapitan">
                    <h3>CAPITÁN - JUGADOR 1</h3>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Primer apellido*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Segundo apellido*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Ciclo formativo*</Form.Label>
                    <Form.Select aria-label="Ciclo formativo">
                        <option>Selecciona el ciclo formativo</option>
                        <option value="1">SMR</option>
                        <option value="2">ASIR</option>
                        <option value="3">DAM</option>
                        <option value="4">DAW</option>
                    </Form.Select>
                    <Form.Label>DNI*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" />
                    <Form.Label>Teléfono*</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formJugador">
                    <h3>JUGADOR 2</h3>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Primer apellido*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Segundo apellido*</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Ciclo formativo*</Form.Label>
                    <Form.Select aria-label="Ciclo formativo">
                        <option>Selecciona el ciclo formativo</option>
                        <option value="1">SMR</option>
                        <option value="2">ASIR</option>
                        <option value="3">DAM</option>
                        <option value="4">DAW</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    );
}

export default InscripcionPage;
