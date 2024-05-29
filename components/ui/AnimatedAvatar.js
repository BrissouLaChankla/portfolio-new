"use client"
import styles from "@/style/rocket.module.css"
import { motion } from "framer-motion"
export default function AnimatedAvatar() {
    return (
        <div className="relative ">
            <div className={styles.rocketPlacement}>
                <div className={`${styles.rocket} `}>
                </div>
            </div>
            <div className="overflow-hidden">

                <motion.img
                    initial={{ translateY: "100%" }}
                    whileInView={{ translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                    }}
                    src="/avatar.webp"
                    loading="lazy"
                    className=" object-contain md:w-2/3 w-52 m-auto"
                    width={400}
                    height={400}
                    alt="Avatar de Brice Eliasse" />
            </div>
        </div>
    )
}
