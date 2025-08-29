import express from 'express';
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js'
import userRoute from './routes/user.routes.js';


const app = express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get('/', (req, res) => {
    res.send('welcome to the subscription tracking api');
});

app.listen(PORT, () => {
    console.log(`subscription tracking api running on http://localhost: ${PORT}`);
});

export default app;













































