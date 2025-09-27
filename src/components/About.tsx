import { AnimatedSection } from "./AnimatedSection";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-300 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-sky-600/50 to-blue-600/50 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-sky-700/30 to-blue-700/30 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-sky-300">
                    BH
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="text-xl leading-relaxed">
                I&apos;m{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Billal Hossan
                </span>
                , 22 years old, currently pursuing a B.Sc. in Computer Science &
                Engineering at Dhaka International University.
              </p>
              <p className="text-lg leading-relaxed">
                I aim to become a professional software developer and specialize
                in Flutter and full-stack development. I enjoy building apps
                that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                My passion lies in creating intuitive user experiences and
                robust backend systems. I believe in writing clean, maintainable
                code and continuously learning new technologies to stay current
                with industry trends.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-sky-900/30 to-blue-900/30 rounded-lg border border-sky-500/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-sky-300">
                  22
                </div>
                <div className="text-sky-400">
                  Years Old
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-sky-900/30 rounded-lg border border-sky-500/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-sky-300">
                  5+
                </div>
                <div className="text-sky-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
