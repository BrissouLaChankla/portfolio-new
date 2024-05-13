export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-16 md:pt-32 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >

            </div>
            <div className="mx-auto max-w-2xl">

                <div className="text-center">
                    <a href="#" className="btn btn-disabled font-semibold  badge-outline text-xs mb-6 rounded-full py-0 min-h-8 h-8">
                        Retrouvez bientôt mes cours en ligne →
                    </a>

                    {/* <a href="#" className="font-semibold badge badge-primary badge-outline text-xs mb-6 p-3">
                        Retrouvez mes cours en ligne →
                    </a> */}
                    <h1 className="text-4xl font-bold tracking-tight sm:leading-none text-base-content sm:text-7xl">
                        Brice Eliasse <div className="text-primary">Dev. Web Freelance </div>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-base-content">
                        Développeur Full stack Freelance sur Nice avec 6 années d'expériences, <br /> <a href="#contact" className="text-primary underline">je suis disponible</a> pour réaliser le site ou l'application de vos rêves.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="btn btn-primary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            Me contacter
                        </a>
                        <a href="#about" className="btn glass">
                            Me découvrir <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
