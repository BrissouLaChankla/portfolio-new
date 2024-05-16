import Image from "next/image"

export default function Modal({ data }) {

    return (
        <dialog id="modal" className="modal">
            {
                !!data.slug &&
                <>
                    <div className="modal-box w-11/12 max-w-5xl p-0">
                        <div className="flex flex-col sm:flex-row">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle absolute right-2 btn-outline sm:btn-ghost border-2 sm:border-0 top-2 z-20">✕</button>
                            </form>
                            <div className="relative w-full sm:w-3/12 bg-primary">
                                <Image src={`/projects/${data.slug}.svg`} alt={data.slug} height={500} width={300} className="h-44 sm:h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-8 my-8 sm:w-9/12 px-10 justify-between">
                                <h3 className="font-bold text-4xl">{data.name}</h3>
                                <p className="pb-2">{data.description}</p>
                                <div className="flex flex-col sm:flex-row-reverse gap-4 justify-between items-center">
                                    {

                                        data.link === "#"
                                            ?
                                            <i className=" self-stretch sm:self-end text-primary">C'est privé ...</i>

                                            :

                                            <a href={data.link} target="_blank" className="btn btn-sm btn-primary btn-outline  self-stretch sm:self-end">Voir le chef-d'œuvre →</a>

                                    }
                                    <div className="flex items-stretch border-2 border-opacity-50 border-base-content rounded-lg overflow-hidden">
                                        <div className="bg-primary/70 w-8 place-items-center grid ">
                                            <svg className="w-3.5 h-3.5 opacity-90" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                                        </div>
                                        <div className="text-xs px-2 py-0.5">
                                            {data.tools.map((tool, i) => <span>{i > 0 ? <span className="px-1">|</span> : ""}{tool}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </>
            }
        </dialog>

    )
}
