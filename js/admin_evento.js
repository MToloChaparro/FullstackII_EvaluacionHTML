const eventosMock = [
    {
        "id": 12,
        "nombre": "Matrimonio Civil e Iglesia - Ignacio y Camila",
        "cliente": "Ignacio y Camila",
        "rut": "No especificado",
        "telefono": "No especificado",
        "email": "No especificado",
        "fecha": "2026-11-28",
        "hora_inicio": "17:30",
        "hora_fin": "23:30",
        "invitados": 150,
        "tipo": "Familiar",
        "estado": "confirmado",
        "direccion": "Av. Pajaritos 2500",
        "comuna": "Santiago",
        "region": "Metropolitana",
        "descripcion": "Celebración de boda con ceremonia al aire libre y fiesta bailable.",
        "personal": ["Garzones x4", "Bartender x2", "Cocinero x1", "Copero x1"],
        "menu": [
            "Menú Carnes N°1 x75",
            "Menú Vegetariano N°1 x45",
            "Menú Vegano N°1 x30"
        ],
        "barra": "Barra Libre Tradicional",
        "extras": ["Cristalería", "Hielo e insumos", "Mueble de Barra Móvil"],
        "factura": "Boleta",
        "comentario_admin": "Evento confirmado con anticipo del 50%",
        "fecha_solicitud": "2026-09-15"
    },
    {
        "id": 15,
        "nombre": "Tech & Future Summit 2026",
        "cliente": "Tech & Future Corp",
        "rut": "76.123.456-7",
        "telefono": "+569 9876 5432",
        "email": "eventos@techfuture.cl",
        "fecha": "2026-10-15",
        "hora_inicio": "09:00",
        "hora_fin": "18:00",
        "invitados": 80,
        "tipo": "Empresarial",
        "estado": "pendiente",
        "direccion": "Alameda Bernardo O'Higgins 1300",
        "comuna": "Santiago",
        "region": "Metropolitana",
        "descripcion": "Congreso tecnológico con expositores internacionales de IA y Break de almuerzo.",
        "personal": ["Garzones x3", "Bartender x1", "Cocinero x1"],
        "menu": [
            "Menú Carnes N°2 x40",
            "Menú Vegetariano N°2 x30",
            "Menú Vegano N°2 x10"
        ],
        "barra": "Barra por Consumo",
        "extras": ["Mueble de Barra Móvil", "Estación de Cerveza"],
        "factura": "Factura",
        "comentario_admin": "Pendiente de confirmación de presupuesto",
        "fecha_solicitud": "2026-09-20"
    },
    {
        "id": 16,
        "nombre": "Gala de la Confraternidad Argentino-Chilena",
        "cliente": "Embajada Argentina",
        "rut": "69.123.456-7",
        "telefono": "+562 2345 6789",
        "email": "eventos@embajadaargentina.cl",
        "fecha": "2026-07-09",
        "hora_inicio": "18:00",
        "hora_fin": "23:00",
        "invitados": 100,
        "tipo": "Municipal",
        "estado": "confirmado",
        "direccion": "Av. Vicuña Mackenna 450",
        "comuna": "Santiago",
        "region": "Metropolitana",
        "descripcion": "Cena de gala oficial conmemorativa de la Independencia Argentina. Contará con la presencia del cuerpo diplomático chileno.",
        "personal": ["Garzones x4", "Bartender x2", "Cocinero x2", "Animador x1"],
        "menu": [
            "Asado & Experiencia Argentina x60",
            "Menú Vegetariano N°1 x30",
            "Menú Vegano N°1 x10"
        ],
        "barra": "Barra de Vinos y Coctelería Porteña",
        "extras": ["Cristalería Premium", "Mueble de Barra Móvil", "Menú Especial para Alergias"],
        "factura": "Factura",
        "comentario_admin": "Evento confirmado, se envió contrato con cuerpo diplomático",
        "fecha_solicitud": "2026-06-01"
    },
    {
        "id": 17,
        "nombre": "Gala Corporativa EcoGarzones",
        "cliente": "EcoGarzones Interno",
        "rut": "76.987.654-3",
        "telefono": "+569 8765 4321",
        "email": "admin@ecogarzones.cl",
        "fecha": "2026-08-15",
        "hora_inicio": "20:00",
        "hora_fin": "02:00",
        "invitados": 50,
        "tipo": "Empresarial",
        "estado": "pendiente",
        "direccion": "Av. Vitacura 4500, Vitacura",
        "comuna": "Vitacura",
        "region": "Metropolitana",
        "descripcion": "Evento empresarial nocturno utilizando el Menú Premium existente.",
        "personal": ["Garzones x2", "Bartender x1", "Cocinero x1"],
        "menu": [
            "Menú Premium Gala x25",
            "Menú Vegetariano N°1 x15",
            "Menú Vegano N°1 x10"
        ],
        "barra": "Barra Abierta Internacional",
        "extras": ["Cristalería", "Mueble de Barra Móvil"],
        "factura": "Factura",
        "comentario_admin": "Evento interno, en proceso de organización",
        "fecha_solicitud": "2026-07-20"
    }
];

