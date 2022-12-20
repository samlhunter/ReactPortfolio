import { Link } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="title-font font-medium text-white mb-4 md:mb-0">
                <Link to={'/'} className="ml-3 text-xl">
                    Sam Hunter
                </Link>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-white" to={'/about'}>
                    About
                </Link>
                <a className="mr-5 hover:text-white">Resume</a>
                <Link className="mr-5 hover:text-white" to={'/projects'}>
                    Projects
                </Link>
                <Link to={'/skills'} className="mr-5 hover:text-white">
                    Skills
                </Link>
                <a href="#skills" className="mr-5 hover:text-white">
                    Personal
                </a>
            </nav>
            <a 
                href="https://github.com/samlhunter" 
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
                <img
                    className="object-cover object-center rounded"
                    alt="Github"
                    width="30"
                    src="./images/github.png" 
                />
            </a>
            <a 
                href="https://www.linkedin.com/in/samuellhunter" 
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
                <img
                    className="object-cover object-center rounded"
                    alt="Linkedin"
                    width="30"
                    src="./images/linkedin.webp" 
                />
            </a>
            <Link
                to={'/contact'}
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
                Contact Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
        </div>
        </header>
    );
}