import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import Navbar from "../components/Navbar";
import { projects } from "../data";

export default function Projects() {
    return (
        <div className="flex flex-col h-screen text-gray-400 bg-gray-900 overflow-auto">
            <Navbar />x
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-16 md:w-12 mb-4" />
                    <h1 className="text-4xl md:text-3xl font-medium title-font mb-4 text-white">
                        Projects I've worked on
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg">
                        Here are a few of my favorite projects that I have worked on. These have included a diversity of frameworks and programming languages. Some are linked to respositories if they are public.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link ? project.link: null} 
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4"
                    >
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                                src={project.image}
                            />
                            <div className="px-8 relative py-10 z-0 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
  );
}