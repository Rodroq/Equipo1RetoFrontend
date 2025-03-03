import { Editor } from "@tinymce/tinymce-react";
import { Form, Button, Container, FloatingLabel, FormGroup } from "react-bootstrap";

function EditarPublicacionPage() {
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Editar publicación</h2>
            <Form className="shadow-lg p-5 border-0 rounded-4 bg-light" onSubmit={null}>
                <FloatingLabel controlId="floatingInput" label="Título" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Título"
                        name="titulo"
                    />
                </FloatingLabel>
                <Form.Check 
                    type="switch"
                    id="switch-portada"
                    label="Habilitar portada"
                    className="mb-3"
                />
                <FloatingLabel controlId="floatingInput" label="Ruta de Vídeo" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Ruta de Vídeo"
                        name="rutaVideo"
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Ruta de Audio" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Ruta de Audio"
                        name="rutaAudio"
                    />
                </FloatingLabel>
                <Form.Group controlId="formImagen" className="mb-3">
                    <Form.Label>Seleccionar imagen:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <FormGroup controlId="editor" className="mb-3">
                    <Form.Label>Contenido:</Form.Label>
                    <Editor apiKey="o57jd9b86kr8ia7ehmzrmx3b4zx9k8amj9fj3j8enj2gnf48"
                        init={{
                            width: '100%',
                            height: 500,
                            plugins: [
                                // Core editing features
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                // Your account includes a free trial of TinyMCE premium features
                                // Try the most popular premium features until Mar 3, 2025:
                                //'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            // tinycomments_mode: 'embedded',
                            // tinycomments_author: 'Author name',
                            // mergetags_list: [
                            //   { value: 'First.Name', title: 'First Name' },
                            //   { value: 'Email', title: 'Email' },
                            // ],
                            // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                        }}
                        initialValue="Escribe tu publicación aquí"
                    />
                </FormGroup>
                <Button type="submit" variant="primary">Publicar</Button>
            </Form>
        </Container>
    );
}

export default EditarPublicacionPage;