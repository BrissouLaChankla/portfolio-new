"use client"
import { motion } from "framer-motion"
export default function AnimatedTools(techno) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.2,
                delay: Math.random()
            }} key={techno.slug} className="tooltip" data-tip={techno.tooltip}>
            <a target="_blank" href={techno.link} className="mask mask-squircle tooltip lg:hover:scale-110 lg:transition"  >
                <img src={`/technos/${techno.slug}.svg`} alt={techno.slug} width={100} height={100} loading="lazy" />
            </a>
        </motion.span>
    )
}
