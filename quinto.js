function filtrarYCalcularImpuestos(productos) {
    // Filtrar productos con precio mayor a $80,000 y cantidad menor a 100
    const productosFiltrados = productos.filter(producto => producto.precio > 80000 && producto.cantidad < 100);

    // Agregar nuevas propiedades: product_tax_value y product_total_value
    const productosConImpuestos = productosFiltrados.map(producto => ({
        ...producto, // Conservar las propiedades originales del producto
        product_tax_value: producto.precio * 0.19, // Calcular el valor del impuesto
        product_total_value: producto.precio + (producto.precio * 0.19) // Calcular el precio total con impuesto
    }));

    return productosConImpuestos;
}

// Ejemplo de uso
const productos = [
    { nombre: "Laptop Gamer", precio: 120000, cantidad: 50 },
    { nombre: "Smartphone", precio: 50000, cantidad: 150 },
    { nombre: "Tablet", precio: 90000, cantidad: 80 },
    { nombre: "Smartwatch", precio: 30000, cantidad: 200 },
    { nombre: "Consola de Videojuegos", precio: 450000, cantidad: 30 }
];

const productosConImpuesto = filtrarYCalcularImpuestos(productos);
console.log(productosConImpuesto);