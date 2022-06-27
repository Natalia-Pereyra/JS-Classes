/*

Una perrera municipal tiene cientos de perros para dar en adopcion. 
El primer paso es realizar un analisis de las caracteristicas que pueden tener los perros.
Crea una clase que contenga las caracteristicas de tu analisis. Si tu analisis no contempló
el estado de adopción, añade esta propiedad a tu clase:
En adopción
Proceso de adopción
Adoptado.

Crea dos metodos en tu clase:
Modificar el estado de adopción
Informar el estado de adopción

*/

class Perros {

    constructor(raza, nombre, edad, estado) {
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.estado = estado;
    }

    get informarAdopcion() { 
    return this.estado;
    }

    set modificarAdopcion(adopcion) {
    this.estado = adopcion;
    }
}

let perro1 = new Perros("Pointer", "Sandro", 2, "Adoptado");

perro1.modificarAdopcion = "Proceso de adopción";
perro1.modificarAdopcion = "En adopción";

console.log(perro1);
console.log(perro1.informarAdopcion);
console.log(`${perro1.nombre} es un ${perro1.raza} y tiene ${perro1.edad} años. Su estado de adopción es: ${perro1.estado}`);

