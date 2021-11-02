import { getRepository } from 'typeorm';
import { Produtos } from '../entity/Produtos';
import { Request, Response } from 'express'

export const cadProduto = async (request: Request, response: Response) => {
    const produto = await getRepository(Produtos).save(request.body)
    return response.json(produto)
}

export const consultarProdutos = async (request: Request, response: Response) => {
    const produto = await getRepository(Produtos).find()
    return response.json(produto)
}

export const consultaProduto = async (request: Request, response: Response) =>{
    const {id} = request.params
    const produto = await getRepository(Produtos).findOne(id)
    return response.json(produto)
}

export const alterarProduto = async (request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).update(id, request.body)

    if (produto.affected == 1) {
        const produtoAlterar = await getRepository(Produtos).findOne(id)
        return response.json(produtoAlterar)
    } else {
        return response.status(404).json({ message: 'Tarefa não Encontrada' })
    }
}

export const deletarProduto = async (request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).delete(id)

    if (produto.affected == 1) {
        return response.status(200).json( { message:'Produto excluido'})
    } else {
        return response.status(404).json({ message: 'Tarefa não Encontrada' })
    }
}

export const saidaProduto = async (request: Request, response: Response) => {
    const {id} = request.params
    const produto = await getRepository(Produtos).update(id, {
        vendido: true,
    })

    if (produto.affected == 1) {
        const produtoAlterar = await getRepository(Produtos).findOne(id)
        return response.json(produtoAlterar)
    } else {
        return response.status(404).json({ message: 'Tarefa não Encontrada' })
    }
}