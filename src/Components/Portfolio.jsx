/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "QnAi-Ask2PDFs - Chat with your multiple PDFs",
    description:
      "The QnAi Chat App is a Python application designed for conversing with multiple PDF documents. Using natural language, you can ask questions about the PDFs, and the app will generate relevant responses based on the document content.",
    url: "https://github.com/nikhil-shuklaa/QnAi-Ask2PDFs",
  },
  {
    title: "LAMBDA- Attendance System",
    description:
      "Attendance System-LAMBDA is a real-time attendance system that uses face detection technology to track attendance in a database. The system works by capturing live video of individuals and comparing them to images in a pre-existing encoded database to determine if they are authorized or not. if they are, them attandance will be marked.",
    url: "https://github.com/nikhil-shuklaa/RealtimeDatabaseFaceDetectionAttendanceSystem-LAMBDA",
  },
  {
    title: "My Resume",
    description:
      "Visit my resume site to learn more about me and my work.",
    url: "https://bit.ly/nikhil_dev",
  },
  {
    title: "HelpingGeeks - A startup by me",
    description:
      "HelpingGeeks is a one-stop solution for all the help you need. We offer digital marketing services, web development services, and more! Visit our website to learn more.",
    url: "https://helpinggeeks.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
