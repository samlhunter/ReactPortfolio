import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="flex flex-col h-screen text-gray-400 bg-gray-900 overflow-auto">
            <Navbar />
            <div className="container mx-auto flex flex-col grow px-10 py-10 items-center align-middle justify-center">
                <div className="flex flex-row">
                    <div className="flex flex-col grow mb-16 md:mb-0 items-start text-left">
                        <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, I'm Sam. 
                            <br className="hidden lg:inline-block" />I love to develop.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            I recently graduated from BYU with a B.S degree in Computer Science with emphasis in data science and software engineering.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            I have a passion for building quality software and learning new skills. As you look at my portfolio feel free to contact me with any questions.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                to={'/contact'}
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Reach Out To Me
                            </Link>
                            <Link
                                to={'/projects'}
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                See My Past Work
                            </Link>
                        </div>
                    </div>
                    <div className="pl-24 items-center align-middle">
                        <img
                            className="object-cover object-center rounded"
                            alt="sam"
                            width="500"
                            src="./images/samInd.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}