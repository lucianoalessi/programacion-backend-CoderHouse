import fs from 'fs';

class CartManager {

    constructor(path){
        this.path = path;
        this.carts = [];
    }

    addCart = async () => {

        const carrito = {
            products: [],
        }

        if(this.carts.length === 0){
            carrito.id = 1 
        }else{
            carrito.id = this.carts[length - 1].id + 1
        }

        this.carts.push(carrito);

        await fs.promises.writeFile(this.path,JSON.stringify(this.carts,null,2)) // el segundo parametro de stringify es opcional asi que le pusimos null para salterarlo y el 3er parametro es el espacio de sangria. al pasarle un 2 estamos indicando que queremos que la cadena JSON tenga un nivel de sangría de 2 espacios.
        
    }

    getCarts = async () => {

        try{
            const carts = await fs.promises.readFile(this.path,"utf-8")
            const cartsParse = JSON.parse(carts)
            return cartsParse

        //en caso de que se genere un error debido a que no exista el archivo que se intenta leer debido a que todavia no se agrego ningun producto, devolvemos this.products, el cual seria un array vacio.
        }catch{
            return this.carts
        }
    }

    getCartById = async (searchId) => {

        //Almacenamos el contenido del archivo creado en una variable, el cual sera un array de objetos. con un for..of recorremos el arreglo hasta encontrar uno con el mismo id que se ingresa como parametro.
        const carts = await this.getCarts()
        for(const cart of carts){
            if(cart.id === searchId){
                return cart;
            }
        }
        return 'Not found'
    }


    addProductToCart = async (cId , pId) => {

        const filterCart = await this.getCartById(cId);

        const productIndex = filterCart.products.findIndex(item => item.id = pId)

        if(productIndex !== -1){
            filterCart.products[productIndex].quantity += 1;
        }else{
            filterCart.products.push({pId, quantity: 1})
        }

        await fs.promises.writeFile(this.path,JSON.stringify(filterCart,null,2))

    }

}


export default CartManager;