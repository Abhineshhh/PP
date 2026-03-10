"use client";

import { motion } from "framer-motion";

interface AnimateInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
