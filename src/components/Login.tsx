import { useState } from 'react';
import Modal from "./Dialog";
import { IconGlobe } from '@tabler/icons-react';

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Modal action={<span className='px-4 py-1 text-sm'>Login</span>}>
            <header className='flex justify-between mb-5'>
                <span className='font-bold text-lg flex gap-2'><IconGlobe/> Login Here</span>
                <Modal.Close />
            </header>
            <form className='flex flex-col gap-4 justify-center'>
                <input className='primary-input' placeholder='Email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input className='primary-input' placeholder='Password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button className='text-center primary-button self-center'>Login</button>
            </form>
        </Modal>
    )
}
