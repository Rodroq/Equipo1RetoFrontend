import { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";

function InscripcionPage() {
    const { negocio } = useContext(AppContext);

    return (
        <>
            <Container className="mt-5">
                <Card className="shadow-lg p-3 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <h1>Formulario de Inscripcion</h1>
                        <Form>
                            <div className="mb-3">
                                <h3>EQUIPO</h3>
                                <Form.Group>
                                    <Form.Label>Nombre del equipo*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <h3>ENTRENADOR - PROFESOR/A</h3>
                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Nombre*</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Primer apellido*</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Segundo apellido*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <h3>CAPITÁN - JUGADOR 1</h3>
                                <Form.Group>
                                    <Form.Label>Nombre*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Primer apellido*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Segundo apellido*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ciclo formativo*</Form.Label>
                                    <Form.Select aria-label="Ciclo formativo">
                                        <option>Selecciona el ciclo formativo</option>
                                        <option value="1">SMR</option>
                                        <option value="2">ASIR</option>
                                        <option value="3">DAM</option>
                                        <option value="4">DAW</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>DNI*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Teléfono*</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <h3>JUGADOR 2</h3>
                                <Form.Group>
                                    <Form.Label>Nombre*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Primer apellido*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Segundo apellido*</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ciclo formativo*</Form.Label>
                                    <Form.Select aria-label="Ciclo formativo">
                                        <option>Selecciona el ciclo formativo</option>
                                        <option value="1">SMR</option>
                                        <option value="2">ASIR</option>
                                        <option value="3">DAM</option>
                                        <option value="4">DAW</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default InscripcionPage;
