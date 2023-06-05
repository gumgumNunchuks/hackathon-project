import SearchBar from "../components/SearchBar"

function LandingPage() {
    return (
        <main className="h-full">
            <section className="relative h-full">
                <div className="absolute w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-slate-900 to-slate-950/25">
                    <span className="text-white text-center leading-snug font-bold text-5xl tracking-wide mb-10">
                        Your next <span className="font-['Kaushan_Script'] text-6xl"> travel <br />  Destination</span> is
                    </span>
                    <SearchBar/>
                </div>
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                />
            </section>
        </main>
    )
}

export default LandingPage
