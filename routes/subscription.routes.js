import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req ,res) => {
    res.send({title : " GET all subscriptons"})
});

subscriptionRouter.get('/:id',(req ,res) => {
    res.send({title : " GET user subscriptons"})
});
subscriptionRouter.post('/:id',(req ,res) => {
    res.send({title : "ADD subscriptons"})
});

subscriptionRouter.delete('/:id',(req ,res) => {
    res.send({title : " DELETE user subscriptons"})
});

export default subscriptionRouter;

