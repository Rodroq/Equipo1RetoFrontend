import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";

function EditarPublicacionPage() {

    const editorRef = useRef(null);

    /**
     * 
     */
    function handleSubmit() {
        event.preventDefault();
        event.stopPropagation();
        const content = editorRef.current.getContent();
        console.log(content)
        //setValidated(true);        
    };

    return (
        <>
            <h1>PublicacionPage</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitulo" className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Check 
                    type="switch"
                    id="switch-portada"
                    label="Habilitar portada"
                />
                <Form.Group controlId="formRutaVideo" className="mb-3">
                    <Form.Label>Ruta de Vídeo</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formRutaAudio" className="mb-3">
                    <Form.Label>Ruta de Audio</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formImagen" className="mb-3">
                    <Form.Label>Seleccionar imagen</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Editor apiKey="o57jd9b86kr8ia7ehmzrmx3b4zx9k8amj9fj3j8enj2gnf48"
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        //width: 1200,
                        height: 300,
                        plugins: [
                            // Core editing features
                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link','image', 'media', 'lists', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                            
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
                <Button type="submit" variant="primary">
                    Publicar
                </Button>
            </Form>

        </>
    );
}

export default EditarPublicacionPage;