const menuData = [
    {
        "id_menu": "2",
        "tipo_menu": "Premium",
        "tipo_barra": "Abierta Internacional",
        "plato_entrada": "Ceviche de salmón",
        "plato_principal": "Filete con papas rústicas",
        "plato_postre": "Volcán de chocolate",
        "bebidas_pedidas": "Bebidas, Jugos naturales, Vino",
        "numero_personas": "150",
        "restricciones_alergias": "2 vegetarianos, 1 celíaco"
    },
    {
        "id_menu": "3",
        "tipo_menu": "Gala Corporativa",
        "tipo_barra": "Barra Abierta Premium",
        "plato_entrada": "Timbal de centolla magallánica con palta e hilos de camote",
        "plato_principal": "Garrón de cordero lechal al carmenere con puré rústico trufado",
        "plato_postre": "Trilogía de chocolates",
        "bebidas_pedidas": "Vinos reserva, bebidas, jugos naturales y agua mineral con gas",
        "numero_personas": "120",
        "restricciones_alergias": "4 opciones vegetarianas, 2 menús sin gluten"
    },
    {
        "id_menu": "10",
        "tipo_menu": "Asado & Experiencia Argentina",
        "tipo_barra": "Barra de Vinos y Coctelería Porteña",
        "plato_entrada": "Empanadas mendocinas, provoleta, choripán gourmet",
        "plato_principal": "Bife de chorizo y Vacío a la cruz",
        "plato_postre": "Panqueques con dulce de leche flambeados",
        "bebidas_pedidas": "Vinos Malbec, agua mineral y gaseosas",
        "numero_personas": "100",
        "restricciones_alergias": "Opcional de bife de quinoa para vegetarianos"
    }
];

let eventos = [...eventosMock];
let paginaActual = 1;
const itemsPorPagina = 5;
let eventoEditando = null;


