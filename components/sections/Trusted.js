export default function Trusted() {
    return (
        <div className="section">
            <span className="text-xl font-medium flex gap-2 items-center justify-center mt-20 md:-mt-14">
                Ils me font déjà confiance <span className="text-primary"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg></span>
            </span>
            <div className="mt-8 grid grid-cols-12 gap-6 max-w-screen-lg m-auto place-items-center">
                <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
                    <img className="invert brightness-0  h-full object-contain m-auto " src="/trusted/mediaschool.png" alt="Logo Mediaschool" />
                </div>
                <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
                    <img className="invert brightness-0 h-full object-contain m-auto" src="/trusted/capsule.png" alt="Logo La Capsule" />
                </div>
                <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
                    <img className="invert brightness-0 h-full object-contain m-auto" src="/trusted/g2.png" alt="Logo G2 Esposrts" />
                </div>
                <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
                    <img className="invert brightness-0 h-full object-contain m-auto" src="/trusted/supdeweb.png" alt="Logo Supdeweb" />
                </div>
            </div>
        </div>
    )
}
