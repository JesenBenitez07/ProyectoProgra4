class carrito {

    comprarproducto(e){
        e.preventDefault();
        if(e.target.classList.contanis('Agregar-Carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProductos(producto);
       }
    }

    leerDatosProductos(producto){
        const infoProducto = {
            img : producto.querySelector('img').src,
            titulo : producto.querySelector('h4').textContext,
            precio : producto.querySelector('.precio span').textContext,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : 1
        }
        this.insertarCarrito(infoProducto);
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>
            <img src = "${producto.img}" width = 100>
        </td>
        <td>${producto.titulo}"</td>
        <td>${producto.precio}"</td>
        <td>
        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
        `;
        listaproductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contanis('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto= e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();
    }

    vaciarCarrito(e){
    e.preventDefault();
    while(listaproductos.firstChild){
        listaproductos.removeChild(listaproductos.removeChild);

    }
    this.vaciarLocalStorage();
    return false;
    }

    guardarProductosLocalStorage(producto){
        let prductos;
        productos = this.obtenerProductosLocalStorage();
        producto.push(producto);
        localStorage.setItem('producto', JSON.tringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productosLS;
        if (localStorage.getItem('productos') === NULL){
            productosLS = [];
        }
        else{
                productosLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productosLS;
    }

    eliminarProductoLocalStorage(productoID){
        let prductosLS = this.obtenerProductosLocalStorage();
        prductosLS.forEach(function(prductosLS, index) {
         if (prductosLS.id === productoID){
             prductosLS.splice(index, 1);
         }   
        });

        localStorage.setItem('productos', JSON.stringify(prductosLS));
    }

leerLocalStorage(){
    let prductosLS;
    prductosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>
            <img src = "${producto.img}" width = 100>
        </td>
        <td>${producto.titulo}"</td>
        <td>${producto.precio}"</td>
        <td>
        <a href="#" class="borrarproducto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
        `;
        listaproductos.appendChild(row);
        });

    }
    leerLocalStorageCompra(){
        let prductosLS;
        prductosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML = 
            `<td>
                <img src = "${producto.img}" width = 100>
            </td>
            <td>${producto.titulo}"</td>
            <td>${producto.precio}"</td>
            <td>
                <input type= "number" class= "form-control cantidad" num="1" value=${producto.cantidad}>
            </td>
            <td>${producto.precio * producto.cantidad}</td>
            <td>
            <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
            </td>
            `;
            listaCompra.appendChild(row);
            });
    
        }

    vaciarLocalStorage(){
        localStorage.clear();
    }
    procesarPedido(e){
        e.preventDefault();
        if(this.obtenerProductosLocalStorage().length === 0){
            Swal.fire({
                type: 'error',
                title: 'Error...',
                text: 'El carrito esta vacio',
                timer: 2000,
                showConfirmButton: false
            })
        }
        else{
            location.href = "compras.html";
        }
        
    }
    calcularTotal(){
        let prductosLS;
        let total=0, subtotal=0, isv=0;
        productosLS= this.obtenerProductosLocalStorage();
        for(let i=0; i< productosLS.length; i++){
            let element = Number(prductosLS[i].precio * productosLS[i].cantidad);
            total= total + element;
        }
        isv = parseFloat(total * 0.15).toFixed(2);
        subtotal = parseFloat(total-isv).toFixed(2);

        document.getElementById('subtotal').innerHTML = "S/. " + subtotal;
        document.getElementById('isv').innerHTML = "S/. " + isv;
        document.getElementById('total').innerHTML = "S/. " + total.toFixed(2);
    }
}
