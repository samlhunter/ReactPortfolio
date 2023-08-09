import React from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
    return (
        <div className="flex flex-col h-screen text-gray-400 bg-gray-900 overflow-auto">
            <Navbar />
            <div className="container pt-10 pb-3 mx-auto lg:px-40 text-white items-center text-center">
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
                    <p className="text-lg italic">3.85 GPA | Academic Scholarship</p>
                </div>
                <p className="text-xl font-semibold">INTERNSHIP EXPERIENCE</p>
                <hr />
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">Amazon Web Services (AWS)</p>
                    <p className="text-lg">Seattle, WA (Remote)</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">Data Engineer Intern</p>
                    <p className="text-lg italic">May 2022 | Aug. 2022</p>
                </div>
                <div className="px-10">
                    <ul className="list-disc">
                        <li>
                            Automated process of generating master payroll file for all Amazon data centers globally using Python and pandas
                            saving 100 manual hours annually.
                        </li>
                        <li>
                            Developed scripts via Amazon Cloud Development Kit to deploy native AWS resources (Lambda, Glue, S3,
                            CloudWatch, SecretsManager) through TypeScript.
                        </li>
                    </ul>
                </div>
                <div className="px-3 flex">
                    <p className="flex-1 text-lg font-medium">Yatta Ops</p>
                    <p className="text-lg">Orem, UT</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">Software and Data Engineer Intern</p>
                    <p className="text-lg italic">May 2021 | May 2022</p>
                </div>
                <div className="px-10 pb-3">
                    <ul className="list-disc">
                        <li>
                            Constructed ETL pipeline using Apache Airflow to separate existing database into a transactional and
                            analytical database, reducing database locks by 99%.
                        </li>
                        <li>
                            Developed program to auto approve loan applications, eliminating cost for manual loan underwriter
                            saving approximately $50,000 a year.
                        </li>
                    </ul>
                </div>
                <p className="text-xl font-semibold">WORK EXPERIENCE</p>
                <hr />
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">United Insurance Group</p>
                    <p className="text-lg">Provo, UT</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">Software Engineer</p>
                    <p className="text-lg italic">Jan. 2023 | May 2023</p>
                </div>
                <div className="px-10">
                    <ul className="list-disc">
                        <li>
                            Developed API with ASP.NET Core framework to enable electronic signatures on all documents issued, 
                            rather than having all documents being signed physically.
                        </li>
                        <li>
                            Increased security requirements for client and internal applications by encrypting all user passwords, 
                            as well as designing an RBAC database for employees.
                        </li>
                        <li>
                            Migrated outdated mobile and web applications for insured clients to using React and React Native frameworks.
                        </li>
                    </ul>
                </div>
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">Yatta Ops</p>
                    <p className="text-lg">Orem, UT</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">Software Engineer</p>
                    <p className="text-lg italic">Aug. 2022 | Dec. 2022</p>
                </div>
                <div className="px-10">
                    <ul className="list-disc">
                        <li>
                            Set up VM ubuntu server to host software products internally and configured local DNS to redirect to
                            software products.
                        </li>
                        <li>
                            Developed analytics product to simulate company investment performance and returns using a ReactJS
                            framework served via nginx and a Django framework backend served via gunicorn.
                        </li>
                        <li>
                            Wrote an ETL product in Python to extract lead provider files via SSH authentication, transform downloaded files, and
                            insert data into SQL Server instance.
                        </li>
                    </ul>
                </div>
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">GC Home Care</p>
                    <p className="text-lg">Provo, UT</p>
                </div>
                <div className="flex px-3">
                    <p className="flex-1 text-lg italic">Software Consultant</p>
                    <p className="text-lg italic">Mar. 2022 | Mar. 2023</p>
                </div>
                <div className="px-10 pb-3">
                    <ul className="list-disc">
                        <li>
                            Contracted with a custom home building company to build custom software for customer service
                            product.
                        </li>
                        <li>
                            Developed administrative web application using ReactTS framework and client facing mobile
                            application using Flutter framework both using Google Cloud Platform for hosting NoSQL database and
                            serverless functions.
                        </li>
                    </ul>
                </div>
                <p className="text-xl font-semibold">SKILLS AND INTERESTS</p>
                <hr />
                <div className="pt-3 px-3 flex">
                    <p className="flex-1 text-lg font-medium">Skills:</p>
                </div>
                <div className="px-10 pb-3">
                    <ul className="list-disc">
                        <li>
                            Proficient in Python, Java, SQL, JavaScript, TypeScript, Git, AWS, GCP, ETL’s, Linux, C#, React, React Native, Flutter
                        </li>
                        <li>
                            Experienced in C, C++
                        </li>
                    </ul>
                </div>
                <div className="px-3 flex">
                    <p className="flex-1 text-lg font-medium">Interests:</p>
                </div>
                <div className="px-10 pb-3">
                    <ul className="list-disc">
                        <li>
                            Skiing, fishing, cooking, pickleball, and music
                        </li>
                        <li>
                            Fluent in Dutch and Spanish languages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}