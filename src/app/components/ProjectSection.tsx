"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore, FaGithub } from "react-icons/fa6";
import Image from 'next/image'

interface ProjectSectionProps {
  image: string;
  title: string;
  desc: string;
  tech: string[];
  isEven: boolean;
  androidLink?: string,
  iosLink?: string,
  githubLink?: string,
  imgSize: number
};

/** Hook: returns ref and hovered boolean. */
function useHover<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref.current]);

  return { ref, hovered };
}

/** sample data */
const projects = [
  {
    image: "/spin360.webp",
    title: "Spin 360",
    desc: "A cross-platform video editing for mobile devices",
    tech: ["Flutter", "FFmpeg", "Amplify", "Firebase"],
    androidLink: "https://play.google.com/store/apps/details?id=com.photobooth.spin360&hl=en",
    iosLink: "https://apps.apple.com/fr/app/spin360-vid%C3%A9o-photobooth/id6446317085",
    imgSize: 200
  },
  {
    image: "/easymagic.webp",
    title: "Easymagic",
    desc: "An app that offer magic tricks videos",
    tech: ["React Native"],
    androidLink: "https://play.google.com/store/apps/details?id=com.easymagicapp&hl=en&pli=1",
    iosLink: "https://apps.apple.com/fr/app/easy-magic-secret/id1488427301",
    imgSize: 200
  },
  {
    image: "/myExperience.webp",
    title: "MyExperience",
    desc: "An employee career & benefits management app destined for a company in Mauritius.",
    tech: ["React Native", "Firebase"],
    androidLink: "https://apkpure.com/myexperience-by-enl-and-rogers/com.myrogerapp",
    imgSize: 200
  },
  {
    image: "/firebase-chat-app.png",
    title: "FlutterChat",
    desc: "A real-time chat application inspired by Meta Messenger",
    tech: ["Flutter", "Firebase"],
    githubLink: "https://github.com/ainaNiri/FlutterChat",
    imgSize: 250
  },
  {
    image: "/chess.png",
    title: "Chess",
    desc: "A chess game made with Flutter",
    tech: ["Flutter"],
    githubLink: "https://github.com/ainaNiri/Chess",
    imgSize: 250
  },
];

function ProjectCard({
  image,
  title,
  desc,
  tech,
  isEven,
  androidLink,
  iosLink,
  githubLink,
  imgSize
}: ProjectSectionProps) {
  // use our hook on the container element
  const { ref, hovered } = useHover<HTMLDivElement>();

  // overlay animation variants (alternating directions possible)
  const overlayVariants = {
    hidden: { x: isEven ? "-100%" : "100%" },
    visible: { x: 0 },
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition overflow-hidden"
      ref={ref}
    >
      <div className="panel relief p-6 rounded-2xl relative z-10 h-120">
        <div className="h-full md:flex md:items-center md:gap-8 justify-between items-center">
          {isEven && (
            <div className="md:w-1/2 mt-6 md:mt-0 max-md:hidden">
              <Image
                src={image}
                alt={image}
                className="rounded-xl shadow-md object-cover"
                width={imgSize}
                height={imgSize}
              />
            </div>
          )}

          <div className="md:w-1/2 flex flex-col gap-8">
            <h3 className="text-4xl font-semibold text-white">{title}</h3>
            <p className="text-[#cfe6ff] mt-2">{desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-[#071024] rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {!isEven && (
            <div className="md:w-1/2 mt-6 md:mt-0 max-md:hidden">
              <Image
                src={image}
                alt={image}
                className="rounded-xl shadow-md object-cover"
                width={imgSize}
                height={imgSize}
              />
            </div>
          )}
        </div>
      </div>

      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
        transition={{ duration: 0.38, ease: "easeInOut" }}
        className="absolute inset-0 bg-white/90 flex items-center justify-center gap-6 text-white text-3xl z-30"
        style={{ pointerEvents: hovered ? "auto" : "none" }}
      >
        <div className="flex items-center gap-6">
          {
            androidLink && 
            <a
              href={androidLink}
              className="p-2 rounded-md bg-white/6 hover:bg-white/12 transition-transform"
              title="Google Play"
            >
              <BiLogoPlayStore color="black" size={60}/>
            </a>
          }
          {
            iosLink &&
            <a
              href={iosLink}
              className="p-2 rounded-md bg-white/6 hover:bg-white/12 transition-transform"
              title="App Store"
            >
              <FaAppStore color="black" size={60}/>
            </a>
          }
          {
            githubLink &&
            <a
              href={githubLink}
              className="p-2 rounded-md bg-white/6 hover:bg-white/12 transition-transform"
              title="Github"
            >
              <FaGithub color="black" size={60}/>
            </a>
          }
  
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectSection() {
  return (
    <div className="space-y-8 grid grid-cols-1 2xl:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          isEven={index % 2 === 0}
          androidLink={project.androidLink}
          iosLink={project.iosLink}
          githubLink={project.githubLink}
          imgSize={project.imgSize}
        />
      ))}
    </div>
  );
}
