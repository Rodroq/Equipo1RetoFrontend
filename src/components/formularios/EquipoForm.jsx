import { Form } from "react-bootstrap";

function EquipoForm({ formData, handleChange }) {
    return (
        <div className="mb-3">
            <Form.Group controlId="formEquipo">
                <Form.Label>Nombre del equipo*</Form.Label>
                <Form.Control
                    type="text"
                    required
                    value={formData.equipo}
                    onChange={(e) =>
                        handleChange("equipo", null, "equipo", e.target.value)
                    }
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el nombre del equipo.
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
}

export default EquipoForm;