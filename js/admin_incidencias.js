const incidenciasMock = [
    {
        "id": 1,
        "categoria_incidencia": "LOGISTICA",
        "codigo_ticket": "INC-B9029736",
        "comentarios_resolucion": null,
        "costo_estimado": "350000",
        "descripcion_incidencia": "El proveedor del servicio de alimentación presenta un retraso de 45 minutos afectando el cronograma oficial de la cena de gala.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-06-20 17:34:41.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "12",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Retraso en la entrega del catering para la gala",
        "id_evento": "16"
    },
    {
        "id": 2,
        "categoria_incidencia": "LOGISTICA",
        "codigo_ticket": "INC-2CD83677",
        "comentarios_resolucion": null,
        "costo_estimado": "150000",
        "descripcion_incidencia": "El camión de provisiones quedó atrapado en el tráfico de Av. Vicuña Mackenna. Se estima un retraso de 20 minutos para el inicio de la Entrada.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-06-20 17:57:41.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "1",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Retraso crítico en el catering de la Gala",
        "id_evento": "16"
    },
    {
        "id": 3,
        "categoria_incidencia": "TECNICA",
        "codigo_ticket": "INC-3F7C3D83",
        "comentarios_resolucion": "Se cambió cable XLR dañado y se solucionó el zumbido",
        "costo_estimado": "45000",
        "descripcion_incidencia": "El micrófono principal presenta un zumbido constante durante las pruebas de la muestra de tango.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-06-20 18:01:51.000000",
        "fecha_resolucion": "2026-06-20 18:03:15.000000",
        "id_administrador_asignado": "1",
        "id_usuario_reporta": "1",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Falla de sonido en escenario",
        "id_evento": "16"
    },
    {
        "id": 4,
        "categoria_incidencia": "SERVICIO",
        "codigo_ticket": "INC-9A1B2C3D",
        "comentarios_resolucion": null,
        "costo_estimado": "120000",
        "descripcion_incidencia": "Uno de los garzones derramó bebidas sobre la mesa principal durante el discurso del CEO. Se necesita reposición de mantelería.",
        "estado_incidencia_string": "EN PROCESO",
        "fecha_incidencia": "2026-08-15 21:12:33.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": "2",
        "id_usuario_reporta": "15",
        "prioridad_incidencia": "MEDIA",
        "titulo_incidencia": "Incidente en mesa principal por derrame de bebidas",
        "id_evento": "17"
    },
    {
        "id": 5,
        "categoria_incidencia": "PERSONAL",
        "codigo_ticket": "INC-7E8F9A0B",
        "comentarios_resolucion": null,
        "costo_estimado": "80000",
        "descripcion_incidencia": "El bartender asignado llegó 30 minutos tarde al evento corporativo, retrasando la apertura de la barra libre.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-08-15 19:45:10.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "15",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Atraso de bartender en evento corporativo",
        "id_evento": "17"
    },
    {
        "id": 6,
        "categoria_incidencia": "SERVICIO",
        "codigo_ticket": "INC-4C5D6E7F",
        "comentarios_resolucion": "Se entregó bebida sin alcohol al cliente que tenía restricción y se disculpó personalmente.",
        "costo_estimado": "20000",
        "descripcion_incidencia": "Cliente con restricción de alcohol recibió por error un trago con alcohol en la barra libre.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-11-28 22:30:05.000000",
        "fecha_resolucion": "2026-11-28 22:45:00.000000",
        "id_administrador_asignado": "3",
        "id_usuario_reporta": "12",
        "prioridad_incidencia": "MEDIA",
        "titulo_incidencia": "Error en entrega de bebida a cliente con restricción",
        "id_evento": "12"
    },
    {
        "id": 7,
        "categoria_incidencia": "LOGISTICA",
        "codigo_ticket": "INC-8G9H0I1J",
        "comentarios_resolucion": null,
        "costo_estimado": "50000",
        "descripcion_incidencia": "El sistema de proyección falló durante la presentación de la empresa. Se necesita revisar el proyector.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-10-15 11:20:45.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "15",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Falla en sistema de proyección del Summit",
        "id_evento": "15"
    },
    {
        "id": 8,
        "categoria_incidencia": "TECNICA",
        "codigo_ticket": "INC-2K3L4M5N",
        "comentarios_resolucion": "Se reemplazó el equipo de audio defectuoso y se realizó prueba de sonido completa.",
        "costo_estimado": "180000",
        "descripcion_incidencia": "El sistema de audio principal dejó de funcionar a mitad del evento, afectando la presentación del tecladista.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-07-09 20:15:30.000000",
        "fecha_resolucion": "2026-07-09 21:30:00.000000",
        "id_administrador_asignado": "1",
        "id_usuario_reporta": "1",
        "prioridad_incidencia": "CRITICA",
        "titulo_incidencia": "Falla total de audio en Gala de la Confraternidad",
        "id_evento": "16"
    },
    {
        "id": 9,
        "categoria_incidencia": "OTROS",
        "codigo_ticket": "INC-6O7P8Q9R",
        "comentarios_resolucion": "Se coordinó con el proveedor para reponer los vasos faltantes.",
        "costo_estimado": "30000",
        "descripcion_incidencia": "Se detectó falta de vasos highball en la estación de barra durante el evento empresarial.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-08-15 23:05:12.000000",
        "fecha_resolucion": "2026-08-16 01:00:00.000000",
        "id_administrador_asignado": "2",
        "id_usuario_reporta": "15",
        "prioridad_incidencia": "BAJA",
        "titulo_incidencia": "Falta de vasos en estación de barra",
        "id_evento": "17"
    },
    {
        "id": 10,
        "categoria_incidencia": "LOGISTICA",
        "codigo_ticket": "INC-0S1T2U3V",
        "comentarios_resolucion": null,
        "costo_estimado": "250000",
        "descripcion_incidencia": "El proveedor de hielo no llegó al evento, se debe conseguir hielo urgente para la coctelería.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-11-28 16:50:00.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "12",
        "prioridad_incidencia": "CRITICA",
        "titulo_incidencia": "Falta de hielo para coctelería en Matrimonio",
        "id_evento": "12"
    },
    {
        "id": 11,
        "categoria_incidencia": "PERSONAL",
        "codigo_ticket": "INC-4W5X6Y7Z",
        "comentarios_resolucion": "Se reasignó al personal y se completó el servicio sin mayores inconvenientes.",
        "costo_estimado": "60000",
        "descripcion_incidencia": "Un garzón abandonó su puesto durante la recepción, dejando una zona sin atención.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-06-20 19:20:00.000000",
        "fecha_resolucion": "2026-06-20 19:35:00.000000",
        "id_administrador_asignado": "1",
        "id_usuario_reporta": "1",
        "prioridad_incidencia": "MEDIA",
        "titulo_incidencia": "Garzón abandonó puesto en recepción",
        "id_evento": "16"
    },
    {
        "id": 12,
        "categoria_incidencia": "SERVICIO",
        "codigo_ticket": "INC-8A9B0C1D",
        "comentarios_resolucion": "Se ofreció disculpas al cliente y se entregó un postre de cortesía.",
        "costo_estimado": "15000",
        "descripcion_incidencia": "Un plato fue entregado con un ingrediente incorrecto (contaminación cruzada) a un cliente con alergia.",
        "estado_incidencia_string": "RESUELTO",
        "fecha_incidencia": "2026-06-20 20:45:30.000000",
        "fecha_resolucion": "2026-06-20 21:00:00.000000",
        "id_administrador_asignado": "3",
        "id_usuario_reporta": "12",
        "prioridad_incidencia": "CRITICA",
        "titulo_incidencia": "Alergia por contaminación cruzada",
        "id_evento": "16"
    },
    {
        "id": 13,
        "categoria_incidencia": "TECNICA",
        "codigo_ticket": "INC-2E3F4G5H",
        "comentarios_resolucion": null,
        "costo_estimado": "90000",
        "descripcion_incidencia": "Las luces del escenario parpadearon durante la muestra de tango, dificultando la visibilidad de los bailarines.",
        "estado_incidencia_string": "EN PROCESO",
        "fecha_incidencia": "2026-06-20 21:10:00.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": "2",
        "id_usuario_reporta": "1",
        "prioridad_incidencia": "MEDIA",
        "titulo_incidencia": "Falla en iluminación del escenario",
        "id_evento": "16"
    },
    {
        "id": 14,
        "categoria_incidencia": "OTROS",
        "codigo_ticket": "INC-6I7J8K9L",
        "comentarios_resolucion": null,
        "costo_estimado": "100000",
        "descripcion_incidencia": "Se detectó un error en la facturación del evento, el monto cobrado no coincide con lo cotizado.",
        "estado_incidencia_string": "PENDIENTE",
        "fecha_incidencia": "2026-10-15 18:00:00.000000",
        "fecha_resolucion": null,
        "id_administrador_asignado": null,
        "id_usuario_reporta": "15",
        "prioridad_incidencia": "ALTA",
        "titulo_incidencia": "Error en facturación del Summit",
        "id_evento": "15"
    }
];

