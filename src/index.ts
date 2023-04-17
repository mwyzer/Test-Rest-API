import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port: Number = 8080;

//routing
app.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ status: '200' });
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));