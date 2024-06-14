import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createTask = async (t: Prisma.taskCreateInput) => {
    const task = await prisma.task.create({
        data: {
            text: t.text
        }
    })
    return task
}

export const getTasks = async () => {
    const tasks = await prisma.task.findMany()

    return tasks
}

export const deleteTask = async (id: number) => {
    const result = await prisma.task.delete({
        where: {
            id: id
        }
    })

    return result
}

export const updateTask = async (id: number, completed: boolean) => {
    const task = await prisma.task.update({
        where: {
            id: id
        },
        data: {
            completed: completed
        }
    })

    return task
}

export const getOneTask = async (id: number) => {
    const task = await prisma.task.findFirst({
        where: {
            id: id
        }
    })

    return task
}
