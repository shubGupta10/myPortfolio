import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ()=>{
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.5}}
            className="my-8 text-center text-3xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 1.5}}
                className="my-3">{CONTACT.address}</motion.p>
                <motion.p 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity:0, x: 100}}
                transition={{duration: 1.5}}
                className="my-3">{CONTACT.phoneNo}</motion.p>
                <a href="mailto:tabhishek2002@gmail.com" className="border-b cursor-pointer">{CONTACT.email}</a>
            </div>
        </div>
    );
};

export default Contact;