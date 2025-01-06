import React from "react";

function AboutMe() {
  return (
    <section className="bg-slate-950 text-white min-h-screen px-4 font-nohemi">
      {/* About Me Section */}
      <div className="max-w-7xl w-full mx-auto py-16 px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-cyan-500">
            About Me
          </h2>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I am a passionate junior full-stack developer who began my coding
              journey in 2024 through an intensive 6-month bootcamp. This
              experience ignited my love for programming and problem-solving,
              pushing me to continually improve my skills and explore the world
              of web development. I am eager to contribute as both an employee
              in a collaborative team and as a freelancer delivering quality
              projects tailored to client needs.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Beyond coding, I have a growing passion for design and strive to
              create visually appealing, responsive, and user-friendly
              applications. The tech world fascinates me because of its endless
              possibilities, whether it's building dynamic front-end interfaces
              or creating scalable back-end systems.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl w-full mx-auto py-16 px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-cyan-500">
            Experience
          </h2>
        </div>

        {/* Text */}
        <div className="text-center md:text-left md:w-2/3 mx-auto space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Error 404: Not Found. That's right—I currently have no professional
            experience in the industry. However, what I lack in experience, I
            make up for with determination, self-discipline, and an insatiable
            desire to learn and grow.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Through personal projects, collaborations, and continuous learning,
            I have cultivated a strong foundation in full-stack development.
            While I may not yet have industry experience, I am confident in my
            ability to contribute meaningfully to a team and tackle challenges
            head-on.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
