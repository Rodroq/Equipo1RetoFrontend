import { Form } from "react-bootstrap";

function EquipoForm({ formData, handleChange, onValidation }) {
    const handleBlur = () => {
        const isValid = formData.equipo.trim() !== "";
        onValidation(isValid);
    };

    return (
        <div className="mb-3">
            <Form.Group controlId="formEquipo">
                <Form.Label>Nombre del equipo*</Form.Label>
                <Form.Control
                    type="text"
                    required
                    value={formData.equipo}
                    onChange={(e) => {
                        handleChange("equipo", null, "equipo", e.target.value);
                        handleBlur();
                    }}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el nombre del equipo.
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
}

export default EquipoForm;