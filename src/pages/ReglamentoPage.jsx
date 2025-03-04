import { Accordion, Container } from "react-bootstrap";

/**
 * Página que muestra el reglamento del torneo
 * 
 * @returns {JSX.Element}
 */
function ReglamentoPage() {
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Reglamento</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong><i className="bi bi-clipboard-check-fill"></i> Reglas de juego</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>La Liga Solidaria FP se rige por las normas de la FIFA y de la RFEF, con una única salvedad:</p>
                        <p>Cuando un equipo cometa CUATRO o más faltas acumuladas a lo largo de un mismo periodo, se concederá un libre directo por faltas acumuladas por cada falta cometida a partir de la CUARTA y empezando por ella.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong><i className="bi bi-trophy-fill"></i> Sistema de competición</strong></Accordion.Header>
                    <Accordion.Body>
                        <h6>1ª Fase (Liga)</h6>
                        <p>Los equipos participantes se dividirán en 2 grupos (Grupo A y Grupo B) de 5 equipos que se enfrentarán en una liga a una sola vuelta.</p>
                        <p>La 1ª fase se desarrollará en 5 jornadas, descansando un equipo por jornada. Al término de la 1ª fase, el primer y segundo equipo de cada grupo se clasificará para la 2ª fase, quedando el resto de equipos eliminados.</p>
                        <p>Puntuación de los partidos:</p>
                        <ul>
                            <li>Partido ganado: 3 puntos.</li>
                            <li>Partido empatado: 1 punto.</li>
                            <li>Partido perdido: 0 puntos.</li>
                        </ul>
                        <p>Duración de los partidos:</p>
                        <ul>
                            <li>1 tiempo x 10 minutos a tiempo corrido.</li>
                        </ul>

                        <h6>2ª Fase (Eliminatorias y final)</h6>
                        <p>Las semifinales se emparejarán directamente con los equipos clasificados en la primera fase, de la siguiente forma:</p>
                        <ul>
                            <li>Eliminatoria 1: El primer clasificado del Grupo A se enfrentará al segundo clasificado del Grupo B.</li>
                            <li>Eliminatoria 2: El primer clasificado del Grupo B se enfrentará al segundo clasificado del Grupo A.</li>
                        </ul>
                        <p>Los vencedores de ambas eliminatorias se enfrentarán en la gran final.</p>
                        <p>Duración de los partidos:</p>
                        <ul>
                            <li>2 tiempo x 10 minutos a tiempo corrido.</li>
                        </ul>
                        <p>Duración de los descansos:</p>
                        <ul>
                            <li>3 min sobre el terreno de juego, no en vestuarios.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong><i className="bi bi-list-check"></i> Criterios de clasificación</strong></Accordion.Header>
                    <Accordion.Body>
                        <h6>1ª Fase (Liga)</h6>
                        <p>En caso de empate a puntos entre dos o más equipos en la clasificación final, los criterios que se seguirán para resolver el empate serán los siguientes:</p>
                        <p className="fw-bold">Empate a puntos entre 2 equipos</p>
                        <ul>
                            <li>1º Resultado particular del enfrentamiento.</li>
                            <li>2º Golaverage general o diferencia de goles a favor y en contra, teniendo en cuenta todos los partidos disputados en la 1ª fase.</li>
                            <li>3º Fair play o menor coeficiente en las sanciones disciplinarias. (Punto 11).</li>
                            <li>4º Mayor número de goles a favor, teniendo en cuenta todos los partidos de la 1ª fase.</li>
                        </ul>
                        <p className="fw-bold">Empate a puntos entre más de 2 equipos</p>
                        <ul>
                            <li>1º Puntos obtenidos en los enfrentamientos particulares.</li>
                            <li>2º Golaverage particular o diferencia de goles a favor y en contra, teniendo en cuenta los enfrentamientos particulares entre los equipos implicados.</li>
                            <li>3º Golaverage general o diferencia de goles a favor y en contra, teniendo en cuenta todos los partidos disputados en la 1ª fase.</li>
                            <li>4º Fair play o menor coeficiente en las sanciones disciplinarias. (Punto 11).</li>
                            <li>5º Mayor número de goles a favor, teniendo en cuenta todos los partidos de la 1ª fase.</li>
                        </ul>
                        <h6>2ª Fase (Eliminatorias y final)</h6>
                        <p>Los partidos de la 2ª Fase que finalicen con empate, se decidirán directamente por el lanzamiento de penaltis según las normas de la FIFA. No habrá por tanto prórroga.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header><strong><i className="bi bi-people"></i> Número de jugadores y suplementes</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Cada equipo podrá inscribir en el acta del partido a un máximo de 10 jugadores.</p>
                        <p>Las sustituciones podrán realizarse en cualquier momento, esté o no el balón en juego, para lo cual el jugador que va a ser sustituido abandonará el terreno de juego por la zona de sustituciones habilitada en el medio campo, incorporándose al mismo su sustituto por esta misma zona.</p>
                        <p>Las zonas de sustituciones se situarán en la línea de banda a la altura de los banquillos:</p>
                        <ul>
                            <li>Estarán ubicadas a 5m de la línea divisoria y con una longitud de 5m. Se demarcarán con dos líneas en cada extremo, de 80cm de largo —40cm hacia el interior del terreno de juego y 40cm hacia el exterior— y 8cm de ancho.</li>
                            <li>La zona de sustituciones de un equipo estará ubicada en la mitad del terreno de juego defendida por dicho equipo. Los equipos intercambiarán la zona de sustitución en la segunda parte del partido.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><strong><i className="bi bi-person-badge"></i> Número de técnicos</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Cada equipo tendrá, en el banquillo, a un máximo de 2 entrenadores que deberán llevar siempre visible la acreditación que les será entregada antes del primer partido.</p>
                        <p>El primer entrenador será necesariamente un profesor del IES AGL, que velará por el buen desarrollo del torneo. El segundo entrenador será designado por el primero.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header><strong><i className="bi bi-luggage-fill"></i> Equipaciones</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Es obligatorio que todos los miembros de cada equipo tengan en todo momento la camiseta y el pantalón oficial de la Liga Solidaria FP durante los partidos y calentamientos previos a los partidos.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><strong><i className="bi bi-geo-alt-fill"></i> Terreno de juego</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Todos los partidos se disputarán en el pabellón del IES Miguel Herrero Pereda.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header><strong><i className="bi bi-clock-fill"></i> Puntualidad</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Los horarios de los partidos se llevarán con estricta rigurosidad. Los equipos deben estar preparados para saltar al terreno de juego, al menos con 15 minutos de antelación.</p>
                        <p>Si, cuando vaya a comenzar un partido uno de los dos equipos no se hubiera presentado y la organización entendiera que no hay una causa que justificara dicha incomparecencia, el partido podrá darse por perdido al equipo infractor por un resultado de 3-0. La decisión siempre recaerá sobre el Comité de Competición.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><strong><i className="bi bi-arrow-right-circle-fill"></i> Salida al terreno de juego</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>En la segunda fase, además de los 15 minutos de anteleción, los equipos deberán situarse en la zona indicada por la organización, 5 minutos antes del comienzo de cada partido, preparados para salir desfilando junto al árbitro del partido. Una vez que estén los dos equipos colocados, aplaudirán a la grada. Después de ello y tras la señal del árbitro, saldrán en dos filas detrás de éste y antes de realizar el sorteo de campo, el equipo que aparezca en segundo lugar en los calendarios pasará a saludar primero al árbitro, y luego, a los jugadores del otro equipo.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header><strong><i className="bi bi-exclamation-triangle-fill"></i> Sanciones y régimen disciplinario</strong></Accordion.Header>
                    <Accordion.Body>
                        <h6>Amonestaciones</h6>
                        <p>El jugador que a lo largo del torneo acumule dos tarjetas amarillas, será suspendido para el siguiente encuentro. Estas tarjetas son acumulables durante todo el torneo y no se anularán en la siguiente fase, excepto para la final. Únicamente llegando a la final, no tiene en cuenta la acumulación de tarjetas amarillas.</p>
                        <h6>Expulsiones</h6>
                        <p>El jugador que fuera expulsado del terreno de juego por doble amarilla, será sancionado con 1 partido.</p>
                        <p>El jugador que fuera expulsado del terreno de juego tarjeta roja directa, será suspendido con uno o más partidos, pudiendo incluso llegar a ser expulsado del torneo si el Comité de Competición así lo decidiera.</p>
                        <p>La expulsión de un jugador será castigada siempre, incluso en cualquiera de las finales. En caso de empate y como uno de los criterios clasificatorios, la acumulación de tarjetas tendrá un valor negativo a la hora de clasificarse (Fair Play), teniendo un valor de:</p>
                        <ul>
                            <li>1 punto a cada tarjeta amarilla.</li>
                            <li>2 puntos a una doble tarjeta amarilla.</li>
                            <li>3 punto por cada tarjeta roja directa.</li>
                        </ul>
                        <p>La suma de estos puntos sólo y exclusivamente se hará mediante los informes de sanciones de la organización.</p>
                        <p>Si un equipo demostrara actitud violenta durante la competición (protestas incorrectas a las decisiones arbitrales, enfrentamiento con los responsables de los equipos y especialmente con los miembros de la organización, etc.) podrá ser automáticamente expulsado de la misma.</p>
                        <p>El entrenador y el capitán de cada equipo serán responsables de la actitud y comportamiento de sus jugadores hacia los árbitros, compañeros, adversarios, público, organización y materiales de las instalaciones deportivas (vestuarios, banquillos, terrenos de juego...).</p>
                        <p>La organización inspeccionará los vestuarios antes y después de cada partido con cada delegado de equipo para certificar que dichos vestuarios se utilizan de una manera correcta. A su vez éste, firmará que en caso de producirse cualquier deterioro bien sea en banquillos, vestuarios o terreno de juego, el delegado, el equipo y la persona que produzca dichos deterioros o destrozos se hará responsable de ellos.</p>
                        <h6>Número mínimo de jugadores/as</h6>
                        <p>El número mínimo de jugadores por equipo para comenzar un partido es de 5 jugadores.</p>
                        <p>Si durante la disputa del partido, un equipo se quedase de forma permanente (sin contar las exclusiones temporales) con menos de 5 jugadores, se dará el partido por finalizado con el resultado de 3-0 a favor del equipo adversario, salvo que el resultado en ese momento fuese más favorable a dicho equipo, en cuyo caso, se tomaría ese resultado como resultado final.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header><strong><i className="bi bi-flag-fill"></i> Árbitros</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Todos los partidos serán dirigidos por los árbitros colegiados. El árbitro y el Coordinador del Torneo Deportivo, serán la máxima autoridad en el terreno de juego. Ambos tendrán la potestad de detener o suspender un partido en caso de ver actitudes antideportivas en uno o los dos equipos, o comportamientos inadecuados en el público que puedan interferir en el buen desarrollo del partido y del torneo. Tanto el resultado final del encuentro, como la resolución disciplinaria de los hechos será labor del Comité de Competición.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header><strong><i className="bi bi-people-fill"></i> Comité de competición</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El Comité de Competición, analizará todas las incidencias de cada jornada, adoptando las decisiones disciplinarias que considere oportunas.</p>
                        <p>Todas las decisiones del Comité de Competición son inapelables, y todos los equipos participantes deberán aceptar estas decisiones sin excepción.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header><strong><i className="bi bi-calendar"></i> Programa de juego</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>El Comité Organizador se reserva el derecho de hacer cambios en el programa de partidos, tanto en lo que se refiere a la división de grupos, como horarios y campos de juego. La información de los cambios se publicará en la página web.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header><strong><i className="bi bi-dribbble"></i> Balones</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Todos los partidos se jugarán con balones de talla 4, con una circuferencia de 62 cm y un peso de entre 400 y 440 gr.</p>
                        <p>La organización dejará 1 balón a cada equipo para el calentamiento previo al partido.</p>
                        <p>Los equipos pueden traer sus propios balones para realizar ejercicios de calentamiento.</p>
                        <p>No se permite calentar con balones en la zona de pabellón, debiendo hacerlo en el exterior del mismo.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header><strong><i className="bi bi-shield-fill"></i> Seguro</strong></Accordion.Header>
                    <Accordion.Body>
                        <p>Todos los participantes en el torneo estarán amparados por el seguro escolar como alumnos del IES.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default ReglamentoPage;
