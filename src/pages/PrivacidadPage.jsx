import { Accordion, Container } from "react-bootstrap";

/**
 * Página que muestra la política de privacidad
 * 
 * @returns {JSX.Element}
 */
function PrivacidadPage() {
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Política de privacidad</h2>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Política de privacidad y datos</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Respetando lo establecido en la legislación vigente, Liga Solidaria FP 2025 (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>Leyes que incorpora esta política de privacidad</strong></Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la
                                protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre
                                circulación de estos datos (RGPD).</li>
                            <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos
                                digitales (LOPD-GDD).</li>
                            <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley
                                Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                            <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico
                                (LSSI-CE).</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>Identidad del responsable del tratamiento de los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El responsable del tratamiento de los datos personales recogidos en Liga Solidaria FP 2025 es: IES
                            Miguel Herrero, provista de NIF/CIF: A1234567Z. Sus datos de contacto son los siguientes:</p>
                        <ul>
                            <li>Dirección: Pº Julio Hauzeur, 59,, 39300 Torrelavega, Cantabria</li>
                            <li>Teléfono de contacto: 942 __ __ __</li>
                            <li>Email de contacto: info@ligasolidariafp.es</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header><strong>Registro de Datos de Carácter Personal</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados
                            por Liga Solidaria FP 2025, mediante los formularios extendidos en sus páginas quedarán incorporados y
                            serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre
                            Liga Solidaria FP 2025 y el Usuario o el mantenimiento de la relación que se establezca en los
                            formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo
                            previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del
                            RGPD,
                            se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de
                            tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><strong>Principios aplicables al tratamiento de los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el
                            artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección
                            de
                            Datos Personales y garantía de los derechos digitales:</p>
                        <ul>
                            <li>Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario
                                previa información completamente transparente de los fines para los cuales se recogen los datos personales.
                            </li>
                            <li>Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados,
                                explícitos y legítimos.</li>
                            <li>Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente
                                necesarios en relación con los fines para los que son tratados.</li>
                            <li>Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.</li>
                            <li>Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que
                                se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
                            <li>Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice
                                su seguridad y confidencialidad.</li>
                            <li>Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los
                                principios anteriores se cumplen.</li>

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header><strong>Categorías de datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Las categorías de datos que se tratan en Liga Solidaria FP 2025 son únicamente datos identificativos.
                            En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><strong>Base legal para el tratamiento de los datos personale</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>La base legal para el tratamiento de los datos personales es el consentimiento. Liga Solidaria FP 2025 se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos
                            personales para uno o varios fines específicos.</p>
                        <p>El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el
                            consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio
                            Web.</p>
                        <p>En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar
                            consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en
                            caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles
                            para el correcto desarrollo de la operación realizada.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header><strong>Fines del tratamiento a que se destinan los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Los datos personales son recabados y gestionados por Liga Solidaria FP 2025 con la finalidad de poder
                            facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de
                            la relación que se establezca en los formularios que este último rellene o para atender una solicitud o
                            consulta.
                        </p>
                        <p>Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y
                            estadística, y actividades propias del objeto social de Liga Solidaria FP 2025, así como para la
                            extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así
                            como mejorar la calidad, funcionamiento y navegación por el Sitio Web.</p>
                        <p>En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines
                            específicos
                            del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información
                            recopilada.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><strong>Períodos de retención de los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento
                            y, en todo caso, únicamente durante el siguiente plazo: 18 MESES, o hasta que el Usuario solicite su supresión.
                            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual
                            se
                            conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este
                            plazo.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header><strong>Destinatarios de los datos personale</strong></Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>IES Miguel Herrero (Pº Julio Hauzeur, 59,, 39300 Santander, Cantabria)</li>
                            <li>Federación Cantabra de Fútbol (C. Marqués de la Hermida, 14, 39009 Santander, Cantabria)</li>
                        </ul>
                        <p>En caso de que el Responsable del tratamiento tenga la intención de transferir datos personales a un tercer
                            país
                            u organización internacional, en el momento en que se obtengan los datos personales, se informará al Usuario
                            acerca del tercer país u organización internacional al cual se tiene la intención de transferir los datos, así
                            como de la existencia o ausencia de una decisión de adecuación de la Comisión.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header><strong>Datos personales de menores de edad</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de
                            Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar
                            su
                            consentimiento para el tratamiento de sus datos personales de forma lícita por Liga Solidaria FP 2025.
                            Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el
                            tratamiento,
                            y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header><strong>Secreto y seguridad de los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Liga Solidaria FP 2025 se compromete a adoptar las medidas técnicas y organizativas necesarias, según
                            el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los
                            datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos
                            personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a
                            dichos
                            datos.</p>
                        <p>Sin embargo, debido a que Liga Solidaria FP 2025 no puede garantizar la inexpugnabilidad de internet
                            ni
                            la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del
                            tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la
                            seguridad
                            de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las
                            personas
                            físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los
                            datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o
                            ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no
                            autorizados a dichos datos.</p>
                        <p>Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete
                            a
                            informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea
                            respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header><strong>Derechos derivados del tratamiento de los datos personales</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El Usuario  podrá ejercer frente al Responsable del
                            tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de
                            Protección de Datos Personales y garantía de los derechos digitales:</p>
                        <ul>
                            <li>Derecho de acceso: Es el derecho del Usuario a obtener confirmación de si Liga Solidaria FP 2025

                                está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos
                                de
                                carácter personal y del tratamiento que el sitio web haya realizado o realice, así como,
                                entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las
                                comunicaciones realizadas o previstas de los mismos.</li>
                            <li>Derecho de rectificación: Es el derecho del Usuario a que se modifiquen sus datos personales que resulten
                                ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.</li>
                            <li>Derecho de supresión (&quot;el derecho al olvido&quot;): Es el derecho del Usuario, siempre que la legislación
                                vigente
                                no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios
                                para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al
                                tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo
                                legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos
                                personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido
                                obtenidos
                                producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de
                                suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de
                                su
                                aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos
                                personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.</li>
                            <li>Derecho a la limitación del tratamiento: Es el derecho del Usuario a limitar el tratamiento de sus datos
                                personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de
                                sus
                                datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos
                                personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al
                                tratamiento.</li>
                            <li>Derecho a la portabilidad de los datos: En caso de que el tratamiento se efectúe por medios automatizados,
                                el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato
                                estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre
                                que
                                sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro
                                responsable.</li>
                            <li>Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de
                                carácter personal o se cese el tratamiento de los mismos por parte de Liga Solidaria FP 2025
                                .</li>
                            <li>Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de
                                carácter personal o se cese el tratamiento de los mismos por parte de Liga Solidaria FP 2025
                                . Así
                                pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del
                                tratamiento con la referencia &quot;RGPD-www.ligasolidariafp.es&quot;, especificando:<br />
                                <ul>
                                    <li>Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será
                                        también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como
                                        el
                                        documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro
                                        medio válido en derecho que acredite la identidad</li>
                                    <li>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.</li>
                                    <li>Domicilio a efecto de notificaciones.</li>
                                    <li>Fecha y firma del solicitante.</li>
                                    <li>Todo documento que acredite la petición que formula.</li>
                                </ul>
                            </li>
                            <li>Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:
                                Dirección postal: Pº Julio Hauzeur, 59, 39011 Santander, Cantabria
                                Correo electrónico: info@ligasolidariafp.es
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header><strong>Enlaces a sitios web de terceros</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de
                            Liga Solidaria FP 2025, y que por tanto no son operados por Liga Solidaria FP 2025. Los
                            titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos,
                            en
                            cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header><strong>Reclamaciones ante la autoridad de control</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en
                            la
                            que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una
                            reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual,
                            lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia
                            Española de Protección de Datos (https://www.aepd.es/).</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                    <Accordion.Header><strong>Aceptación y cambios en esta política de privacidad</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de
                            carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos
                            personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y
                            para
                            las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.
                        </p>
                        <p>Liga Solidaria FP 2025 se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su
                            propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de
                            Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma
                            explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de
                            los
                            últimos cambios o actualizaciones.</p>
                        <p>Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y
                            del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al
                            tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5
                            de
                            diciembre, de Protección de Datos Personales y garantía de los derechos digitales.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                    <Accordion.Header><strong>Política de privacidad y datos</strong></Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default PrivacidadPage;
