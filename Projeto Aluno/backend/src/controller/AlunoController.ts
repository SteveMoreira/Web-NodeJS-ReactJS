import { getRepository } from "typeorm";
import { Aluno } from '../entity/Aluno';
import { Request, Response } from "express";

export const saveAluno = async(request: Request, response: Response) =>
{
const aluno = await getRepository(Aluno).save(request.body)
return response.json(aluno);
};

export const getAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Aluno).findOne(id)
    return response.json(aluno);
    };
    export const updateAluno = async(request: Request, response: Response)  => {
    const {id} = request.params
    const aluno = await getRepository(Aluno).update(id, request.body)
    if (aluno.affected == 1){
    const alunoUpdated = await getRepository(Aluno).findOne(id)
    return response.json(alunoUpdated);
    }
    else{
    return response.status(404).json( {message: 'Aluno não encontrada!'} )
    }
    };
    export const deleteAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Aluno).delete(id)
    if (aluno.affected == 1){
    return response.status(200).json( {message: "Aluno excluído com sucesso!"} );
    }
    else{
    return response.status(404).json( {message: 'Aluno não  encontrada!'} )
    }
    };
    export const finishedAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Aluno).update(id, {
    finished: true,
    })
    if (aluno.affected == 1){
    const alunoFinished = await getRepository(Aluno).findOne(id)
    return response.json(alunoFinished);
    }
    else{
    return response.status(404).json( {message: 'Aluno não encontrada!'} )
    }
    };