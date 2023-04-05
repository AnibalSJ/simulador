const pendiente = document.getElementById('pendiente');
const cerrado = document.getElementById('cerrado');
const ruta = document.getElementById('ruta');
const btn_ruta = document.getElementById('btn_ruta');
const cancelar = document.getElementById('cancelar');
const aceptar = document.getElementById('aceptar');
const inicio_dia = document.getElementById('inicio_dia');
const portal = document.getElementById('portal');
const inicio = document.getElementById('inicio');
const ir_portal = document.getElementById('ir_portal');
const atras = document.getElementById('atras');

window.onload  = () => {
    pendiente.style.display = 'block';
};
// ================================ Ruta ============================
btn_ruta.addEventListener('click', () => {
    pendiente.style.display = 'none';
    ruta.style.display = 'block';
    btn_ruta.style.display = 'none';
});
cancelar.addEventListener('click', () => {
    ruta.style.display = 'none';
    pendiente.style.display = 'block';
});
aceptar.addEventListener('click', () => {
    let timerInterval;
    Swal.fire({
        title: 'Procesando tu peticion',
        timer: 2000,
        timerProgressBar: false,
        didOpen: () => {
            Swal.showLoading()  
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        /* Read more about handling dismissals below */
        ruta.style.display = 'none';
        pendiente.style.display = 'block';
        inicio_dia.addEventListener('click', () => {
                inicio.style.display = 'block';
                portal.style.display = 'none';
            });
    })
});
ir_portal.addEventListener('click', () => {
    const portal_ins = document.getElementById('portal_ins');
    portal_ins.style.display = 'block';
    inicio.style.display = 'none';
});
atras.addEventListener('click', () => {
    let timerInterval;
    Swal.fire({
        title: 'Procesando tu peticion',
        timer: 2000,
        timerProgressBar: false,
        didOpen: () => {
            Swal.showLoading()  
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        /* Read more about handling dismissals below */
        inicio.style.display = 'none';
        portal.style.display = 'block';
        
    })
});

// ================================== Portal de instalacion =========================
const portal_ini = document.getElementById('portal_ini');
const portal_inicio = document.getElementById('portal_inicio');
const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');
const volver_dash = document.getElementById('volver_dash');
const volver = document.getElementById('volver');

portal_ini.addEventListener('click', ()=>{
    //Mostrar la sección 2 y ocultar la sección 1
    
    let timerInterval;
    Swal.fire({
        title: 'Procesando tu peticion',
        timer: 1000,
        timerProgressBar: false,
        didOpen: () => {
            Swal.showLoading()  
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        /* Read more about handling dismissals below */
        seccion2.style.display = 'block';
        seccion1.style.display = 'none';
    })

});

portal_inicio.addEventListener('click', ()=>{
    estado = document.getElementById('estado');
    actividad = document.getElementById('actividad');
    estado.textContent = "Completado";
    actividad.style.display = 'none';
    portal_inicio.style.display = 'none';

});

volver_dash.addEventListener('click', ()=>{
    portal.style.display = 'block';
    portal_ins.style.display = 'none';
    let cambio = function(){
        cerrado.style.display = 'block';
        pendiente.style.display = 'none';
    };
    cambio();
});

// =========================== Aprovisionamiento ===================================
const aprovisionamiento = document.getElementById('aprovisionamiento');
const ir_aprovisionamiento = document.getElementById('ir_aprovisionamiento');

ir_aprovisionamiento.addEventListener('click', ()=>{
    aprovisionamiento.style.display = 'block';
    cerrado.style.display = 'none'
});