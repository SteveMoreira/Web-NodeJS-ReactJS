import {Router,request,response, Request, Response} from 'express';

import { cadProduto } from './controller/ProdController'
import { consultarProdutos } from './controller/ProdController'
import { consultaProduto} from './controller/ProdController'
import { alterarProduto } from './controller/ProdController'
import { deletarProduto } from './controller/ProdController'
import { saidaProduto } from './controller/ProdController'

const routes = Router()
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Cadastro de Produtos'})
})

routes.post('/produtos', cadProduto)
routes.get('/produtos', consultarProdutos)
routes.get('/produtos/:id', consultaProduto)
routes.put('/produtos/:id', alterarProduto)
routes.delete('/produtos/:id', deletarProduto)
routes.patch('/produtos/:id', saidaProduto)

export default routes