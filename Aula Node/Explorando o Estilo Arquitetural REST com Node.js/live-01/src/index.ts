
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso Total'});
});


app.listen(3000, () => {
    console.log('Aplicação executando a porta 3000!');
});