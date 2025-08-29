import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req ,res) => { res.send({title : " GET all subscripton"})});

subscriptionRouter.get('/:id',(req ,res) => {res.send({title : " GET subscripton details"})});

subscriptionRouter.post('/',(req ,res) => {res.send({title : "CREATE subscripton"})});

subscriptionRouter.put('/:id',(req ,res) => {res.send({title : "UPDATE subscriptons"})});

subscriptionRouter.delete('/:id',(req ,res) => {res.send({title : " DELETE user subscriptons"})});

subscriptionRouter.get('/user/:id',(req ,res) => {res.send({title : "GET all USER subscripton"})});

subscriptionRouter.put('/:id/cancel',(req ,res) => {res.send({title : "CANCEL subscriptons"})});

subscriptionRouter.get('/:id/upcoming-renewals',(req ,res) => {res.send({title : " DELETE user subscriptons"})});

export default subscriptionRouter;

