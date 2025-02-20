import { Form } from "react-bootstrap";

/**
 * 
 * @param {Object} formData //Datos del formulario para poder cargarlos cuando se cambia de pestaña
 * @param {Function} handleChange //Funcion que hace que cuando algun input cambie se validen las pestañas
 * @param {Function} onValidation //Funcion que permite cambiar si la pestaña actual es valida
 * @returns {JSX.Element}
 */
function EquipoForm({ formData, handleChange, onValidation }) {
    /**
     * Funcion que maneja cuando se deselecciona un input
     * Cuando se ejecuta, valida que todos los campos se hayan rellenado y cambia el onValidation por el valor actual
     * 
     * @returns {void}
     */
    function handleBlur() {
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