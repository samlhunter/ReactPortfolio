// src/data.js

export const projects = [
    {
        title: "GC Home Care - Client",
        subtitle: "Flutter",
        description:
            "Commissioned by a custom home building company, this is a mobile application built using a flutter framework that is a customer care program. All requests are handled by a serverless backend functions implemented via google firebase and hosted via a NoSQL database google firestore.",
        image: "./images/flutter.png",
        link: "https://github.com/samlhunter/GCHomeCare",
    },
    {
        title: "GC Home Care - Admin",
        subtitle: "React TypeScript",
        description:
            "An admin site for interacting with the client requests. Employees can handle requests, generate maintenance reports on properties, and onboard new homeowners. Notification systems are also established for alerting admins of emergency requests.",
        image: "./images/react.png",
        link: "https://github.com/GCHomeCare/gc-homecare",
    },
    {
        title: "Tweeter",
        subtitle: "Java and AWS",
        description:
            "In my software engineering class, I built a clone of twitter. Implementing model-view-presenter architecture, and using AWS services - lambda, dynamodb, SQS, API Gateway. I used lots of software design principles in this project.",
        image: "./images/tweeter.png",
        link: "https://github.com/samlhunter/CS340-Tweeter",
    },
    {
        title: "Yatta Airflow",
        subtitle: "Airflow ETL",
        description:
            "Separated a database into a transactional and analytical database and migrated all jobs to be managed via Apache Airflow. Database locks were eventually reduced by 99% and products dependent on transactional data became much more reliable.",
        image: "./images/airflow.png",
    },
];

export const skills = ["Python", "JavaScript", "TypeScript", "Java", "ETL's", "SQL", "Git", "C++", "C", "AWS", "GCP", "Linux", "React", "Flutter"];

