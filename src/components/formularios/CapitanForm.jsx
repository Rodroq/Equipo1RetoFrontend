import { Form, Row, Col } from "react-bootstrap";

function CapitanForm({ formData, handleChange, onValidation }) {
    const handleBlur = () => {
        const { nombre, apellido1, apellido2, dni, telefono, email, ciclo } = formData.capitan;
        const isValid = nombre.trim() !== "" &&
            apellido1.trim() !== "" &&
            apellido2.trim() !== "" &&
            dni.trim() !== "" &&
            telefono.trim() !== "" &&
            email.trim() !== "" &&
            ciclo.trim() !== "";
        onValidation(isValid);
    };

    return (
        <div className="mb-3">
            <Row>
                <Form.Group as={Col} controlId="formCapitanNombre">
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Ingrese el nombre"
                        value={formData.capitan.nombre}
                        onChange={(e) => {
                            handleChange("capitan", null, "nombre", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese el nombre del capitán.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formCapitanApellido1">
                    <Form.Label>Primer apellido*</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Ingrese el primer apellido"
                        value={formData.capitan.apellido1}
                        onChange={(e) => {
                            handleChange("capitan", null, "apellido1", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese el primer apellido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group controlId="formCapitanApellido2">
                <Form.Label>Segundo apellido*</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese el segundo apellido"
                    value={formData.capitan.apellido2}
                    onChange={(e) => {
                        handleChange("capitan", null, "apellido2", e.target.value);
                        handleBlur();
                    }}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese el segundo apellido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCapitanCiclo">
                <Form.Label>Ciclo formativo*</Form.Label>
                <Form.Select
                    required
                    value={formData.capitan.ciclo}
                    onChange={(e) => {
                        handleChange("capitan", null, "ciclo", e.target.value);
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
            <Row>
                <Form.Group as={Col} controlId="formCapitanDNI">
                    <Form.Label>DNI*</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Ingrese el DNI"
                        value={formData.capitan.dni}
                        onChange={(e) => {
                            handleChange("capitan", null, "dni", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese un DNI válido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formCapitanTelefono">
                    <Form.Label>Teléfono*</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        placeholder="Ingrese el teléfono"
                        value={formData.capitan.telefono}
                        onChange={(e) => {
                            handleChange("capitan", null, "telefono", e.target.value);
                            handleBlur();
                        }}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese un teléfono válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group controlId="formCapitanEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                    type="email"
                    required
                    placeholder="Ingrese el email"
                    value={formData.capitan.email}
                    onChange={(e) => {
                        handleChange("capitan", null, "email", e.target.value);
                        handleBlur();
                    }}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese un email válido.
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
}

export default CapitanForm;