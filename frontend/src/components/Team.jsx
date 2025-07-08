import React from "react";

export const Team = () => {
  return (
    <div id="team" className="text-center">
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet the Team</h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Founder — Mr. Tarun | Full Stack Developer | Content Creator
      </p>

      <div className="flex flex-col items-center">
        <img
          src="img/team/01.jpg"
          alt="Tarun"
          className="object-cover rounded-full border-4 border-gray-300 shadow-lg"
          style={{ width: "24rem", height: "24rem" }}
        />
        <h4 className="text-xl font-semibold text-gray-800 mt-4">Tarun</h4>
        <p className="text-sm text-gray-600">Full Stack Developer</p>
      </div>
    </div>
    </div>
  );
};
