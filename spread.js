function resumenProductos(productos) {
    // Verifica si el arreglo de productos está vacío
    if (productos.length === 0) {
      return {
        sumaPrecios: 0,
        cantidad: 0,
        productoMasCaro: 'N/A',
      };
    }
  
    // Calcula la suma de los precios de los productos
    const sumaPrecios = productos.reduce((acum, producto) => acum + producto.precio, 0);
  
    // Obtiene la cantidad total de productos
    const cantidad = productos.length;
  
    // Encuentra el producto más caro utilizando sort y toma el primer elemento
    const productoMasCaro = [...productos].sort((a, b) => b.precio - a.precio)[0].nombre;
  
    // Retorna el objeto
    return {
      sumaPrecios,
      cantidad,
      productoMasCaro,
    };
  }
  
  
  const productos = [
    { nombre: "pc", precio: 1200 },
    { nombre: "Smartphone", precio: 800 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Monitor", precio: 300 },
  ];
  
  console.log(resumenProductos(productos));