import express from 'express'
import user from './user.rt'

const router = express.Router()

router.use('/user', user)

export default router
