import React from "react";
import { Timeline } from "../Components/TimeLine";

function Projects() {
  const data = [
    {
      title: "Afya MIS",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Designed and launched <strong>Afya MIS</strong>, a web application
            revolutionizing patient management for healthcare providers. This
            project enhances care delivery by providing intuitive dashboards and
            real-time analytics. Built collaboratively with a team of five,
            leveraging modern web technologies to create scalable and secure
            systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/afyamis.png"
              alt="Doctors dashboard in Afya MIS"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="images/afyamis2.png"
              alt="Admin dashboard in Afya MIS"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Inventa",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed <strong>Inventa</strong>, an inventory management system
            for businesses. This application enables efficient tracking of
            stock, sales, and reporting, optimizing business operations.
            Collaborated with a team of five, employing agile methodologies to
            deliver an intuitive and feature-rich platform.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/inventa.png"
              alt="Inventa project screenshot 1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="images/inventa2.png"
              alt="Inventa project screenshot 2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Pet Pal",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built <strong>Pet Pal</strong>, a comprehensive pet management
            system. Users can manage pet details, including adding, editing, and
            deleting entries. This group project was crafted by a team of five,
            focusing on delivering a user-friendly interface with robust
            functionality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/petpal.png"
              alt="Pet Pal interface screenshot 1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="images/petpal2.png"
              alt="Pet Pal interface screenshot 2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Travel and Tour",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Created <strong>Travel and Tour</strong>, a travel management system
            that provides weather updates for destinations to assist users in
            planning trips. This solo project served as a first step into React
            development, highlighting my ability to learn and implement new
            technologies independently.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/travel.png"
              alt="Travel and Tour interface screenshot 1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="images/travel2.png"
              alt="Travel and Tour interface screenshot 2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Projects;
