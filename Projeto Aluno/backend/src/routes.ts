
import { Router, request, response, Request, Response} from 'express'
import { saveAluno } from './controller/AlunoController';
import { getAluno } from './controller/AlunoController';
import { updateAluno } from './controller/AlunoController';
import { deleteAluno } from './controller/AlunoController';
import { finishedAluno } from './controller/AlunoController';
const routes = Router()
routes.get('/home', (request: Request, response: Response) => {
return response.json({ message: 'Hello Turma 007!' })
})
routes.get('/aluno', getAluno)
routes.post('/aluno', saveAluno)
routes.get('/aluno/:id', getAluno)
routes.put('/aluno/:id', updateAluno)
routes.delete('/aluno/:id', deleteAluno)
routes.patch('/aluno/:id', finishedAluno)
export default routes