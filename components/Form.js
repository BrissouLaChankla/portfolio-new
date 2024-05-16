'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const socials = [
    {
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
        "link": "https://github.com/BrissouLaChankla"
    },
    {
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',
        "link": "https://www.linkedin.com/in/brice-eliasse/"
    },
    {
        "icon": '<svg  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"> <title>youtube</title> <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path> </svg>',
        "link": "#",
    }
]

export default function Form() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const messageRef = useRef('');
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const [error, setError] = useState('')

    function onSubmit(e) {
        setLoading(true);
        e.preventDefault();
        e.stopPropagation();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        fetch("https://formcarry.com/s/WUqCW7dYVzM", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    nameRef.current.value = "";
                    emailRef.current.value = "";
                    messageRef.current.value = "";
                    setShowToast(true);
                    setTimeout(function () {
                        setShowToast(false);
                    }, 5000);
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
                setLoading(false);
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
                setTimeout(function () {
                    setError("");
                }, 5000);
            });
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6'>
                <label className="form-control w-full formcarry-block">
                    <div className="label">
                        <span className="label-text" htmlFor="name">Nom</span>
                    </div>
                    <input required type="text" placeholder="John Doe" className="input input-bordered w-full" ref={nameRef} id="name" />
                </label>

                <label className="form-control w-full formcarry-block">
                    <div className="label">
                        <span className="label-text" htmlFor="email">E-mail</span>
                    </div>
                    <input required type="email" placeholder="john.doe@gmail.com" className="input input-bordered w-full" ref={emailRef} id="email" />
                </label>
            </div>


            <label className="form-control mt-3">
                <div className="label">
                    <span className="label-text">Votre message</span>
                </div>
                <textarea required className="textarea textarea-bordered h-24" placeholder="Entrez votre message..." ref={messageRef} id="message" ></textarea>
            </label>

            <div className="formcarry-block flex gap-3 mt-6 items-center">

                <div className='flex gap-3'>
                    {socials.map((social, i) => <a key={i} aria-label="Lien externe vers mon réseau social" href={social.link} target={"_blank"} className="btn btn-sm h-10 btn-outline border-[1px] border-opacity-10 group transition">
                        <svg dangerouslySetInnerHTML={{ __html: social.icon }} fill='currentColor' className="w-4 h-4" />
                    </a>)}
                </div>
                <hr className='grow border-base-content opacity-50' />
                <button type="submit" className='btn btn-primary btn-outline w-36' disabled={loading}>
                    {loading ? <span className="loading loading-spinner loading-sm"></span> : "Envoyer"}
                </button>
            </div>
            <AnimatePresence>

                {
                    showToast &&
                    <motion.div className="toast toast-end" initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}>
                        <div className="alert bg-primary text-white opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Bien reçu, je vous répond au plus vite 🫡</span>
                        </div>
                    </motion.div>
                }
                {
                    error &&
                    <div className="toast toast-end">
                        <div className="alert alert-error text-white opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{error}</span>
                        </div>
                    </div>


                }
            </AnimatePresence>
        </form>
    )
}