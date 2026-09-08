const inventarioMock = [
    {
        "id_insumo": "1",
        "cantidad_insumo": "30",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-09 19:31:22.000000",
        "fecha_creacion": "2026-06-09 19:31:22.000000",
        "nombre_insumo": "Manteles Blancos Premium",
        "precio_costo_unitario": "4500.00",
        "tipo_insumo": "MUEBLERIA",
        "unidad_medida": "UNIDADES",
        "proveedor": null
    },
    {
        "id_insumo": "2",
        "cantidad_insumo": "15",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-09 19:31:29.000000",
        "fecha_creacion": "2026-06-09 19:31:29.000000",
        "nombre_insumo": "Lomo Liso Vacuno",
        "precio_costo_unitario": "10500.00",
        "tipo_insumo": "CARNES",
        "unidad_medida": "KILOGRAMOS",
        "proveedor": null
    },
    {
        "id_insumo": "3",
        "cantidad_insumo": "60",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-09 19:31:36.000000",
        "fecha_creacion": "2026-06-09 19:31:36.000000",
        "nombre_insumo": "Bebida Cola 3L",
        "precio_costo_unitario": "2200.00",
        "tipo_insumo": "BEBIDAS_GASEOSAS",
        "unidad_medida": "LITROS",
        "proveedor": null
    },
    {
        "id_insumo": "4",
        "cantidad_insumo": "120",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-09 19:31:42.000000",
        "fecha_creacion": "2026-06-09 19:31:42.000000",
        "nombre_insumo": "Platos de Fondo Porcelana",
        "precio_costo_unitario": "2800.00",
        "tipo_insumo": "UTENSILIOS",
        "unidad_medida": "UNIDADES",
        "proveedor": null
    },
    {
        "id_insumo": "5",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:22:29.000000",
        "fecha_creacion": "2026-06-10 05:22:29.000000",
        "nombre_insumo": "LICOR RAMAZZOTTI ROSATO 15° 700 CC",
        "precio_costo_unitario": "13690.00",
        "tipo_insumo": "BEBIDAS_ALCOHOLICAS",
        "unidad_medida": "LITROS",
        "proveedor": null
    },
    {
        "id_insumo": "6",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:22:59.000000",
        "fecha_creacion": "2026-06-10 05:22:59.000000",
        "nombre_insumo": "LICOR RAMAZZOTTI VIOLETTO 15° 700 CC",
        "precio_costo_unitario": "13790.00",
        "tipo_insumo": "BEBIDAS_ALCOHOLICAS",
        "unidad_medida": "LITROS",
        "proveedor": null
    },
    {
        "id_insumo": "8",
        "cantidad_insumo": "120",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:52:57.000000",
        "fecha_creacion": "2026-06-10 05:23:51.000000",
        "nombre_insumo": "CERVEZA TROOPER AMBER ALE 4.7° 500 CC",
        "precio_costo_unitario": "1990.00",
        "tipo_insumo": "BEBIDAS_ALCOHOLICAS",
        "unidad_medida": "LITROS",
        "proveedor": "DISTRIBUIDORA JUMBO MAYORISTA"
    },
    {
        "id_insumo": "9",
        "cantidad_insumo": "50",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:52:03.000000",
        "fecha_creacion": "2026-06-10 05:39:24.000000",
        "nombre_insumo": "BEBIDA PEPSI ZERO 1.75 L",
        "precio_costo_unitario": "1554.00",
        "tipo_insumo": "BEBIDAS_GASEOSAS",
        "unidad_medida": "LITROS",
        "proveedor": "CCU CHILE S.A."
    },
    {
        "id_insumo": "11",
        "cantidad_insumo": "15",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:47:05.000000",
        "fecha_creacion": "2026-06-10 05:47:05.000000",
        "nombre_insumo": "JAMÓN PIERNA LA PREFERIDA GRANEL",
        "precio_costo_unitario": "9960.00",
        "tipo_insumo": "ALIMENTOS_PERECIBLES",
        "unidad_medida": "KILOGRAMOS",
        "proveedor": "Distribuidora Jumbo Mayorista"
    },
    {
        "id_insumo": "12",
        "cantidad_insumo": "5",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:56:46.000000",
        "fecha_creacion": "2026-06-10 05:56:46.000000",
        "nombre_insumo": "TABLA WAYU PROFESIONAL",
        "precio_costo_unitario": "27990.00",
        "tipo_insumo": "UTENSILIOS",
        "unidad_medida": "UNIDADES",
        "proveedor": "Sodimac"
    },
    {
        "id_insumo": "13",
        "cantidad_insumo": "4",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:57:32.000000",
        "fecha_creacion": "2026-06-10 05:57:32.000000",
        "nombre_insumo": "JUEGO DE COCTELERA PARA BAR 750ML",
        "precio_costo_unitario": "17990.00",
        "tipo_insumo": "UTENSILIOS",
        "unidad_medida": "UNIDADES",
        "proveedor": "Sodimac"
    },
    {
        "id_insumo": "14",
        "cantidad_insumo": "5",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 05:58:04.000000",
        "fecha_creacion": "2026-06-10 05:58:04.000000",
        "nombre_insumo": "MORTERO DE BAR MUDDLER KIT BARTENDER SET COCTELERIA COCTEL",
        "precio_costo_unitario": "5990.00",
        "tipo_insumo": "UTENSILIOS",
        "unidad_medida": "UNIDADES",
        "proveedor": "Sodimac"
    },
    {
        "id_insumo": "15",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:07:13.000000",
        "fecha_creacion": "2026-06-10 06:07:13.000000",
        "nombre_insumo": "TARTA DE FRAMBUESA 8-10 PORCIONES",
        "precio_costo_unitario": "14990.00",
        "tipo_insumo": "PASTELERIA",
        "unidad_medida": "UNIDADES",
        "proveedor": "Distribuidora Jumbo Mayorista"
    },
    {
        "id_insumo": "16",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:09:03.000000",
        "fecha_creacion": "2026-06-10 06:09:03.000000",
        "nombre_insumo": "CHAQUETA CHEF WORKS HARTFORD MUJER",
        "precio_costo_unitario": "42990.00",
        "tipo_insumo": "UNIFORMES_Y_EPP",
        "unidad_medida": "UNIDADES",
        "proveedor": "ChefWorks"
    },
    {
        "id_insumo": "17",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:09:47.000000",
        "fecha_creacion": "2026-06-10 06:09:47.000000",
        "nombre_insumo": "MANDIL CHEF WORKS MEMPHIS",
        "precio_costo_unitario": "29990.00",
        "tipo_insumo": "UNIFORMES_Y_EPP",
        "unidad_medida": "UNIDADES",
        "proveedor": "ChefWorks"
    },
    {
        "id_insumo": "18",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:10:14.000000",
        "fecha_creacion": "2026-06-10 06:10:14.000000",
        "nombre_insumo": "CHALECO CHEF WORKS ESSENTIAL | NEGRO",
        "precio_costo_unitario": "16497.00",
        "tipo_insumo": "UNIFORMES_Y_EPP",
        "unidad_medida": "UNIDADES",
        "proveedor": "ChefWorks"
    },
    {
        "id_insumo": "19",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:10:38.000000",
        "fecha_creacion": "2026-06-10 06:10:38.000000",
        "nombre_insumo": "BLUSA CHEF WORKS FINESSE | NEGRA",
        "precio_costo_unitario": "23990.00",
        "tipo_insumo": "UNIFORMES_Y_EPP",
        "unidad_medida": "UNIDADES",
        "proveedor": "ChefWorks"
    },
    {
        "id_insumo": "20",
        "cantidad_insumo": "10",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:11:04.000000",
        "fecha_creacion": "2026-06-10 06:11:04.000000",
        "nombre_insumo": "CAMISA CHEF WORKS DRESS | NEGRA",
        "precio_costo_unitario": "31990.00",
        "tipo_insumo": "UNIFORMES_Y_EPP",
        "unidad_medida": "UNIDADES",
        "proveedor": "ChefWorks"
    },
    {
        "id_insumo": "21",
        "cantidad_insumo": "5",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": "2026-06-10 06:14:06.000000",
        "fecha_creacion": "2026-06-10 06:14:06.000000",
        "nombre_insumo": "ARREGLO CON 7 ROSAS Y ASTROMELIAS EN PECERA MEDIANA",
        "precio_costo_unitario": "39900.00",
        "tipo_insumo": "AMBIENTACION_Y_DECO",
        "unidad_medida": "UNIDADES",
        "proveedor": "Rosatel"
    },
    {
        "id_insumo": "22",
        "cantidad_insumo": "15",
        "estado_insumos": "INCOMPLETO",
        "fecha_actualizacion": "2026-06-10 06:16:40.000000",
        "fecha_creacion": "2026-06-10 06:16:40.000000",
        "nombre_insumo": "TABURETE TREFILADO",
        "precio_costo_unitario": "49900.00",
        "tipo_insumo": "MUEBLERIA",
        "unidad_medida": "UNIDADES",
        "proveedor": "Momet"
    }
];

