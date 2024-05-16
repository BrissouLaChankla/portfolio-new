"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    company: "La Capsule",
    posts: [
      {
        name: "Principal Teacher",
        startDate: "Janv. 2024",
        endDate: "Aujourd'hui",
      },
      {
        name: "Teacher",
        startDate: "Mars 2023",
        endDate: "Janv. 2024",
      }
    ],
    slug: "capsule",
    pics: 2
  },
  {
    company: "MediaSchool",
    posts: [
      {
        name: "Intervenant professionnel",
        startDate: "Janv. 2022",
        endDate: "Aujourd'hui",
      }
    ],
    slug: "mediaschool",
    pics: 2

  },
  , {
    company: "Nanaba",
    posts: [
      {
        name: "Chef de Projet Web",
        startDate: "Janv. 2022",
        endDate: "Août 2022",
      },
      {
        name: "Développeur Full-Stack",
        startDate: "Sept 2021",
        endDate: "Janv. 2022",
      }
    ],
    slug: "nanaba",
    pics: 3

  },
  {
    company: "MWA",
    posts: [
      {
        name: "Développeur Full-Stack",
        startDate: "Sept. 2020",
        endDate: "Sept. 2021",
      },
    ],
    slug: "mwa",

  },
  {
    company: "Koedia",
    posts: [
      {
        name: "Intégrateur Web",
        startDate: "Sept. 2019",
        endDate: "Août 2020",
      },
    ],
    slug: "koedia",
  },
  {
    company: "Visiplus Academy",
    posts: [
      {
        name: "Intégrateur / Webdesigner",
        startDate: "Juil. 2016",
        endDate: "Sept. 2019",
      },
    ],
    slug: "visiplus",
  },
]



export default function Career() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);



  return (
    <div className="section grid grid-cols-12 gap-6 lg:gap-14 items-center">
      <div className="col-span-12  md:col-span-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedJob.slug}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            src={`/companies/photos/${selectedJob.slug}.webp`}
            width={400}
            height={300}
            alt="Photo de Brice Eliasse"
            className="rounded-2xl w-full h-96 object-cover" />

        </AnimatePresence>

        <div className="flex justify-between gap-5 mt-4 h-56 w-full">
          <AnimatePresence mode="wait" >

            {
              !!selectedJob.pics &&
              [...Array(selectedJob.pics)].map((el, i) =>
                <motion.img
                  src={`/companies/photos/${selectedJob.slug}_${i + 1}.webp`}
                  key={selectedJob.slug + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.15 * i
                  }} height={224} alt={`Photo de ${el}`} className={`rounded-xl object-cover min-w-0 ${selectedJob.pics === 1 ? "w-full" : selectedJob.pics === 2 ? "w-1/2" : "w-1/3"}`} />
              )}
          </AnimatePresence>
        </div>

      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col gap-6 ">
        <h2>C'était un réel plaisir de <br /><span className="text-primary">travailler ensemble</span></h2>
        <p>Merci à toutes les entreprises qui m'ont fait confiance ↓</p>

        <div className="border-2 border-gray-700 rounded-xl overflow-hidden">
          {jobs.map((job, i) =>
            <div
              key={job.slug}
              className={`px-4 py-2.5  ${job.slug === selectedJob.slug ? "bg-gray-800" : i <= 3 ? "transition cursor-pointer hover:bg-gray-800 " : ""}`}
              onClick={() => i <= 3 ? setSelectedJob(job) : false}
            >
              <div className="flex items-start gap-2">
                <img src={`/companies/${job.slug}.png`} width={40} height={40} alt={`Logo ${job.company}`} />
                <div className="grow">
                  <h3 className=" font-semibold tracking-wide mb-1 text-sm">{job.company}</h3>
                  {job.posts.map(post =>
                    <div key={post.slug} className="flex justify-between items-center text-xs text-base-content opacity-75 mb-0.5">
                      <h4>{post.name}</h4>
                      <div>
                        {post.startDate} - {post.endDate}
                      </div>
                    </div>
                  )}
                </div>
              </div>


            </div>)}
        </div>

      </div>
    </div>

  )
}
