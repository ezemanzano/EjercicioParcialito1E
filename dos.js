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
	let vNombreLac;
	let vPrecioLac;
	let vPrecioLac2;
	let vCantidadBedidas = 0;
	let cont = 0;
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

		if (vCate == "lácteos"){
		if (cont == 1) {
			vPrecioLac = vPrecio;
			vPrecioLac2 = vPrecio;
		}
		cont++
		if (vPrecio < vPrecioLac) {
			vPrecioLac = vPrecio;
		} else if (vPrecio > vPrecioLac2) {
			vPrecioLac2 = vPrecio;
			vNombreLac = vNombre;
		}
		}


		if (vCate == "bebidas") {
			vCantidadBedidas++;
		}
	}

	while (respuesta == "s");
	
	alert ("El Lácteo con mayor precio es " + vNombre +" " + vPrecioLac2);
	alert ("La cantidad de articulos en bebidas es: " + vCantidadBedidas);
	
}