import { Form, Row, Col, Button } from "react-bootstrap";
import { useId } from "react";

/**
 * Componente del formulario de inscripción, de la pestaña de Entrenador
 * @param {Object} formData //Datos del formulario para poder cargarlos cuando se cambia de pestaña
 * @param {Function} handleChange //Funcion que hace que cuando algun input cambie se validen las pestañas
 * @param {Function} onValidation //Funcion que permite cambiar si la pestaña actual es valida
 * @returns {JSX.Element}
 */
function JugadoresForm({ formData, handleChange, eliminarJugador, agregarJugador, limiteJugadoresNormales, onValidation }) {
    // Guardamos una id del componente para aplicarselo a la key de cada jugador
    const id = useId();

    /**
     * Funcion que maneja cuando se deselecciona un input
     * Cuando se ejecuta, valida que todos los campos se hayan rellenado y cambia el onValidation por el valor actual
     * @returns {void}
     */
    function handleBlur() {
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
                            <i className="bi bi-person-dash ms-3 pointer text-danger" style={{ fontSize: '30px'}} onClick={() => eliminarJugador(index)}></i>
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