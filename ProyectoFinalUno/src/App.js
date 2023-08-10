import  express  from "express";
import productsRouter from './routers/products.router.js'

const app = express()


//configuraciones:

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.Router())


app.use('/api/products' , productsRouter);

const server = app.listen(8080 , () => {
    console.log('Server ON')
})