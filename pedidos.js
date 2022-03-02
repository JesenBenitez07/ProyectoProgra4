const carro = new carrito();
const carrito = document.getElementById('carrito')
const producto = document.getElementById('lista*prductos')
const listaproductos = document.querySelector('Alista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')
const procesarPedidoBtn = document.getElementById('procesar-pedido')

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.comprarproducto(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});

}