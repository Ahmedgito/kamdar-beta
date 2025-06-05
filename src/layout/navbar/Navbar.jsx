import React, { useEffect, useState } from 'react';
import Logo from "../../assets/home/logo.png";
import { Dialog } from '@headlessui/react';
import { Sling as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ setPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'About Us', key: 'home' },
        { name: 'Project', key: 'about' },
        { name: 'News', key: 'services' },
    ];

    const navVariants = {
        hidden: { y: -30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <>
            {/* Hamburger Button */}
            <div className="md:hidden fixed top-6 right-6 z-[1100]">
                <button onClick={() => setIsOpen(prev => !prev)} className="focus:outline-none">
                    <Hamburger toggled={isOpen} color="#fff" size={24} />
                </button>
            </div>

            {/* Navbar */}
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 z-50">
                        <img src={Logo} alt="Logo" className="h-10" />
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-white font-lexend text-nav tracking-tightest font-[350]">
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={item.key}
                                custom={index}
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.05, opacity: 0.9 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setPage(item.key)}
                                className="group relative transition-all duration-300"
                            >
                                <span className="relative">
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FCE07D] transition-all duration-300 group-hover:w-full" />
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Contact Button (Desktop) */}
                    <motion.div
                        className="flex-shrink-0 hidden md:block"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPage('contact')}
                            className="px-4 py-2 rounded-lg transition font-[350] font-lexend
                                bg-[linear-gradient(126.53deg,_#FAECC9_-6.95%,_#CCAB64_53.15%,_#FAECC9_113.25%)]
                                text-black hover:opacity-90"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="md:hidden">
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 z-[100]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <Dialog.Panel
                            as={motion.div}
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed right-0 top-0 h-full w-64 backdrop-blur-md bg-[#0e0e0e] z-[101] shadow-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent close on drawer tap
                        >
                            <motion.div
                                className="flex flex-col justify-center h-full px-6 gap-6"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <motion.button
                                        key={item.key}
                                        custom={index}
                                        variants={linkVariants}
                                        onClick={() => {
                                            setPage(item.key);
                                            setIsOpen(false);
                                        }}
                                        className="text-white text-center font-lexend text-lg font-[350]"
                                        whileHover={{ scale: 1.05, opacity: 0.8 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}

                                <motion.button
                                    variants={linkVariants}
                                    onClick={() => {
                                        setPage('contact');
                                        setIsOpen(false);
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 rounded-lg transition font-lexend font-[350]
                                        bg-[linear-gradient(126.53deg,_#FAECC9_-6.95%,_#CCAB64_53.15%,_#FAECC9_113.25%)]
                                        text-black hover:opacity-90 shadow"
                                >
                                    Contact Us
                                </motion.button>
                            </motion.div>
                        </Dialog.Panel>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
