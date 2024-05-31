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
                <motion.div
                    initial={{ translateY: "100%" }}
                    whileInView={{ translateY: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                    transition={{
                        duration: 1,
                    }}>
                    <img
                        src="/avatar/left.webp"
                        loading="lazy"
                        className={`${styles.leftEye} absolute md:w-2/3 w-52 left-1/2 `}
                        width={400}
                        height={400}
                        alt="Oeil gauche de Brice Eliasse" />
                    <img
                        src="/avatar/right.webp"
                        loading="lazy"
                        className={`${styles.rightEye} absolute md:w-2/3 w-52 left-1/2 `}
                        width={400}
                        height={400}
                        alt="Oeil gauche de Brice Eliasse" />
                    <img
                        src="/avatar/noeyes.webp"
                        loading="lazy"
                        className=" object-contain md:w-2/3 w-52 m-auto "
                        width={400}
                        height={400}
                        alt="Avatar de Brice Eliasse" />
                    <span className={styles.pupille}></span>


                </motion.div>
            </div>
        </div>
    )
}
