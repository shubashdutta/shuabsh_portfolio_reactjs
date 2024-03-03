import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import subash from "../comp/subash.pdf";

function Cont() {
  return (
    <>
      <div className=" mt-5 bg-white w-full">
        <h2 className="text-center text-3xl  py-8 capitalize ">contact me</h2>
      </div>

      <div className="w-full flex    h-48 justify-center gap-1 bg-white">
        <div className="mt-5 w-[25%] h-[70%] md:w-[15%] shadow-md border-4">
          <center className="animate-bounce text-md md:text-2xl md:w-[25%] hover:bg-green-900 md:ml-20  mt-5 justify-center p-2  w-[40%] ml-4 rounded-[50%]  text-white bg-indigo-600 ">
            <FontAwesomeIcon icon={faEnvelope} />
          </center>
          <center className="mt-3 mr-3 md:mr-2 hover:text-green-500 text-sm md:text-3xl font-semibold">
            <a href="mailto:subashdutta6@gmail.com">Email</a>
          </center>
        </div>
        <div className="mt-5 w-[25%] h-[70%] md:w-[15%] shadow-md border-4">
          <center className="animate-bounce text-md md:text-2xl md:w-[25%] hover:bg-green-900 md:ml-20  mt-5 justify-center p-2  w-[40%] ml-4 rounded-[50%]  text-white bg-indigo-600 ">
            <FontAwesomeIcon icon={faLinkedin} />
          </center>
          <center className="mt-3 mr-3 md:mr-2 hover:text-green-500 text-sm md:text-3xl font-semibold">
            <a
              target="blank"
              href="https://www.linkedin.com/in/shubash-dutta-98a843271/"
            >
              Linkedin
            </a>
          </center>
        </div>
        <div className="mt-5 w-[25%] h-[70%] md:w-[15%] shadow-md border-4">
          <center className=" animate-bounce text-sm md:text-2xl md:w-[25%] hover:bg-green-900 md:ml-20  mt-5 justify-center p-2  w-[40%] ml-4 rounded-[50%]  text-white bg-indigo-600 ">
            <FontAwesomeIcon icon={faGithub} />
          </center>
          <center className="mt-3 mr-3 md:mr-2 hover:text-green-500 text-sm md:text-3xl font-semibold">
            <a target="blank" href="https://github.com/shubashdutta">
              Github
            </a>
          </center>
        </div>
        <div className="mt-5 w-[25%] h-[70%] md:w-[15%] shadow-md border-4">
          <center className="animate-bounce text-md md:text-2xl md:w-[25%] hover:bg-green-900 md:ml-20  mt-5 justify-center p-2  w-[40%] ml-4 rounded-[50%]  text-white bg-indigo-600 ">
            <FontAwesomeIcon icon={faFile} />
          </center>
          <center className="mt-3 mr-3 md:mr-2 hover:text-green-500 text-sm md:text-2xl  font-semibold md:font-bold">
            <a href={subash} download="subash">
              Download Cv
            </a>
          </center>
        </div>
      </div>
    </>
  );
}

export default Cont;
