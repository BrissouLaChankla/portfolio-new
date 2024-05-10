"use client"
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

// Data is an array of object which are the projects or techs info, src is the folder where to find the img
export default function GridLogos({ data, src }) {
    const [projectOpen, setProjectOpen] = useState("");

    const openModal = proj => {
        setProjectOpen(proj);
        document.getElementById('modal').showModal()
    }

    return (
        <>
            <div className="col-span-12 md:order-1 md:col-span-6  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">
                {data.map((el, i) => (
                    // Don't have ID cause don't have BDD
                    <span key={i} className="lg:hover:scale-110 transition">
                        <span onClick={() => openModal(el)} key={el.slug} href={el.link} className=" mask mask-squircle cursor-pointer"  >
                            <Image src={`/${src}/${el.slug}.svg`} alt={el.slug} width={100} height={100} />
                        </span>
                    </span>
                ))}

            </div>
            <Modal data={projectOpen} />
        </>
    )
}
