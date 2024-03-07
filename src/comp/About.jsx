import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Iam Shubash Dutta{" "}
              <span className=" text-indigo-400 md:text-3xl">
                "Full_stack developer"
              </span>
            </h2>
            <p className="mt-6 text-gray-600">
              I am a proficient full-stack developer with expertise in Golang
              and React.js. Skilled in crafting robust web applications, I
              leverage Golang's efficiency and React.js's versatility to build
              dynamic, scalable solutions. With a keen eye for optimization, I
              ensure seamless functionality and exceptional user experiences in
              every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
