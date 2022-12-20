import React from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
    return (
        <div className="h-screen text-gray-400 bg-gray-900">
            <Navbar />
            <div className="container px-3 pt-10 pb-3 mx-auto lg:px-40 text-white items-center text-center">
                <p className="text-3xl font-medium font-sans">Sam Hunter</p>
            </div>
            <div className="container px-3 pb-10 mx-auto lg:px-40 text-white">
                <p className="text-xl font-semibold">EDUCATION</p>
                <hr />
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">Brigham Young University</p>
                    <p className="text-lg">Provo, UT</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">B.S Computer Science: Data Science emphasis</p>
                    <p className="text-lg italic">Dec. 2022</p>
                </div>
                <div className="flex px-3 pb-3">
                    <p className="text-lg">3.85 GPA | Dean's List | Academic Scholarship</p>
                </div>
                <p className="text-xl font-semibold">INTERNSHIP EXPERIENCE</p>
                <hr />
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">Amazon Web Services (AWS)</p>
                    <p className="text-lg">Seattle, WA (Remote)</p>
                </div>
            </div>
        </div>
    )
}