import Image from "next/image"
import Age from "../Age"
import MusicBtn from "../ui/MusicBtn"
import AnimatedAvatar from "../ui/AnimatedAvatar"
export default function About() {
    return (
        <div className="section grid grid-cols-12 items-center " id="about">
            <div className="col-span-12 md:order-1 md:col-span-6 flex flex-col items-center">
                <AnimatedAvatar />
                <span className=" h-[4px] rounded-full bg-primary w-3/4 border-primary z-10 ">
                </span>
            </div>
            <div className="col-span-12  md:col-span-6 flex flex-col gap-6">
                <h2>Et si on parlait de moi <br /><span className="text-primary">vous voulez bien ?</span></h2>
                <p>Jeune développeur Niçois de <Age />.

                    Je suis quelqu'un de curieux, créatif et <span className="underline">précis</span>.  <MusicBtn /> </p>
                <p>
                    Après un Master de développeur en alternance dans diverses startups, PME & grosses entreprises, j'ai acquis une solide expérience en développement web.
                    Etant très polyvalent, je suis naturellement devenu <strong> développeur web Freelance</strong>. Je donne d'ailleurs cours dans le supérieur et en formation Bootcamp.
                </p>
                <p>
                    Coder c'est donner vie aux idées, qu'elles soient miennes ou celles des autres.</p>
                <div className="flex gap-3 items-center">
                    <a href="https://www.linkedin.com/in/brice-eliasse" target="_blank" className="btn btn-neutral btn-sm">M'ajouter sur Linkedin <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                    <a href="/CV_Brice-Eliasse_Developpeur.pdf" target="_blank" className="btn btn-outline btn-sm">Télécharger mon CV</a>
                </div>
            </div>
        </div>
    )
}