function renderizarTabla() {
    const tbody = document.getElementById('eventosBody');
    const filtroEstado = document.getElementById('filterEstado').value;
    const filtroTipo = document.getElementById('filterTipo').value;
    const busqueda = document.getElementById('searchEvento').value.toLowerCase();

    let filtrados = eventos.filter(e => {
        const matchEstado = filtroEstado === 'todos' || e.estado === filtroEstado;
        const matchTipo = filtroTipo === 'todos' || e.tipo === filtroTipo;
        const matchBusqueda = e.nombre.toLowerCase().includes(busqueda) || 
                              e.cliente.toLowerCase().includes(busqueda);
        return matchEstado && matchTipo && matchBusqueda;
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
                <td colspan="8" style="text-align: center; padding: 40px; color: var(--texto-gris);">
                    <i class="fas fa-calendar-times" style="font-size: 2rem; display: block; margin-bottom: 10px;"></i>
                    No se encontraron eventos
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginados.map(e => `
        <tr>
            <td>${e.id}</td>
            <td><strong>${e.nombre}</strong></td>
            <td>${e.cliente}</td>
            <td>${formatearFecha(e.fecha)}</td>
            <td>${e.invitados}</td>
            <td><span class="tipo-badge tipo-${e.tipo.toLowerCase()}">${e.tipo}</span></td>
            <td><span class="estado-badge estado-${e.estado}">${capitalizar(e.estado)}</span></td>
            <td>
                <div class="acciones-buttons">
                    <button class="btn-icon" onclick="verDetalle(${e.id})" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon" onclick="abrirEditar(${e.id})" title="Cambiar estado">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="btn-icon btn-danger" onclick="eliminarEvento(${e.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function actualizarEstadisticas(eventosFiltrados) {
    const total = eventos.length;
    const confirmados = eventos.filter(e => e.estado === 'confirmado').length;
    const pendientes = eventos.filter(e => e.estado === 'pendiente').length;
    const cancelados = eventos.filter(e => e.estado === 'cancelado').length;
    
    document.getElementById('totalEventos').textContent = total;
    document.getElementById('eventosConfirmados').textContent = confirmados;
    document.getElementById('eventosPendientes').textContent = pendientes;
    document.getElementById('eventosCancelados').textContent = cancelados;
}

function formatearFecha(fecha) {
    const d = new Date(fecha);
    return d.toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' });
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function verDetalle(id) {
    const evento = eventos.find(e => e.id === id);
    if (!evento) return;

    const body = document.getElementById('detalleBody');
    body.innerHTML = `
        <div class="detalle-grid">
            <div class="detalle-columna">
                <h4><i class="fas fa-info-circle"></i> Información General</h4>
                <p><strong>Nombre:</strong> ${evento.nombre}</p>
                <p><strong>Cliente:</strong> ${evento.cliente}</p>
                <p><strong>RUT:</strong> ${evento.rut || 'No especificado'}</p>
                <p><strong>Teléfono:</strong> ${evento.telefono || 'No especificado'}</p>
                <p><strong>Email:</strong> ${evento.email || 'No especificado'}</p>
                <p><strong>Fecha:</strong> ${formatearFecha(evento.fecha)}</p>
                <p><strong>Hora:</strong> ${evento.hora_inicio} - ${evento.hora_fin}</p>
                <p><strong>Invitados:</strong> ${evento.invitados}</p>
                <p><strong>Tipo:</strong> ${evento.tipo}</p>
                <p><strong>Estado:</strong> <span class="estado-badge estado-${evento.estado}">${capitalizar(evento.estado)}</span></p>
                
                <h4><i class="fas fa-map-marker-alt"></i> Ubicación</h4>
                <p><strong>Dirección:</strong> ${evento.direccion}</p>
                <p><strong>Comuna:</strong> ${evento.comuna}</p>
                <p><strong>Región:</strong> ${evento.region}</p>
            </div>
            <div class="detalle-columna">
                <h4><i class="fas fa-users"></i> Personal</h4>
                <div class="personal-grid">
                    ${evento.personal.map(p => `<span class="personal-item">${p}</span>`).join('')}
                </div>
                
                <h4><i class="fas fa-utensils"></i> Menú</h4>
                <div class="menu-grid">
                    ${evento.menu.map(m => `<span class="menu-item">${m}</span>`).join('')}
                </div>
                
                <h4><i class="fas fa-glass-cheers"></i> Barra</h4>
                <p>${evento.barra}</p>
                
                <h4><i class="fas fa-plus-circle"></i> Extras</h4>
                <div class="extras-list">
                    ${evento.extras && evento.extras.length > 0 
                        ? evento.extras.map(e => `<span class="extra-item">✓ ${e}</span>`).join('') 
                        : '<p style="color: var(--texto-gris);">Sin extras</p>'}
                </div>

                <h4><i class="fas fa-file-invoice"></i> Facturación</h4>
                <p><strong>Tipo:</strong> ${evento.factura || 'No especificado'}</p>
                
                <h4><i class="fas fa-comment"></i> Comentario Admin</h4>
                <p>${evento.comentario_admin || 'Sin comentarios'}</p>
            </div>
        </div>
    `;

    document.getElementById('detalleModal').style.display = 'flex';
}

function abrirEditar(id) {
    eventoEditando = eventos.find(e => e.id === id);
    if (!eventoEditando) return;
    
    document.getElementById('editEventoId').value = id;
    document.getElementById('editEstado').value = eventoEditando.estado;
    document.getElementById('editComentario').value = '';
    document.getElementById('editarModal').style.display = 'flex';
}

function guardarCambiosEstado() {
    const id = parseInt(document.getElementById('editEventoId').value);
    const nuevoEstado = document.getElementById('editEstado').value;
    const comentario = document.getElementById('editComentario').value;
    
    const evento = eventos.find(e => e.id === id);
    if (evento) {
        evento.estado = nuevoEstado;
        if (comentario) {
            evento.comentario_admin = comentario;
        }
        mostrarNotificacion(`Estado cambiado a "${capitalizar(nuevoEstado)}"`, 'success');
    }
    
    cerrarEditar();
    renderizarTabla();
}

function eliminarEvento(id) {
    if (confirm('¿Estás seguro de eliminar este evento?')) {
        eventos = eventos.filter(e => e.id !== id);
        renderizarTabla();
        mostrarNotificacion('Evento eliminado correctamente', 'success');
    }
}

function cerrarDetalle() {
    document.getElementById('detalleModal').style.display = 'none';
}

function cerrarEditar() {
    document.getElementById('editarModal').style.display = 'none';
}

function filtrarEventos() {
    paginaActual = 1;
    renderizarTabla();
}

function cambiarPagina(direccion) {
    if (direccion === 'prev' && paginaActual > 1) paginaActual--;
    if (direccion === 'next') paginaActual++;
    renderizarTabla();
}

function exportarReporte() {
    mostrarNotificacion('📄 Reporte exportado como CSV (simulación)', 'info');
}

function recargarDatos() {
    document.getElementById('filterEstado').value = 'todos';
    document.getElementById('filterTipo').value = 'todos';
    document.getElementById('searchEvento').value = '';
    paginaActual = 1;
    eventos = [...eventosMock];
    renderizarTabla();
    mostrarNotificacion('Datos recargados correctamente', 'info');
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
});


window.verDetalle = verDetalle;
window.abrirEditar = abrirEditar;
window.guardarCambiosEstado = guardarCambiosEstado;
window.eliminarEvento = eliminarEvento;
window.filtrarEventos = filtrarEventos;
window.cambiarPagina = cambiarPagina;
window.cerrarDetalle = cerrarDetalle;
window.cerrarEditar = cerrarEditar;
window.exportarReporte = exportarReporte;
window.recargarDatos = recargarDatos;

const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);