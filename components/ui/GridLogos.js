"use client";
import Modal from "./Modal";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
// Data is an array of object which are the projects or techs info, src is the folder where to find the img
export default function GridLogos({ data, src }) {
  const [projectOpen, setProjectOpen] = useState("");
  const locale = useLocale();
  const openModal = (proj) => {
    setProjectOpen(proj);
    document.getElementById("modal").showModal();
  };

  return (
    <>
      <div className="col-span-12 md:col-span-6 order-1 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">
        {data.map((el) => (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: Math.random(),
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            key={el.slug}
          >
            <a
              key={el.slug}
              href={`/${locale}/projects/${el.slug}`}
              className=" mask mask-squircle cursor-pointer"
            >
              <Image
                src={`/${src}/${el.slug}.svg`}
                alt={el.slug}
                height={100}
                width={100}
              />
            </a>
          </motion.span>
        ))}
      </div>
      <Modal data={projectOpen} />
    </>
  );
}
