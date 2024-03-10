import cn from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, ButtonGroup } from "@nextui-org/react";

export default function CustomButton({ href, className, label = "Button", }: any) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* <Link href={href || "/"}
                className={cn(`
                bg-transparent
                text-accentColor
                p-3 rounded-xl text-center 
                border-accentColor border-2 
                hover:bg-accentColor
                hover:text-backgroundColor 
                `, className || "")}
            >
                <span className="">{label}</span>
            </Link> */}
            <Button color="secondary" variant="faded" radius="md" size='lg' >
                {label}
            </Button>
        </motion.div>
    );

}