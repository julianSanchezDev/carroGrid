const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida = "";

    if (totalCarrito() > 0) {    
        salida = `<table class="table">
        <tbody>
        <tr>
        <td colspan="5" class="text-end"><a href="#" class="btn" onClick="vaciarCarrito()"> <img src="imagen/vaciar.png" alt="Vaciar Carrito" width="46" /></a></td>
        </tr>`;

        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="imagen/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${producto.id});"><img src="imagen/eliminar.png" alt="Eliminar Producto"/></a></td>`;
        }

        salida += `<tr>
        <td colspan="3"><b>Total a Pagar</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }

    document.getElementById("productos_seleccionados").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();