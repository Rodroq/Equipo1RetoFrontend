import { Form, Row, Col, Button } from "react-bootstrap";
import { useId } from "react";

function JugadoresForm({ formData, handleChange, eliminarJugador, agregarJugador, limiteJugadoresNormales, onValidation }) {
    const id = useId();

    const handleBlur = () => {
        const isValid = !formData.jugadores.some(jugador =>
            jugador.nombre.trim() === "" ||
            jugador.apellido1.trim() === "" ||
            jugador.apellido2.trim() === "" ||
            jugador.ciclo.trim() === ""
        );
        onValidation(isValid);
    };

    return (
        <div className="mb-4">
            {formData.jugadores.map((jugador, index) => (
                <div key={`${id}-${index}`}>
                    <div className="d-flex">
                        <h3>Jugador {index + 2}</h3>
                        {formData.jugadores.length > 1 && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="red"
                                className="bi bi-person-dash mt-1 ms-3 pointer"
                                viewBox="0 0 16 16"
                                onClick={() => eliminarJugador(index)}
                            >
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                            </svg>
                        )}
                    </div>
                    <Row>
                        <Form.Group as={Col} controlId={`formJugadorNombre-${id}-${index}`}>
                            <Form.Label>Nombre del Jugador*</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Ingrese el nombre"
                                value={jugador.nombre}
                                onChange={(e) => {
                                    handleChange("jugadores", index, "nombre", e.target.value);
                                    handleBlur();
                                }}
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">
                                Ingrese el nombre del jugador.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId={`formJugadorApellido1-${id}-${index}`}>
                            <Form.Label>Primer apellido*</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Ingrese el primer apellido"
                                value={jugador.apellido1}
                                onChange={(e) => {
                                    handleChange("jugadores", index, "apellido1", e.target.value);
                                    handleBlur();
                                }}
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">
                                Ingrese el primer apellido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId={`formJugadorApellido2-${id}-${index}`}>
                        <Form.Label>Segundo apellido*</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="Ingrese el segundo apellido"
                            value={jugador.apellido2}
                            onChange={(e) => {
                                handleChange("jugadores", index, "apellido2", e.target.value);
                                handleBlur();
                            }}
                            onBlur={handleBlur}
                        />
                        <Form.Control.Feedback type="invalid">
                            Ingrese el segundo apellido.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId={`formJugadorCiclo-${id}-${index}`}>
                        <Form.Label>Ciclo formativo*</Form.Label>
                        <Form.Select
                            required
                            value={jugador.ciclo}
                            onChange={(e) => {
                                handleChange("jugadores", index, "ciclo", e.target.value);
                                handleBlur();
                            }}
                            onBlur={handleBlur}
                        >
                            <option value="">Selecciona el ciclo formativo</option>
                            <option value="1">SMR</option>
                            <option value="2">ASIR</option>
                            <option value="3">DAM</option>
                            <option value="4">DAW</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Seleccione un ciclo formativo.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                </div>
            ))}
            {formData.jugadores.length < limiteJugadoresNormales && (
                <Button variant="outline-primary" onClick={agregarJugador}>
                    Añadir Jugador
                </Button>
            )}
        </div>
    );
}

export default JugadoresForm;