import { Form, Row, Col } from "react-bootstrap";

/**
 * Componente del formulario de inscripción, de la pestaña de Entrenador
 * 
 * @param {Object} formData //Datos del formulario para poder cargarlos cuando se cambia de pestaña
 * @param {Function} handleChange //Funcion que hace que cuando algun input cambie se validen las pestañas
 * @param {Function} onValidation //Funcion que permite cambiar si la pestaña actual es valida
 * @returns {JSX.Element}
 */
function EntrenadorForm({ formData, handleChange, onValidation }) {
    const handleBlur = () => {
        const { nombre, apellido1, apellido2 } = formData.entrenador;
        const isValid = nombre.trim() !== "" &&
            apellido1.trim() !== "" &&
            apellido2.trim() !== "";
        onValidation(isValid);
    };

    return (
        <div className="mb-3">
            <Row>
                <Form.Group as={Col} controlId="formEntrenadorNombre">
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Ingrese el nombre"
                        value={formData.entrenador.nombre}
                        onChange={(e) => {
                            handleChange("entrenador", null, "nombre", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese el nombre del entrenador.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formEntrenadorApellido1">
                    <Form.Label>Primer apellido*</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Ingrese el primer apellido"
                        value={formData.entrenador.apellido1}
                        onChange={(e) => {
                            handleChange("entrenador", null, "apellido1", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese el primer apellido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group controlId="formEntrenadorApellido2">
                <Form.Label>Segundo apellido*</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese el segundo apellido"
                    value={formData.entrenador.apellido2}
                    onChange={(e) => {
                        handleChange("entrenador", null, "apellido2", e.target.value);
                        handleBlur();
                    }}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese el segundo apellido.
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
}

export default EntrenadorForm;