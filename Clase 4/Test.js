import ProductManager from "./productManager";

//test:

const test = () => {
    const sistema = new ProductManager('inventario.json');

    (async () => {

        await sistema.getProducts()

        // //===============metodo addProduct:===============
    
        // await productManager.addProduct(
        //     'Monitor Asus',
        //     'Monitor led 24" 75hz',
        //     59.99,
        //     'path/to/image1.jpg',
        //     'PRD001',
        //     100
        // );
    
        // await productManager.addProduct(
        //     'Samsung Galaxy S23',
        //     'nuevo con caja sellada',
        //     800.50,
        //     'path/to/image2.jpg',
        //     'PRD002',
        //     15
        // );
    
        // await productManager.addProduct(
        //     'Monitor presonus eris 5',
        //     'Monitores de estudio',
        //     300.25,
        //     'path/to/image2.jpg',
        //     'PRD003',
        //     28
        // );
    
        // //============metodo getProducts:=============
    
        // const allProducts = await productManager.getProducts();
        // console.log('All Products:', allProducts);
    
        // //==========metodo getProductByID:============
    
        // const productById = await productManager.getProductById(2);
        // console.log('Product with ID 1:', productById);
    
        // //============metodo updateProduct:==============
    
        // await productManager.updateProduct(
        //     3, 
        //     'Iphone 14 pro max',
        //     'Importado desde EE.UU',
        //     999.99,
        //     'algo',
        //     '1223456987',
        //     114,
        // );
    
        // const updatedProduct = await productManager.getProductById(3);
        // console.log('Updated Product:', updatedProduct);
    
        // // ==============metodo deleteproduct:===================
    
        // await productManager.deleteProduct(27);
        // const remainingProducts = await productManager.getProducts();
        // console.log('Remaining Products:', remainingProducts);
    
    })();
    
}

test()