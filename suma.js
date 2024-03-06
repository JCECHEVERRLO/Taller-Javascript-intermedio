let productos = [
    {
        id_product: 1,
        product_name: "renault clio",
        price: 15000000,
        product_quantity: 89 
    },
    {
        id_product: 2,
        product_name: "duster",
        price: 90000000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "koleos",
        price: 3000000,
        product_quantity: 23 
    }
   
]



  var sumaPrecios = productos.reduce(function(acumulador, producto) {
    return acumulador + producto.price;
  }, 0);

  var sumaStock = productos.reduce(function (total, producto) { 
    return   producto.price * producto.product_quantity
 }, 0);
  
  console.log("La suma de los precios es: " + sumaPrecios);
  console.log("La suma de los precios del stock es: " + sumaStock);