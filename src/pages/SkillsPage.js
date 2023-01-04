import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import Navbar from "../components/Navbar";

export default function Skills() {
    return (
        <div className="flex flex-col h-screen text-gray-400 bg-gray-900 overflow-auto">
            <Navbar />
            <div className="flex flex-col grow container px-5 py-5 mx-auto">
                <div className="text-center mb-5">
                    <ChipIcon className="w-16 md:w-12 inline-block mb-4" />
                    <h1 className="text-4xl md:text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here are some of the skills that I feel make me a valuable asset. I take pride in diversifying my knowledge and love to learn new skills. I have also learned some of
                        these skills on my own.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 w-full md:w-1/2">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}