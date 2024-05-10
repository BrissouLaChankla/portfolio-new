import Image from "next/image"

export default function Modal({ data }) {

    console.log(data)
    return (
        <dialog id="modal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl p-0">
                <div className="flex">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="relative w-3/12 bg-primary">
                        {
                          !!data.slug && <Image  src={`/projects/${data.slug}.svg`} alt={data.slug} height={500} width={300} className="h-full object-cover" />
                        }
                    </div>
                    <div className="flex flex-col gap-8 my-8 w-9/12 px-10 justify-between">
                        <h3 className="font-bold text-4xl">{data.name}</h3>
                        <p className="pb-2">{data.description}</p>
                        <a href={data.link} target="_blank" className="btn btn-sm btn-primary btn-outline self-end">Voir le chef-d'œuvre →</a>
                    </div>
                  
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
        </dialog>
    )
}