const tiposInsumoMap = {
    "MUEBLERIA": "Mueblería",
    "CARNES": "Carnes",
    "BEBIDAS_GASEOSAS": "Bebidas Gaseosas",
    "UTENSILIOS": "Utensilios",
    "BEBIDAS_ALCOHOLICAS": "Bebidas Alcohólicas",
    "ALIMENTOS_PERECIBLES": "Alimentos Perecibles",
    "PASTELERIA": "Pastelería",
    "UNIFORMES_Y_EPP": "Uniformes y EPP",
    "AMBIENTACION_Y_DECO": "Ambientación y Decoración"
};

const unidadesMedidaMap = {
    "UNIDADES": "Unidades",
    "KILOGRAMOS": "Kilogramos",
    "LITROS": "Litros"
};

const estadosInsumoMap = {
    "DISPONIBLE": { label: "Disponible", clase: "estado-disponible" },
    "INCOMPLETO": { label: "Incompleto", clase: "estado-incompleto" },
    "AGOTADO": { label: "Agotado", clase: "estado-agotado" },
    "EN_REPOSICION": { label: "En Reposición", clase: "estado-reposicion" }
};


let inventario = [...inventarioMock];
let paginaActual = 1;
const itemsPorPagina = 8;
let insumoEditando = null;

