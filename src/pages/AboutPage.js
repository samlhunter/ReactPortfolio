import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="h-screen text-gray-400 bg-gray-900">
            <Navbar />
            <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Sam. 
                        <br className="hidden lg:inline-block" />I love to develop.
                    </h1>
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
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="sam"
                    width="350"
                    src="./images/samInd.jpeg"
                    />
                </div>
            </div>
        </div>
    );
}