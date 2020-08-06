/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let vNombre;
	let vCate;
	let vPrecio;
	let vMin;
	let vMax;
	let respuesta;
	let vNombreLac = "Ninguno";
	let vPrecioLac;
	let vPrecioMax;
	let vArticulo;
	let vCantidadBedidas = 0;
	let cont = 0;
	let con2 = 0;
	respuesta = "s";

	do {

		vNombre = prompt("Ingrese nombre :");
		do {
			vCate = prompt("Ingrese categoría :");
		}
		while (!(vCate == "almacen" || vCate == "lácteos" || vCate == "limpieza" || vCate == "bebidas"))
		do {
			vPrecio = parseInt(prompt("Ingrese precio :"));
		} while (!(vPrecio > 0 && vPrecio < 1000));
		respuesta = prompt("desea continuar? s/n")
		// Averiguar  Nombre de artículo con mayor precio
		
			if (con2 == 0) {
				vPrecioMax = vPrecio;
				vArticulo = vNombre ;
			}
			con2++
			if (vPrecio > vPrecioMax) {
				vPrecioMax = vPrecio;
				vArticulo = vNombre ;
			}
		
		

		// Averiguar Nombre de artículo con mayor precio, de la categoría lácteos.
		if (vCate == "lácteos") {
			if (cont == 0) {
				vPrecioLac = vPrecio;
				vNombreLac = vNombre;
			}
			cont++
			if (vPrecio > vPrecioLac) {
				vPrecioMax = vPrecio;
				vNombreLac = vNombre ;
			}
			
		}
		// Averiguar Cantidad de artículos ingresados de categoría bebidas
		if (vCate == "bebidas") {
			vCantidadBedidas++;
		}
	}	while (respuesta == "s");

	
	alert ("El articulo con mayor precio es: " + vArticulo + " Con un costo de: "+ vPrecioMax);
	alert("El Lácteo con mayor precio es " + vNombreLac + " con un precio de " + vPrecioLac);
	alert("La cantidad de articulos en bebidas es: " + vCantidadBedidas);

}