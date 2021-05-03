import {Router} from 'express'
const router = Router()

import {TransactionService} from '../services/TransactionService'

router.get('/transactions', TransactionService.show)

router.post('/transactions', TransactionService.save)

router.get('/transactions/:id', TransactionService.delete)

export default router