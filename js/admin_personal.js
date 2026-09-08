const staffMock = [
    {
        "id_staff": 14,
        "nombre": "Roberto",
        "apellidop": "Pérez",
        "apellidom": "Muñoz",
        "rut": "16.448.392",
        "dv": "3",
        "correo": "roberto.vacaciones@ecogarzones.com",
        "telefono": "+56977771111",
        "rol": 5,
        "estado": 2,
        "valor_hora": 14000,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 15,
        "nombre": "Carlos",
        "apellidop": "Palma",
        "apellidom": "Herrera",
        "rut": "13.884.920",
        "dv": "K",
        "correo": "carlos.chef@ecogarzones.com",
        "telefono": "+56955551111",
        "rol": 5,
        "estado": 1,
        "valor_hora": 18000,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 16,
        "nombre": "Miguel",
        "apellidop": "Torres",
        "apellidom": "San Martín",
        "rut": "16.774.829",
        "dv": "4",
        "correo": "miguel.copero@ecogarzones.com",
        "telefono": "+56955552222",
        "rol": 7,
        "estado": 2,
        "valor_hora": 6500,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 17,
        "nombre": "Elena",
        "apellidop": "Cruzat",
        "apellidom": "Subercaseaux",
        "rut": "15.223.849",
        "dv": "8",
        "correo": "elena.sommelier@ecogarzones.com",
        "telefono": "+56955553333",
        "rol": 2,  
        "estado": 3,
        "valor_hora": 15000,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 18,
        "nombre": "Álvaro",
        "apellidop": "Molina",
        "apellidom": "Barrientos",
        "rut": "17.441.920",
        "dv": "2",
        "correo": "alvaro.coordinador@ecogarzones.com",
        "telefono": "+56955554444",
        "rol": 6,
        "estado": 1,
        "valor_hora": 13500,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 19,
        "nombre": "Juan",
        "apellidop": "Cotapos",
        "apellidom": "Pérez",
        "rut": "19.223.847",
        "dv": "K",
        "correo": "juan.perez@ecogarzones.com",
        "telefono": "+56911112222",
        "rol": 1,
        "estado": 1,
        "valor_hora": 8500,
        "motivo_desvinculacion": null
    },
    {
        "id_staff": 21,
        "nombre": "Skibidi",
        "apellidop": "SisNine",
        "apellidom": "Sixseven",
        "rut": "16.444.587",
        "dv": "k",
        "correo": "sixseven.67@gmail.com",
        "telefono": "67676767",
        "rol": 5,
        "estado": 4,
        "valor_hora": 67000,
        "motivo_desvinculacion": "Incumplimiento de contrato."
    }
];


const rolesMap = {
    1: 'Garzón / Mesero',
    2: 'Bartender / Sommelier',
    3: 'Animador / Presentador',
    4: 'Otros',
    5: 'Cocinero / Chef',
    6: 'Coordinador',
    7: 'Copero / Lavado'
};

const estadosStaffMap = {
    1: { label: 'Disponible', clase: 'estado-disponible' },
    2: { label: 'Ocupado', clase: 'estado-ocupado' },
    3: { label: 'Vacaciones', clase: 'estado-vacaciones' },
    4: { label: 'Desvinculado', clase: 'estado-desvinculado' }
};

let personal = [...staffMock];
let paginaActual = 1;
const itemsPorPagina = 5;
let staffEditando = null;


