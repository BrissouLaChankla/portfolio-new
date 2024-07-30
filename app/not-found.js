import Link from 'next/link'

export default async function NotFound() {
    return (
        <main className="grow flex items-center justify-center flex-col gap-10  bg-[#1A2238]">

            <div className='relative'>

                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-primary px-2 text-sm rounded rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Tu t'es perdu
                </div>
            </div>
            <Link className='btn btn-primary w-24' href="/">Retour</Link>
        </main>
    )
}