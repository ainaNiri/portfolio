"use client";
import Navbar from "./components/Navbar";
import Cube3D from "./components/Cube3D";
import ReliefCard from "./components/TwoLayerCard";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import { FaFlutter, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";
import { SiKotlin, SiTypescript } from "react-icons/si";
import { DiDart, DiSwift } from "react-icons/di";
import { BsAndroid } from "react-icons/bs";
import Image from "next/image";
import Aina from "../../public/aina.png";
import { ContactSection } from "./components/ContactSection";
import SkillSection from "./components/SkillSection";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section id="home" className="section min-h-[78vh] flex items-center">
          <Cube3D />
          <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-sm kicker mb-3">Hello — I’m</div>
              <h1 className="text-5xl font-bold">Aina Nirina <span className="text-accent">RANDRIA</span></h1>
              <p className="text-[#abcff2] mt-4 max-w-xl leading-relaxed">
                Front-end Developer specializing in Flutter, React Native and React JS. I create fast, reliable apps that combine performance with elegant, user-friendly design.
              </p>

              <div className="flex gap-4 mt-6">
                <a href="https://github.com/ainaNiri" target="_blank" className="text-[#9fb3d8] hover:text-white"><Github /></a>
                <a href="https://linkedin.com/in/aina-nirina-randria" target="_blank" className="text-[#9fb3d8] hover:text-white"><Linkedin /></a>
                <a href="mailto:randria.ainaniri@gmail.com" className="text-[#9fb3d8] hover:text-white"><Mail /></a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="panel p-4 rounded-full mb-4">
                <Image src={Aina} alt="profile" className="w-58 h-58 rounded-full object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="max-w-6xl mx-auto px-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
            <SkillSection />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <ExperienceSection />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-white mb-6 px-5">Projects</h2>

            <div className="space-y-10">
              <ProjectSection />
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <ContactSection />
        </section>

      </main>
    </>
  );
}
