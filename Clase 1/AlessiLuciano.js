//Ejercicio clase 2 : Clases

class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombreLibro, autorLibro){
        this.libros.push(
            {
            nombre: nombreLibro,
            autor: autorLibro
            })
    }

    getBookNames(){
       let bookNames = []

       for(let libros of this.libros){
            bookNames.push(libros.nombre);
        }
        return bookNames;
    }
}

//Prueba:

const nuevoUsuario = new Usuario('Luciano' , 'Alessi')

console.log(nuevoUsuario.getFullName());

nuevoUsuario.addMascotas('Gino');
nuevoUsuario.addMascotas('Mirko');
nuevoUsuario.addMascotas('Yan');
nuevoUsuario.addMascotas('Lola');
nuevoUsuario.addMascotas('Pompis');

console.log(nuevoUsuario.mascotas);

console.log(nuevoUsuario.countMascotas());

nuevoUsuario.addBook('Lord of the rings', 'Tolkien');
nuevoUsuario.addBook('Game of Thrones', 'George R. R. Martin');
nuevoUsuario.addBook('Super Life', 'Darin Olien');

console.log(nuevoUsuario.libros);

console.log(nuevoUsuario.getBookNames());



