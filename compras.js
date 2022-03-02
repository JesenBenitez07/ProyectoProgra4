const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');


function cargarEventos(){

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);

}

function procesarCompra(e){
    e.prevenDefault();

    if(compra.obtenerProductosLocalStorage().lenght ===0){
        Swal.fire({
            type: 'error',
            title: 'Error...',
            text: 'No hay productos, seleccione algun producto',
            timer: 2000,
            showConfirmButton: false
        }).then(function(){
            window.location = "index.html";
        })
    }
    else if(cliente.value === ''|| correo.value === ''){
        Swal.fire({
            type: 'error',
            title: 'Error...',
            text: 'Ingrese los campos requeridos',
            timer: 2000,
            showConfirmButton: false
        })
    }
    else {
        const cargandoGif = document.querySelector('#cargando');
    }
}