function renderizarTabla() {
    const tbody = document.getElementById('staffBody');
    const filtroRol = document.getElementById('filterRol').value;
    const filtroEstado = document.getElementById('filterEstadoStaff').value;
    const busqueda = document.getElementById('searchStaff').value.toLowerCase();
    let filtrados = personal.filter(s => {
        const matchRol = filtroRol === 'todos' || s.rol == filtroRol;
        const matchEstado = filtroEstado === 'todos' || s.estado == filtroEstado;
        const nombreCompleto = `${s.nombre} ${s.apellidop} ${s.apellidom}`.toLowerCase();
        const matchBusqueda = nombreCompleto.includes(busqueda) || 
                              s.rut.includes(busqueda) ||
                              s.correo.toLowerCase().includes(busqueda);
        return matchRol && matchEstado && matchBusqueda;
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
                    <i class="fas fa-user-slash" style="font-size: 2rem; display: block; margin-bottom: 10px;"></i>
                    No se encontró personal
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginados.map(s => `
        <tr>
            <td>${s.id_staff}</td>
            <td><strong>${s.nombre} ${s.apellidop} ${s.apellidom}</strong></td>
            <td>${s.rut}-${s.dv}</td>
            <td><span class="rol-badge rol-${s.rol}">${rolesMap[s.rol] || 'Sin rol'}</span></td>
            <td><a href="tel:${s.telefono}" class="telefono-link">${s.telefono}</a></td>
            <td class="valor-hora">$${s.valor_hora.toLocaleString()}</td>
            <td><span class="estado-badge ${estadosStaffMap[s.estado]?.clase || ''}">${estadosStaffMap[s.estado]?.label || 'Desconocido'}</span></td>
            <td>
                <div class="acciones-buttons">
                    <button class="btn-icon" onclick="verDetalle(${s.id_staff})" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon" onclick="abrirEditar(${s.id_staff})" title="Editar">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="btn-icon btn-danger" onclick="eliminarStaff(${s.id_staff})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function actualizarEstadisticas(lista) {
    const total = personal.length;
    const disponibles = personal.filter(s => s.estado === 1).length;
    const ocupados = personal.filter(s => s.estado === 2).length;
    const desvinculados = personal.filter(s => s.estado === 4).length;
    
    document.getElementById('totalStaff').textContent = total;
    document.getElementById('staffDisponible').textContent = disponibles;
    document.getElementById('staffOcupado').textContent = ocupados;
    document.getElementById('staffDesvinculado').textContent = desvinculados
}


function verDetalle(id) {
    const staff = personal.find(s => s.id_staff === id);
    if (!staff) return;

    const body = document.getElementById('detalleBody');
    body.innerHTML = `
        <div class="detalle-grid">
            <div class="detalle-columna">
                <h4><i class="fas fa-user"></i> Datos Personales</h4>
                <p><strong>Nombre:</strong> ${staff.nombre} ${staff.apellidop} ${staff.apellidom}</p>
                <p><strong>RUT:</strong> ${staff.rut}-${staff.dv}</p>
                <p><strong>Correo:</strong> ${staff.correo}</p>
                <p><strong>Teléfono:</strong> ${staff.telefono}</p>
                
                <h4><i class="fas fa-briefcase"></i> Información Laboral</h4>
                <p><strong>Rol:</strong> ${rolesMap[staff.rol] || 'Sin rol'}</p>
                <p><strong>Valor Hora:</strong> <span class="valor-hora">$${staff.valor_hora.toLocaleString()}</span></p>
                <p><strong>Estado:</strong> <span class="estado-badge ${estadosStaffMap[staff.estado]?.clase || ''}">${estadosStaffMap[staff.estado]?.label || 'Desconocido'}</span></p>
            </div>
            <div class="detalle-columna">
                <h4><i class="fas fa-info-circle"></i> Información Adicional</h4>
                ${staff.motivo_desvinculacion ? `
                    <p><strong>Motivo Desvinculación:</strong></p>
                    <p style="color: var(--texto-gris); font-style: italic;">${staff.motivo_desvinculacion}</p>
                ` : `
                    <p style="color: var(--texto-gris);">Sin información adicional</p>
                `}
                <br>
                <h4><i class="fas fa-calendar-alt"></i> Disponibilidad</h4>
                <p style="color: var(--texto-gris);">Puede ser asignado a eventos según su disponibilidad.</p>
            </div>
        </div>
    `;

    document.getElementById('detalleModal').style.display = 'flex';
}

function abrirEditar(id) {
    staffEditando = personal.find(s => s.id_staff === id);
    if (!staffEditando) return;
    
    document.getElementById('editStaffId').value = id;
    document.getElementById('editRol').value = staffEditando.rol;
    document.getElementById('editValorHora').value = staffEditando.valor_hora;
    document.getElementById('editEstadoStaff').value = staffEditando.estado;
    document.getElementById('editMotivo').value = staffEditando.motivo_desvinculacion || '';
    
    if (staffEditando.estado === 4) {
        document.getElementById('motivoDiv').style.display = 'block';
    } else {
        document.getElementById('motivoDiv').style.display = 'none';
    }
    
    document.getElementById('editarModal').style.display = 'flex';
}

function guardarCambiosStaff() {
    const id = parseInt(document.getElementById('editStaffId').value);
    const nuevoRol = parseInt(document.getElementById('editRol').value);
    const nuevoValor = parseInt(document.getElementById('editValorHora').value);
    const nuevoEstado = parseInt(document.getElementById('editEstadoStaff').value);
    const motivo = document.getElementById('editMotivo').value.trim();
    
    const staff = personal.find(s => s.id_staff === id);
    if (staff) {
        staff.rol = nuevoRol;
        staff.valor_hora = nuevoValor;
        staff.estado = nuevoEstado;
        staff.motivo_desvinculacion = nuevoEstado === 4 ? motivo : null;
        mostrarNotificacion(`Personal actualizado correctamente`, 'success');
    }
    
    cerrarEditar();
    renderizarTabla();
}

function eliminarStaff(id) {
    const staff = personal.find(s => s.id_staff === id);
    if (!staff) return;
    
    if (confirm(`¿Estás seguro de eliminar a ${staff.nombre} ${staff.apellidop}?`)) {
        personal = personal.filter(s => s.id_staff !== id);
        renderizarTabla();
        mostrarNotificacion('Personal eliminado correctamente', 'success');
    }
}

function agregarPersonal() {
    const nuevoId = Math.max(...personal.map(s => s.id_staff)) + 1;
    const nuevoStaff = {
        id_staff: nuevoId,
        nombre: "Nuevo",
        apellidop: "Usuario",
        apellidom: "Eco",
        rut: "XX.XXX.XXX",
        dv: "X",
        correo: "nuevo@ecogarzones.com",
        telefono: "+569XXXXXXXX",
        rol: 1,
        estado: 1,
        valor_hora: 10000,
        motivo_desvinculacion: null
    };
    personal.push(nuevoStaff);
    renderizarTabla();
    mostrarNotificacion('Personal agregado correctamente', 'success');
}

function editarPersonal() {
    const id = parseInt(document.getElementById('editStaffId').value);
    if (id) {
        abrirEditar(id);
    }
}

function cerrarDetalle() {
    document.getElementById('detalleModal').style.display = 'none';
}

function cerrarEditar() {
    document.getElementById('editarModal').style.display = 'none';
}


function filtrarPersonal() {
    paginaActual = 1;
    renderizarTabla();
}

function cambiarPagina(direccion) {
    if (direccion === 'prev' && paginaActual > 1) paginaActual--;
    if (direccion === 'next') paginaActual++;
    renderizarTabla();
}

function recargarDatos() {
    document.getElementById('filterRol').value = 'todos';
    document.getElementById('filterEstadoStaff').value = 'todos';
    document.getElementById('searchStaff').value = '';
    paginaActual = 1;
    personal = [...staffMock];
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
window.guardarCambiosStaff = guardarCambiosStaff;
window.eliminarStaff = eliminarStaff;
window.agregarPersonal = agregarPersonal;
window.filtrarPersonal = filtrarPersonal;
window.cambiarPagina = cambiarPagina;
window.cerrarDetalle = cerrarDetalle;
window.cerrarEditar = cerrarEditar;
window.recargarDatos = recargarDatos;


document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('editEstadoStaff');
    const motivoDiv = document.getElementById('motivoDiv');
    
    estadoSelect.addEventListener('change', function() {
        if (this.value === '4') {
            motivoDiv.style.display = 'block';
        } else {
            motivoDiv.style.display = 'none';
            document.getElementById('editMotivo').value = '';
        }
    });
});

