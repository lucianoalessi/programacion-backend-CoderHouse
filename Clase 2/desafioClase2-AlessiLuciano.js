class ProductManager{

    constructor(){
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const product = {
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        }

        for( const item of this.products){
            if(item.code === product.code){
                console.log('ERROR: Codigo existente');
                return
            }
        }

        if(this.products.length === 0){
            product.id = 1
        }else{
            //de esta forma accedemos al objeto que se encuentra al final del array y le sumamos 1, para que sea de codigo unico y ascendente segun su posicion. 
            product.id = this.products[this.products.length -1].id + 1;
        }

        this.products.push(product);
    }

    getProducts = () => {

        return this.products;
    }

    getProductById = (searchId) => {

        for( const item of this.products){
            if(item.id === searchId){
                return item;
            }
        }
        return 'Not found'
    }
}


const prueba = new ProductManager;

console.log(prueba.getProducts());
prueba.addProduct('producto prueba', 'Este es un producto', 200, 'Sin imagen', 'abc123', 25 );
console.log(prueba.getProducts());
prueba.addProduct('producto prueba', 'Este es un producto', 200, 'Sin imagen', 'abc123', 25 );

console.log(prueba.getProductById(2));



