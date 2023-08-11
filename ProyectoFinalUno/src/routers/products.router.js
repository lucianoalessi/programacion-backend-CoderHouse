import ProductManager from '../ProductManager.js'
import { Router } from 'express';
import {__dirname} from '../../utils.js'
//Inicializamos la extencion de express, Router
const router = Router()

// //configuracion para que el servidor reciba datos complejos (esta configuracion se aconceja hacerla siempre):
// router.use(express.urlencoded({extended:true}))

//creamos una nueva instancia de la clase ProductManager con la ruta donde se guardaran los productos.
const manager = new ProductManager(__dirname + '/files/products.json') //NOTA: para poder acceder al archivo y leer el contenido dentro en el servidor tenemos que usar dirname y no ./files/products.json. (hay que eliminar los puntos para que funcione)

//con app.get hacemos una apertura en un endpoint y le indicamos al protocolo HTTP que en la ruta /products esprara una peticion GET.
router.get('/' , async (req, res) => {

    //obetenemos el array de objetos de productos y lo guardamos en una variable productos. Como estamos obteniendo info de una base de datos sera asincronica.
    const products = await manager.getProducts()
    //Agregamos el soporte para recibir por query param el valor ?limit= . Con esta desestructuracion limitamos la informacion que recibiremos por Query param, ya que el usuario podria poner cualquier valor, pero a nosotros solo nos interesa trabajar con el valor limits.
    const {limit} = req.query  // otra forma de hacer esto es: const limit = req.query.limit

    //dependiendo el valor de limite que el usuario ingrese, enviaremos esa cantidad de productos. Si no agrega ningun valor mostraremos todos los productos.    
    if(limit){
        const productLimit = products.slice(0,limit);
        res.send({productLimit}) //con res.send respondemos las peticiones del servidor
    }else{
        res.send({products})
    }  
})

router.get('/:pid' , async (req, res) => {

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


router.post('/' , async (req, res) => {

    const newProduct = req.body
    const addProduct = await manager.addProduct(newProduct)
    res.send({status:"sucess" , addProduct})
})

router.put('/:pid' , async (req, res) => {

    const productID = req.params
    const productFilter = await manager.getProductById(productID);
    const update = req.body
    const productUpdate = await manager.updateProduct(productFilter,update);

    res.send({status:'Susess: product updated', productUpdate});
})

router.delete('/:pid', async (req, res) => {
    const productID = req.params;
    const productDeleted = await manager.deleteProduct(productID);

    res.send({status:'product deleted susess', productDeleted});
})



export default router; 
