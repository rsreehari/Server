import { Router } from "express";
import { useActionState } from "react";

const userRoute = Router();


userRoute.get('/',(req , res) => {
    res.send({title :"Get all users"});
});
userRoute.get('/:id',(req , res) => {
    res.send({title :"Get users details"});
});
userRoute.post('/',(req , res) => {
    res.send({title :"CREATE user"});
});
userRoute.put('/:id',(req , res) => {
    res.send({title :"UPDATE user"});
});
userRoute.delete('/:id',(req , res) => {
    res.send({title :"DELETE user"});
});

export default userRoute;