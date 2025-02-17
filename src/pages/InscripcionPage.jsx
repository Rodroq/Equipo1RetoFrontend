import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import "./Inscripcion.css";
import EquipoForm from "../components/formularios/EquipoForm";
import EntrenadorForm from "../components/formularios/EntrenadorForm";
import CapitanForm from "../components/formularios/CapitanForm";
import JugadoresForm from "../components/formularios/JugadoresForm";
import Modal from "../components/Modal";

function InscripcionPage() {
    const { negocio } = useContext(AppContext);
    const [paso, setPaso] = useState(1);
    const [validated, setValidated] = useState(false);
    const [validez, setValidez] = useState([true, true, true, true]);
    const [formData, setFormData] = useState({
        equipo: "",
        entrenador: {
            nombre: "",
            apellido1: "",
            apellido2: "",
            dni: "",
            telefono: "",
            email: "",
            ciclo: ""
        },
        capitan: {
            nombre: "",
            apellido1: "",
            apellido2: "",
            dni: "",
            telefono: "",
            email: "",
            ciclo: ""
        },
        jugadores: [{ nombre: "", apellido1: "", apellido2: "", ciclo: "" }]
    });
    const [show, setShow] = useState(false);

    const limiteJugadoresNormales = 11;

    function handleClose() {
        setShow(false)
    };

    function handleConfirm() {
        setShow(false)
        console.log('Se ha inscrito al equipo correctamente');
    };

    function handleChange(seccion, index, campo, valor) {
        setFormData((estadoAnterior) => {
            const newFormData = { ...estadoAnterior };
            if (seccion === "jugadores") {
                newFormData.jugadores[index][campo] = valor;
            } else if (seccion === "equipo") {
                newFormData[campo] = valor;
            } else {
                newFormData[seccion][campo] = valor;
            }
            return newFormData;
        });

        if (validated) {
            validarPestana()
        }
    };

    function agregarJugador() {
        if (formData.jugadores.length < limiteJugadoresNormales) {
            setFormData((estadoAnterior) => ({
                ...estadoAnterior,
                jugadores: [
                    ...estadoAnterior.jugadores,
                    { nombre: "", apellido1: "", apellido2: "", ciclo: "" }
                ]
            }));
        }
    };

    function eliminarJugador(index) {
        setFormData((estadoAnterior) => ({
            ...estadoAnterior,
            jugadores: estadoAnterior.jugadores.filter((_, i) => i !== index)
        }));
    };

    function validarEquipo() {
        return formData.equipo.trim() !== "";
    }

    function validarEntrenador() {
        const { nombre, apellido1, apellido2 } = formData.entrenador;
        return nombre.trim() !== "" && apellido1.trim() !== "" && apellido2.trim() !== "";
    }

    function validarCapitan() {
        const { nombre, apellido1, apellido2, dni, telefono, email, ciclo } = formData.capitan;
        return nombre.trim() !== "" && apellido1.trim() !== "" && apellido2.trim() !== "" &&
            dni.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && ciclo.trim() !== "";
    }

    function validarJugadores() {
        return !formData.jugadores.some(jugador =>
            jugador.nombre.trim() === "" ||
            jugador.apellido1.trim() === "" ||
            jugador.apellido2.trim() === "" ||
            jugador.ciclo.trim() === ""
        );
    }

    function validarPestana() {
        const newValidez = [
            validarEquipo(),
            validarEntrenador(),
            validarCapitan(),
            validarJugadores()
        ];
        setValidez(newValidez);
        return newValidez.every(Boolean);
    }

    function handleSubmit() {
        event.preventDefault();
        event.stopPropagation();
        const esValido = validarPestana();

        setValidated(true);

        if (esValido) {
            // Aquí enviamos el formulario, primero mostrando un modal
            // Mostramos el modal
            setShow(true);
            console.log("Formulario válido y enviado");
        } else {
            console.log("Formulario inválido");
        }
    };

    return (
        <>
            <Container className="mt-5">
                <Card className="shadow-lg p-3 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <h1 className="text-2xl font-bold text-center">
                            Formulario de Inscripción
                        </h1>
                        <div className="d-flex justify-content-around mb-6">
                            {/* Formulario Equipo */}
                            <div
                                className={`d-flex pointer flex-column align-items-center p-1 ${paso === 1 ? "text-primary" : !validez[0] ? "text-danger" : "text-muted-foreground"}`}
                                onClick={() => setPaso(1)}
                            >
                                <div className="icono">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        className="bi bi-people-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                    </svg>
                                </div>
                                <span className="text-xs mt-1">EQUIPO</span>
                            </div>

                            {/* Formulario Entrenador */}
                            <div
                                className={`d-flex pointer flex-column align-items-center p-1 ${paso === 2 ? "text-primary" : !validez[1] ? "text-danger" : "text-muted-foreground"}`}
                                onClick={() => setPaso(2)}
                            >
                                <div className="icono">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        className="bi bi-person-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                                <span className="text-xs mt-1">ENTRENADOR</span>
                            </div>

                            {/* Formulario Capitan */}
                            <div
                                className={`d-flex pointer flex-column align-items-center p-1 ${paso === 3 ? "text-primary" : !validez[2] ? "text-danger" : "text-muted-foreground"}`}
                                onClick={() => setPaso(3)}
                            >
                                <div className="icono">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        className="bi bi-person-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                                <span className="text-xs mt-1">CAPITÁN</span>
                            </div>

                            {/* Formulario Jugadores */}
                            <div
                                className={`d-flex pointer flex-column align-items-center p-1 ${paso === 4 ? "text-primary" : !validez[3] ? "text-danger" : "text-muted-foreground"}`}
                                onClick={() => setPaso(4)}
                            >
                                <div className="icono">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        className="bi bi-person-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                                <span className="text-xs mt-1">JUGADORES</span>
                            </div>
                        </div>

                        <hr className="mb-6" />

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {paso === 1 && (
                                <EquipoForm formData={formData} handleChange={handleChange}
                                    onValidation={(isValid) => {
                                        setValidez(prev => {
                                            const newValidez = [...prev];
                                            newValidez[0] = isValid;
                                            return newValidez;
                                        });
                                    }}
                                />
                            )}

                            {paso === 2 && (
                                <EntrenadorForm formData={formData} handleChange={handleChange}
                                    onValidation={(isValid) => {
                                        setValidez(prev => {
                                            const newValidez = [...prev];
                                            newValidez[1] = isValid;
                                            return newValidez;
                                        });
                                    }}
                                />
                            )}

                            {paso === 3 && (
                                <CapitanForm
                                    formData={formData}
                                    handleChange={handleChange}
                                    onValidation={(isValid) => {
                                        setValidez(prev => {
                                            const newValidez = [...prev];
                                            newValidez[2] = isValid;
                                            return newValidez;
                                        });
                                    }}
                                />
                            )}

                            {paso === 4 && (
                                <JugadoresForm
                                    formData={formData}
                                    handleChange={handleChange}
                                    eliminarJugador={eliminarJugador}
                                    agregarJugador={agregarJugador}
                                    limiteJugadoresNormales={limiteJugadoresNormales}
                                    onValidation={(isValid) => {
                                        setValidez(prev => {
                                            const newValidez = [...prev];
                                            newValidez[3] = isValid;
                                            return newValidez;
                                        });
                                    }}
                                />
                            )}

                            <div className="d-flex justify-content-between mt-6">
                                <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => setPaso((prev) => Math.max(1, prev - 1))}
                                    disabled={paso === 1}
                                >
                                    Anterior
                                </Button>
                                {paso < 4 ? (
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => setPaso((prev) => Math.max(1, prev + 1))}
                                    >
                                        Siguiente
                                    </Button>
                                ) : (
                                    <Button type="submit" variant="primary">
                                        Enviar
                                    </Button>
                                )}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Modal
                titulo='Inscribir al equipo'
                texto='¿Seguro que quieres inscribir al equipo?'
                confirmar='Inscribir'
                cancelar='Cancelar'
                show={show}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
            />
        </>
    );
}

export default InscripcionPage;
