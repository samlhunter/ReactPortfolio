import React from "react";
import emailjs from 'emailjs-com';
import { CheckCircleIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();

        emailjs.send('service_ir9x96d', 'template_w71k0ze', {
            from_name:name,
            message:message,
            reply_to:email,
        }, 'ypndAleSje4gdhDCW')
        .then((result) => {
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
        }, (error) => {
            console.log(error.text);
        })
    }

    return (
        <div className="text-gray-400 bg-gray-900">
            <Navbar />
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.8)" }}
                    src="https://www.google.com/maps/embed/v1/place?q=471+E+200+N+Provo,+UT&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
                    <div className="bg-gray-900 relative flex flex-wrap py-4 rounded shadow-md">
                        <div className="lg:w-1/2 px-10">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                471 E 200 N <br />
                                Provo, UT 84606
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-indigo-400 leading-relaxed">
                                samhunter98@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">949-887-9956</p>
                        </div>
                    </div>
                </div>
                <form
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Want to talk? Please reach out to me!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                        </label>
                        <input
                        type="text"
                        id="from_name"
                        name="name"
                        value={name}
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                        </label>
                        <input
                        type="email"
                        id="reply_to"
                        name="email"
                        value={email}
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        value={message}
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="place-items-center">
                    {!submitted 
                        ?
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                        :
                        <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"></CheckCircleIcon>
                    }
                    </div>
                </form>
            </div>
        </div>
    );
}