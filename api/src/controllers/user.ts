import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import status from 'http-status';
import User from '../models/user.model'
import { Request, Response } from 'express';
const SECRETKEY = process.env.SECRET_KEY;

/**
 * Signing up the user
**/
export async function signup(req: any, res: any) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    

    const secPass = await bcrypt.hash(password, 10)

    // Check if there is already a user with that email
    let result = await User.findOne({ where: { email: email } })
    if (result) {
        return res
            .status(status.CONFLICT)
            .send()
    }

    const user = await User.create({
        email: email,
        password: secPass,
        name: name,
    })

    const id = user.getDataValue('id');
    const payload = {
        id: user.getDataValue('id')
    }

    const token = jwt.sign(payload, SECRETKEY, { algorithm: 'HS256' })

    await User.update(
        { token: token }, // New values to update
        { where: { id: id } } // Conditions for the update
    )

    return res
        .status(status.CREATED)
        .json({ id: id, token: token })
}

/**
 * Logging in user
**/
export async function loginUser(req: Request, res: Response) {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) return res.status(status.BAD_REQUEST).send()

    const result = await User.findOne({ where: { email: email } })
    if (!result) return res.status(status.NOT_FOUND).send()

    const passwordCompare = await bcrypt.compare(password, result.getDataValue('password'));

    if (passwordCompare) {
        return res
            .status(status.OK)
            .json({
                id: result.getDataValue('id'),
                token: result.getDataValue('token')
            })
    } else {
        return res
            .status(status.UNAUTHORIZED)
            .send()
    }
}

export async function token(req: any, res: any) {
    const token = req.params.token

    try {
        const decoded = jwt.verify(token, SECRETKEY)
        return res
            .status(status.OK)
            .json(decoded)
    } catch (err) {
        return res
            .status(status.UNAUTHORIZED)
            .send()
    }
}

export async function getUser(req: Request, res: Response) {
    const id = req.params.id
    const user = await User.findOne({ where: { id: id } })

    if (!user) return res.status(status.NOT_FOUND).send()

    return res
        .status(status.OK)
        .json(user)
}

export async function getUserByMail(req: Request, res: any) {
    const email = req.params.email
    const user = await User.findOne({ where: { email:email } })

    if (!user) return res.status(status.NOT_FOUND).send()

    return res
        .status(status.OK)
        .json(user)
}

export async function updateUser(req: Request, res: Response) {
    try {
        const newDetails: { name: string, email: string, password: string, id: string } = req.body
        const user = await User.update(
            {
                name: newDetails.name,
                email: newDetails.email,
                password: await bcrypt.hash(newDetails.password, 10)
            },
            { where: { id: newDetails.id } }
        )
    } catch (err) {
        console.log(err)
        return res
            .status(status.BAD_REQUEST)
            .send()
    }

    return res
        .status(status.OK)
        .send()
}
