import React from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
    return (
        <div className="h-screen text-gray-400 bg-gray-900">
            <Navbar />
            <div className="container px-3 pt-10 pb-3 mx-auto lg:px-40 text-white items-center text-center">
                <p className="text-3xl">Sam Hunter</p>
            </div>
            <div className="container px-3 pb-10 mx-auto lg:px-40 text-white">
                <p className="text-xl">Education</p>
                <hr />
                <p>Brigham Young University</p>
            </div>
        </div>
    )
}