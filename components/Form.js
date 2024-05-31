'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socials } from '@/utils/socials';

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