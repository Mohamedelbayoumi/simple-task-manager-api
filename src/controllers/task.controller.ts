
import { Request, Response, NextFunction } from 'express'
import { createTask, getTasks, updateTask, getOneTask, deleteTask } from '../services/task.service'


export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await createTask({
            text: req.body.text
        })

        res.status(201).json({ message: "Task Created Successfully" })
    }
    catch (err) {
        console.error(err)
    }
}

export const fetchAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await getTasks()
        console.log(tasks)
        res.status(200).json(tasks)
    }
    catch (err) {
        console.error(err)
    }
}

export const fetchOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const task = await getOneTask(+id)

        console.log(task)
        res.status(200).json(task)
    }
    catch (err) {
        console.error(err)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id

        await deleteTask(+id)

        res.status(200).json({ message: "Task Deleted Successfully" })
    }
    catch (err) {
        console.error(err)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const completed = req.body.completed

        await updateTask(+id, completed)

        res.status(200).json({ message: "Task Updated Successfully" })
    }
    catch (err) {
        console.error(err)
    }

}