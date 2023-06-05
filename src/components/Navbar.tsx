import { IconGlobe } from '@tabler/icons-react'
import { Login } from './Login'
import { SignUp } from './Register'

function NavBar() {
    return (
        <nav className="w-full fixed top-0 z-10 text-white">
            <div className='h-[56px] max-w-6xl mx-auto w-full flex justify-between items-center '>
                <section className='flex gap-2 font-bold'>
                    <IconGlobe size={24} />
                    Tripper
                </section>
                <section className='flex gap-2'>
                    <Login/>
                    <SignUp/>
                </section>
            </div>
        </nav>
    )
}

export default NavBar
