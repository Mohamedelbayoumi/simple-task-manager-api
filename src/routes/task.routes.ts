
import { Router } from 'express'

import { create, fetchAll, fetchOne, update, remove } from '../controllers/task.controller'

const router = Router()

router.get('/', fetchAll)

router.post('/', create)

router.get('/:id', fetchOne)

router.delete('/:id', remove)

router.patch('/:id', update)

export default router