function renderizarTabla() {
    const tbody = document.getElementById('inventarioBody');
    const filtroTipo = document.getElementById('filterTipoInsumo').value;
    const filtroEstado = document.getElementById('filterEstadoInsumo').value;
    const busqueda = document.getElementById('searchInsumo').value.toLowerCase();

    let filtrados = inventario.filter(i => {
        const matchTipo = filtroTipo === 'todos' || i.tipo_insumo === filtroTipo;
        const matchEstado = filtroEstado === 'todos' || i.estado_insumos === filtroEstado;
        const matchBusqueda = i.nombre_insumo.toLowerCase().includes(busqueda) || 
                              i.id_insumo.includes(busqueda) ||
                              (i.proveedor && i.proveedor.toLowerCase().includes(busqueda));
        return matchTipo && matchEstado && matchBusqueda;
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
                    <i class="fas fa-box-open" style="font-size: 2rem; display: block; margin-bottom: 10px;"></i>
                    No se encontraron insumos
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginados.map(i => {
        const valorTotal = parseFloat(i.precio_costo_unitario) * parseInt(i.cantidad_insumo);
        
        return `
            <tr>
                <td>${i.id_insumo}</td>
                <td><strong>${i.nombre_insumo}</strong></td>
                <td><span class="insumo-badge tipo-${i.tipo_insumo.toLowerCase()}">${tiposInsumoMap[i.tipo_insumo] || i.tipo_insumo}</span></td>
                <td class="cantidad-cell">
                    <span class="cantidad-value">${i.cantidad_insumo}</span>
                    <span class="unidad-text">${unidadesMedidaMap[i.unidad_medida] || i.unidad_medida}</span>
                </td>
                <td class="precio-cell">$${parseFloat(i.precio_costo_unitario).toLocaleString('es-CL', { minimumFractionDigits: 0 })}</td>
                <td class="precio-cell">$${valorTotal.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</td>
                <td><span class="insumo-badge ${estadosInsumoMap[i.estado_insumos]?.clase || ''}">${estadosInsumoMap[i.estado_insumos]?.label || i.estado_insumos}</span></td>
                <td>${i.proveedor || '<span style="color: var(--texto-gris);">Sin proveedor</span>'}</td>
                <td>
                    <div class="acciones-buttons">
                        <button class="btn-icon" onclick="verDetalle(${i.id_insumo})" title="Ver detalles">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon" onclick="abrirEditar(${i.id_insumo})" title="Editar">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="btn-icon btn-danger" onclick="eliminarInsumo(${i.id_insumo})" title="Eliminar">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function actualizarEstadisticas(lista) {
    const total = inventario.length;
    const disponibles = inventario.filter(i => i.estado_insumos === 'DISPONIBLE').length;
    const incompletos = inventario.filter(i => i.estado_insumos === 'INCOMPLETO').length;
    const agotados = inventario.filter(i => i.estado_insumos === 'AGOTADO').length;
    const enReposicion = inventario.filter(i => i.estado_insumos === 'EN_REPOSICION').length;

    document.getElementById('totalInsumos').textContent = total;
    document.getElementById('insumosDisponibles').textContent = disponibles;
    document.getElementById('insumosIncompletos').textContent = incompletos;
    document.getElementById('insumosAgotados').textContent = agotados;
}

function formatearFecha(fecha) {
    const d = new Date(fecha);
    return d.toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' });
}


function verDetalle(id) {
    const insumo = inventario.find(i => i.id_insumo === id);
    if (!insumo) return;

    const body = document.getElementById('detalleBody');
    const valorTotal = parseFloat(insumo.precio_costo_unitario) * parseInt(insumo.cantidad_insumo);

    body.innerHTML = `
        <div class="inventario-detail-grid">
            <div class="inventario-detail-section">
                <h4><i class="fas fa-box-open"></i> Información General</h4>
                <p><strong>ID:</strong> #${insumo.id_insumo}</p>
                <p><strong>Nombre:</strong> ${insumo.nombre_insumo}</p>
                <p><strong>Tipo:</strong> <span class="insumo-badge tipo-${insumo.tipo_insumo.toLowerCase()}">${tiposInsumoMap[insumo.tipo_insumo] || insumo.tipo_insumo}</span></p>
                <p><strong>Unidad:</strong> ${unidadesMedidaMap[insumo.unidad_medida] || insumo.unidad_medida}</p>
                <p><strong>Estado:</strong> <span class="insumo-badge ${estadosInsumoMap[insumo.estado_insumos]?.clase || ''}">${estadosInsumoMap[insumo.estado_insumos]?.label || insumo.estado_insumos}</span></p>
                <p><strong>Proveedor:</strong> ${insumo.proveedor || 'Sin proveedor'}</p>
                
                <h4><i class="fas fa-dollar-sign"></i> Precios</h4>
                <p><strong>Precio Costo Unitario:</strong> <span class="precio-cell">$${parseFloat(insumo.precio_costo_unitario).toLocaleString('es-CL', { minimumFractionDigits: 0 })}</span></p>
                <p><strong>Valor Total:</strong> <span class="precio-cell">$${valorTotal.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</span></p>
            </div>
            <div class="inventario-detail-section">
                <h4><i class="fas fa-chart-bar"></i> Cantidad</h4>
                <p><strong>Cantidad Actual:</strong> ${insumo.cantidad_insumo} ${unidadesMedidaMap[insumo.unidad_medida] || insumo.unidad_medida}</p>
                
                <h4><i class="fas fa-calendar-alt"></i> Fechas</h4>
                <p><strong>Fecha de Creación:</strong> ${formatearFecha(insumo.fecha_creacion)}</p>
                <p><strong>Fecha de Actualización:</strong> ${formatearFecha(insumo.fecha_actualizacion)}</p>
            </div>
        </div>
    `;

    document.getElementById('detalleModal').style.display = 'flex';
}

function abrirEditar(id) {
    insumoEditando = inventario.find(i => i.id_insumo === id);
    if (!insumoEditando) return;
    
    document.getElementById('editInsumoId').value = id;
    document.getElementById('editNombre').value = insumoEditando.nombre_insumo;
    document.getElementById('editTipo').value = insumoEditando.tipo_insumo;
    document.getElementById('editCantidad').value = insumoEditando.cantidad_insumo;
    document.getElementById('editUnidad').value = insumoEditando.unidad_medida;
    document.getElementById('editPrecio').value = insumoEditando.precio_costo_unitario;
    document.getElementById('editEstado').value = insumoEditando.estado_insumos;
    document.getElementById('editProveedor').value = insumoEditando.proveedor || '';
    
    document.getElementById('editarModal').style.display = 'flex';
}


function guardarCambiosInsumo() {
    const id = document.getElementById('editInsumoId').value;
    const nombre = document.getElementById('editNombre').value.trim();
    const tipo = document.getElementById('editTipo').value;
    const cantidad = parseInt(document.getElementById('editCantidad').value);
    const unidad = document.getElementById('editUnidad').value;
    const precio = parseFloat(document.getElementById('editPrecio').value);
    const estado = document.getElementById('editEstado').value;
    const proveedor = document.getElementById('editProveedor').value.trim();
    
    if (!nombre || !tipo || isNaN(cantidad) || !unidad || isNaN(precio) || !estado) {
        mostrarNotificacion('Por favor complete todos los campos correctamente', 'error');
        return;
    }
    
    const insumo = inventario.find(i => i.id_insumo === id);
    if (insumo) {
        insumo.nombre_insumo = nombre;
        insumo.tipo_insumo = tipo;
        insumo.cantidad_insumo = cantidad;
        insumo.unidad_medida = unidad;
        insumo.precio_costo_unitario = precio;
        insumo.estado_insumos = estado;
        insumo.proveedor = proveedor || null;
        insumo.fecha_actualizacion = new Date().toISOString().replace('T', ' ').substring(0, 23);
        mostrarNotificacion('Insumo actualizado correctamente', 'success');
    }
    
    cerrarEditar();
    renderizarTabla();
}

function eliminarInsumo(id) {
    const insumo = inventario.find(i => i.id_insumo === id);
    if (!insumo) return;
    
    if (confirm(`¿Estás seguro de eliminar "${insumo.nombre_insumo}"?`)) {
        inventario = inventario.filter(i => i.id_insumo !== id);
        renderizarTabla();
        mostrarNotificacion('Insumo eliminado correctamente', 'success');
    }
}

function agregarInsumo() {
    const nuevoId = String(Math.max(...inventario.map(i => parseInt(i.id_insumo))) + 1);
    const nuevoInsumo = {
        "id_insumo": nuevoId,
        "cantidad_insumo": "0",
        "estado_insumos": "DISPONIBLE",
        "fecha_actualizacion": new Date().toISOString().replace('T', ' ').substring(0, 23),
        "fecha_creacion": new Date().toISOString().replace('T', ' ').substring(0, 23),
        "nombre_insumo": "Nuevo Insumo",
        "precio_costo_unitario": "0.00",
        "tipo_insumo": "UTENSILIOS",
        "unidad_medida": "UNIDADES",
        "proveedor": null
    };
    inventario.push(nuevoInsumo);
    renderizarTabla();
    mostrarNotificacion('Insumo agregado correctamente', 'success');
}

function cerrarDetalle() {
    document.getElementById('detalleModal').style.display = 'none';
}

function cerrarEditar() {
    document.getElementById('editarModal').style.display = 'none';
}

function filtrarInventario() {
    paginaActual = 1;
    renderizarTabla();
}

function cambiarPagina(direccion) {
    if (direccion === 'prev' && paginaActual > 1) paginaActual--;
    if (direccion === 'next') paginaActual++;
    renderizarTabla();
}


function recargarInventario() {
    document.getElementById('filterTipoInsumo').value = 'todos';
    document.getElementById('filterEstadoInsumo').value = 'todos';
    document.getElementById('searchInsumo').value = '';
    paginaActual = 1;
    inventario = [...inventarioMock];
    renderizarTabla();
    mostrarNotificacion('Datos recargados correctamente', 'info');
}

function exportarInventario() {
    mostrarNotificacion('📄 Reporte de inventario exportado como CSV (simulación)', 'info');
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
    
    document.getElementById('btnEditarInsumo').addEventListener('click', function() {
        if (insumoEditando) {
            abrirEditar(insumoEditando.id_insumo);
        }
    });
});

window.verDetalle = verDetalle;
window.abrirEditar = abrirEditar;
window.guardarCambiosInsumo = guardarCambiosInsumo;
window.eliminarInsumo = eliminarInsumo;
window.agregarInsumo = agregarInsumo;
window.filtrarInventario = filtrarInventario;
window.cambiarPagina = cambiarPagina;
window.cerrarDetalle = cerrarDetalle;
window.cerrarEditar = cerrarEditar;
window.recargarInventario = recargarInventario;
window.exportarInventario = exportarInventario;

const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);