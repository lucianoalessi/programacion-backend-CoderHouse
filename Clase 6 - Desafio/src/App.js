import express from 'express';
import ProductManager from './ProductManager.js'

const app = express() //inicializamos express

//configuracion para que el servidor reciba datos complejos:
app.use(express.urlencoded({extended:true}))



const manager = new ProductManager('./products.json')


app.get('/products' , async (req, res) => {
    //obetenemos el array de objetos de productos y lo guardamos en una variable productos.
    const products = await manager.getProducts()
    //Agregamos el soporte para recibir por query param el valor ?limit=
    const {limit} = req.query  // otra forma de hacer esto es: const limit = req.query.limit

    if(limit){
        const productLimit = products.slice(0,limit);
        res.send({productLimit})
    }else{
        res.send({products})
    }  
})

//para abrirlo hay que buscar en el explorador => localhost:8080
app.listen(8080 , () => {
    console.log('servidor arriba del puerto 8080')
})