const categoriasMap = {
    "LOGISTICA": "Logística",
    "SERVICIO": "Servicio",
    "PERSONAL": "Personal",
    "TECNICA": "Técnica",
    "OTROS": "Otros"
};

const estadosIncidenciaMap = {
    "PENDIENTE": { label: "Pendiente", clase: "estado-pendiente" },
    "EN PROCESO": { label: "En Proceso", clase: "estado-en-proceso" },
    "RESUELTO": { label: "Resuelto", clase: "estado-resuelto" },
    "CANCELADO": { label: "Cancelado", clase: "estado-cancelado" }
};

const prioridadesMap = {
    "CRITICA": { label: "Crítica", clase: "prioridad-critica" },
    "ALTA": { label: "Alta", clase: "prioridad-alta" },
    "MEDIA": { label: "Media", clase: "prioridad-media" },
    "BAJA": { label: "Baja", clase: "prioridad-baja" }
};

let incidencias = [...incidenciasMock];
let paginaActual = 1;
const itemsPorPagina = 5;
let incidenciaEditando = null;

function renderizarTabla() {
    const tbody = document.getElementById('incidenciasBody');
    const filtroCategoria = document.getElementById('filterCategoria').value;
    const filtroPrioridad = document.getElementById('filterPrioridad').value;
    const filtroEstado = document.getElementById('filterEstadoIncidencia').value;
    const busqueda = document.getElementById('searchIncidencia').value.toLowerCase();

    let filtrados = incidencias.filter(i => {
        const matchCategoria = filtroCategoria === 'todos' || i.categoria_incidencia === filtroCategoria;
        const matchPrioridad = filtroPrioridad === 'todos' || i.prioridad_incidencia === filtroPrioridad;
        const matchEstado = filtroEstado === 'todos' || i.estado_incidencia_string === filtroEstado;
        const matchBusqueda = i.titulo_incidencia.toLowerCase().includes(busqueda) || 
                              i.codigo_ticket.toLowerCase().includes(busqueda) ||
                              i.descripcion_incidencia.toLowerCase().includes(busqueda);
        return matchCategoria && matchPrioridad && matchEstado && matchBusqueda;
    });

    actualizarEstadisticas(filtrados);

    const total = filtrados.length;
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = Math.min(inicio + itemsPorPagina, total);
    const paginados = filtrados.slice(inicio, fin);

    document.getElementById('inicioMostrar').textContent = total > 0 ? inicio + 1 : 0;
    document.getElementById('finMostrar').textContent = fin;
    document.getElementById('totalMostrar').textContent = total;
    document.getElementById('paginaActual').textContent = paginaActual;
    document.getElementById('btnPrev').disabled = paginaActual === 1;
    document.getElementById('btnNext').disabled = fin >= total;

    if (paginados.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: var(--texto-gris);">
                    <i class="fas fa-exclamation-circle" style="font-size: 2rem; display: block; margin-bottom: 10px;"></i>
                    No se encontraron incidencias
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginados.map(i => `
        <tr>
            <td><span class="incidencia-ticket">${i.codigo_ticket}</span></td>
            <td><strong>${i.titulo_incidencia}</strong></td>
            <td><span class="incidencia-badge categoria-${i.categoria_incidencia.toLowerCase()}">${categoriasMap[i.categoria_incidencia] || i.categoria_incidencia}</span></td>
            <td><span class="incidencia-badge ${prioridadesMap[i.prioridad_incidencia]?.clase || ''}">${prioridadesMap[i.prioridad_incidencia]?.label || i.prioridad_incidencia}</span></td>
            <td><span class="incidencia-badge ${estadosIncidenciaMap[i.estado_incidencia_string]?.clase || ''}">${estadosIncidenciaMap[i.estado_incidencia_string]?.label || i.estado_incidencia_string}</span></td>
            <td>Evento #${i.id_evento}</td>
            <td class="costo-estimado">$${parseInt(i.costo_estimado).toLocaleString()}</td>
            <td>${formatearFecha(i.fecha_incidencia)}</td>
            <td>
                <div class="acciones-buttons">
                    <button class="btn-icon" onclick="verDetalle(${i.id})" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    ${i.estado_incidencia_string === 'PENDIENTE' || i.estado_incidencia_string === 'EN PROCESO' ? `
                        <button class="btn-icon" onclick="abrirResolver(${i.id})" title="Resolver" style="color: #2e7d32;">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    ` : ''}
                    <button class="btn-icon btn-danger" onclick="eliminarIncidencia(${i.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function actualizarEstadisticas(lista) {
    const total = incidencias.length;
    const pendientes = incidencias.filter(i => i.estado_incidencia_string === 'PENDIENTE').length;
    const enProceso = incidencias.filter(i => i.estado_incidencia_string === 'EN PROCESO').length;
    const resueltas = incidencias.filter(i => i.estado_incidencia_string === 'RESUELTO').length;

    document.getElementById('totalIncidencias').textContent = total;
    document.getElementById('incidenciasPendientes').textContent = pendientes;
    document.getElementById('incidenciasEnProceso').textContent = enProceso;
    document.getElementById('incidenciasResueltas').textContent = resueltas;
}

function formatearFecha(fecha) {
    const d = new Date(fecha);
    return d.toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' });
}

function verDetalle(id) {
    const incidencia = incidencias.find(i => i.id === id);
    if (!incidencia) return;

    const body = document.getElementById('detalleBody');
    body.innerHTML = `
        <div class="incidencia-detail-grid">
            <div class="incidencia-detail-section">
                <h4><i class="fas fa-info-circle"></i> Información General</h4>
                <p><strong>Ticket:</strong> <span class="incidencia-ticket">${incidencia.codigo_ticket}</span></p>
                <p><strong>Título:</strong> ${incidencia.titulo_incidencia}</p>
                <p><strong>Categoría:</strong> <span class="incidencia-badge categoria-${incidencia.categoria_incidencia.toLowerCase()}">${categoriasMap[incidencia.categoria_incidencia] || incidencia.categoria_incidencia}</span></p>
                <p><strong>Prioridad:</strong> <span class="incidencia-badge ${prioridadesMap[incidencia.prioridad_incidencia]?.clase || ''}">${prioridadesMap[incidencia.prioridad_incidencia]?.label || incidencia.prioridad_incidencia}</span></p>
                <p><strong>Estado:</strong> <span class="incidencia-badge ${estadosIncidenciaMap[incidencia.estado_incidencia_string]?.clase || ''}">${estadosIncidenciaMap[incidencia.estado_incidencia_string]?.label || incidencia.estado_incidencia_string}</span></p>
                
                <h4><i class="fas fa-calendar-alt"></i> Fechas</h4>
                <p><strong>Fecha de Reporte:</strong> ${formatearFecha(incidencia.fecha_incidencia)}</p>
                <p><strong>Hora:</strong> ${new Date(incidencia.fecha_incidencia).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}</p>
                ${incidencia.fecha_resolucion ? `
                    <p><strong>Fecha de Resolución:</strong> ${formatearFecha(incidencia.fecha_resolucion)}</p>
                    <p><strong>Hora:</strong> ${new Date(incidencia.fecha_resolucion).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}</p>
                ` : '<p style="color: var(--texto-gris);">Sin fecha de resolución</p>'}
            </div>
            <div class="incidencia-detail-section">
                <h4><i class="fas fa-align-left"></i> Descripción</h4>
                <p style="background: var(--verde-bg); padding: 10px; border-radius: 8px;">${incidencia.descripcion_incidencia}</p>
                
                <h4><i class="fas fa-user"></i> Información de Usuario</h4>
                <p><strong>ID Usuario Reporta:</strong> #${incidencia.id_usuario_reporta}</p>
                <p><strong>ID Administrador Asignado:</strong> ${incidencia.id_administrador_asignado ? '#' + incidencia.id_administrador_asignado : '<span style="color: var(--texto-gris);">Sin asignar</span>'}</p>
                
                <h4><i class="fas fa-tools"></i> Resolución</h4>
                ${incidencia.comentarios_resolucion ? `
                    <div class="comentario-box">
                        <strong>Comentario:</strong><br>
                        ${incidencia.comentarios_resolucion}
                    </div>
                    <p style="margin-top: 8px;"><strong>Costo Final:</strong> <span class="costo-estimado">$${parseInt(incidencia.costo_estimado).toLocaleString()}</span></p>
                ` : '<p style="color: var(--texto-gris);">Pendiente de resolución</p>'}
                
                <h4><i class="fas fa-info-circle"></i> Evento Asociado</h4>
                <p><strong>ID Evento:</strong> #${incidencia.id_evento}</p>
            </div>
        </div>
    `;

    const btnResolver = document.getElementById('btnResolver');
    if (incidencia.estado_incidencia_string === 'RESUELTO') {
        btnResolver.style.display = 'none';
    } else {
        btnResolver.style.display = 'inline-flex';
        btnResolver.onclick = () => abrirResolver(incidencia.id);
    }

    document.getElementById('detalleModal').style.display = 'flex';
}

function abrirResolver(id) {
    incidenciaEditando = incidencias.find(i => i.id === id);
    if (!incidenciaEditando) return;
    
    document.getElementById('resolverIncidenciaId').value = id;
    document.getElementById('resolverComentario').value = '';
    document.getElementById('resolverCosto').value = incidenciaEditando.costo_estimado;
    
    document.getElementById('resolverModal').style.display = 'flex';
}

function guardarResolucion() {
    const id = parseInt(document.getElementById('resolverIncidenciaId').value);
    const comentario = document.getElementById('resolverComentario').value.trim();
    const costo = parseInt(document.getElementById('resolverCosto').value) || 0;
    
    if (!comentario) {
        mostrarNotificacion('Debe ingresar un comentario de resolución', 'error');
        return;
    }
    
    const incidencia = incidencias.find(i => i.id === id);
    if (incidencia) {
        incidencia.estado_incidencia_string = 'RESUELTO';
        incidencia.comentarios_resolucion = comentario;
        incidencia.costo_estimado = costo;
        incidencia.fecha_resolucion = new Date().toISOString().replace('T', ' ').substring(0, 23);
        incidencia.id_administrador_asignado = 1; // Admin actual
        mostrarNotificacion('Incidencia resuelta correctamente', 'success');
    }
    
    cerrarResolver();
    renderizarTabla();
}

function eliminarIncidencia(id) {
    const incidencia = incidencias.find(i => i.id === id);
    if (!incidencia) return;
    
    if (confirm(`¿Estás seguro de eliminar la incidencia "${incidencia.codigo_ticket}"?`)) {
        incidencias = incidencias.filter(i => i.id !== id);
        renderizarTabla();
        mostrarNotificacion('Incidencia eliminada correctamente', 'success');
    }
}


function cerrarDetalle() {
    document.getElementById('detalleModal').style.display = 'none';
}

function cerrarResolver() {
    document.getElementById('resolverModal').style.display = 'none';
}

function filtrarIncidencias() {
    paginaActual = 1;
    renderizarTabla();
}

function cambiarPagina(direccion) {
    if (direccion === 'prev' && paginaActual > 1) paginaActual--;
    if (direccion === 'next') paginaActual++;
    renderizarTabla();
}

function recargarIncidencias() {
    document.getElementById('filterCategoria').value = 'todos';
    document.getElementById('filterPrioridad').value = 'todos';
    document.getElementById('filterEstadoIncidencia').value = 'todos';
    document.getElementById('searchIncidencia').value = '';
    paginaActual = 1;
    incidencias = [...incidenciasMock];
    renderizarTabla();
    mostrarNotificacion('Datos recargados correctamente', 'info');
}

function exportarIncidencias() {
    mostrarNotificacion('📄 Reporte de incidencias exportado como CSV (simulación)', 'info');
}

function mostrarNotificacion(mensaje, tipo = 'info') {
    const colores = {
        success: '#2e7d32',
        error: '#c62828',
        info: '#1565c0',
        warning: '#e65100'
    };
    
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colores[tipo]};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notif.textContent = mensaje;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.4s ease';
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    renderizarTabla();

    document.getElementById('btnResolver').addEventListener('click', function() {
        if (incidenciaEditando) {
            abrirResolver(incidenciaEditando.id);
        }
    });
});

window.verDetalle = verDetalle;
window.abrirResolver = abrirResolver;
window.guardarResolucion = guardarResolucion;
window.eliminarIncidencia = eliminarIncidencia;
window.filtrarIncidencias = filtrarIncidencias;
window.cambiarPagina = cambiarPagina;
window.cerrarDetalle = cerrarDetalle;
window.cerrarResolver = cerrarResolver;
window.recargarIncidencias = recargarIncidencias;
window.exportarIncidencias = exportarIncidencias;

const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);