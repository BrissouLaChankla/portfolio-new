"use client"
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function AnimatedStars() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-3 justify-center mb-4 opacity-90">
            {[0, 1, 2, 3, 4].map((index) => (
                <motion.div key={index} className="mask mask-star-2 bg-primary w-8 h-8" variants={item} />
            ))}
        </motion.div>
    )
}
