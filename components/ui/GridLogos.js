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
            <div className="col-span-12 md:col-span-6 order-1 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">
                {data.map((el, i) => (
                    // Don't have ID cause don't have BDD
                    <span key={i} className="lg:hover:scale-110 transition">
                        <span onClick={() => openModal(el)} key={el.slug} href={el.link} className=" mask mask-squircle cursor-pointer"  >
                            <img src={`/${src}/${el.slug}.svg`} alt={el.slug} height={100} width={100} loading="lazy" />
                        </span>
                    </span>
                ))}

            </div>
            <Modal data={projectOpen} />
        </>
    )
}
