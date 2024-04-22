document.addEventListener('DOMContentLoaded', function () {
    const carrito = [];
    const productos = document.querySelectorAll('.agregar-carrito');
    const registerForm = document.querySelector('#registerForm');
    const cantidadProductos = document.querySelector('#cantidadProductos');

    productos.forEach((producto, index) => {
        producto.addEventListener('click', () => {
            agregarAlCarrito(index);
            actualizarCarrito();
        });
    });

    function agregarAlCarrito(index) {
        carrito.push({
            nombre: productos[index].parentNode.querySelector('h2').textContent,
            precio: parseFloat(productos[index].parentNode.querySelector('p').textContent.slice(9)),
        });
        cantidadProductos.innerHTML = carrito.length
    }

    function actualizarCarrito() {
        const carritoList = document.getElementById('carrito');
        const totalElement = document.getElementById('total');
        carritoList.innerHTML = '';
        let total = 0;

        carrito.forEach((producto) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            carritoList.appendChild(listItem);
            total += producto.precio;
        });

        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
    })
});
