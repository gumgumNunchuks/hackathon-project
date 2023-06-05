import controllers from '../controllers';
import express from 'express';

const router = express.Router()

router.post('/create', controllers.signup)

router.post('/login', controllers.loginUser)

router.get('/:token', controllers.token)

router.get('/get/:id', controllers.getUser)

router.get('/get/email/:email', controllers.getUserByMail)

router.post('/update', controllers.updateUser)

module.exports = router

