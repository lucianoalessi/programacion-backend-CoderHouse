import express from 'express';
import ProductManager from './ProductManager.js'

//guardamos las funciones de express en una variable app, como buena practica.
const app = express()

//configuracion para que el servidor reciba datos complejos:
app.use(express.urlencoded({extended:true}))

//creamos una nueva instancia de la clase ProductManager con la ruta donde se guardaran los productos.
const manager = new ProductManager('./products.json')


app.get('/products' , async (req, res) => {
    //obetenemos el array de objetos de productos y lo guardamos en una variable productos.
    const products = await manager.getProducts()
    //Agregamos el soporte para recibir por query param el valor ?limit= . Con esta desestructuracion limitamos la informacion que queremos recibir por Query param, ya que el usuario podria poner cualquier valor, pero a nosotros solo nos interesa trabajar con el valor limits.
    const {limit} = req.query  // otra forma de hacer esto es: const limit = req.query.limit

    //dependiendo el valor de limite que el usuario ingrese, enviaremos esa cantidad de productos. Si no agrega ningun valor mostraremos todos los productos.    
    if(limit){
        const productLimit = products.slice(0,limit);
        res.send({productLimit})
    }else{
        res.send({products})
    }  
})

app.get('/products/:pid' , async (req, res) => {

    //obtenemos todos los productos y la guardamos en una variable
    const products = await manager.getProducts()

    //filtramos el producto ingresado por params y lo guardamos en una variable.
    const productFilter = products.find(item => item.id == req.params.pid)

    //si productFilter posee un valor, sera true y devolveremos ese valor.Si es una variable vacia devolvera false. 
    if(productFilter){
        res.send(productFilter)
    }else{
        res.send('Error: Producto inexistente')
    }      
})


//para abrirlo hay que buscar en el explorador => localhost:8080
app.listen(8080 , () => {
    console.log('servidor arriba del puerto 8080')
})

