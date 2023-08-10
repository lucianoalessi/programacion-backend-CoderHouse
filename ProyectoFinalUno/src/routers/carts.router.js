import { Router } from "express";


const router = Router();

const users = [];

router.get('/', (req, res) => {
    res.send({users});
})


export default router;