import { useState } from 'react';
import Modal from "./Dialog";
import { IconGlobe } from '@tabler/icons-react';

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Modal action={<span className='px-4 py-2 bg-white rounded-full text-black text-sm'>Sign Up</span>}>
            <header className='flex justify-between mb-5'>
                <span className='font-bold text-lg flex gap-2'><IconGlobe/>Sign Up</span>
                <Modal.Close />
            </header>
            <form className='flex flex-col gap-4 justify-center'>
                <input className='primary-input' placeholder='Name' type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input className='primary-input' placeholder='Email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input className='primary-input' placeholder='Password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button className='text-center primary-button self-center'>Register</button>
            </form>
        </Modal>
    )
}
