import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
  FaArrowUp,
  FaArrowDown,
  FaExternalLinkAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function App() {
  const profile = {
    name: "Bhargav Sunil",
    title: "Full Stack Developer (MERN)",
    summary:
      "Fresh and enthusiastic Full Stack Developer specializing in MERN stack development. Passionate about building modern web applications with clean code and excellent user experiences. Completed multiple projects demonstrating strong skills in both frontend and backend development.",
    location: "India",
    email: "bhargavsunil2166@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhargav-sunil-yalamati",
    github: "https://github.com/Bhargav-sunil",
  };

  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQLite",
    "RESTful APIs",
    "JWT Authentication",
    "Git & GitHub",
    "Python",
    "Responsive Web Design",
  ];

  const projects = [
    {
      id: 1,
      title: "AI Code Reviewer",
      description:
        "AI-powered web app for real-time JavaScript code reviews using Gemini 2.0 Flash, with live syntax highlighting and backend API integration.",
      tags: [
        "React.js",
        "Node.js",
        "Express",
        "Gemini 2.0 Flash API",
        "Code Editor",
        "Markdown",
      ],
      link: "https://ai-code-reviewer-olive.vercel.app/",
      demo: "https://ai-code-reviewer-olive.vercel.app/",
    },
    {
      id: 2,
      title: "Multivendor E-Commerce Backend",
      description:
        "RESTful backend for multivendor e-commerce with secure authentication, product/vendor management, and image uploads.",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt.js",
        "Multer",
        "REST API",
      ],
      link: "https://github.com/Bhargav-sunil/Backend_Multivendor.git",
      demo: null,
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Web app to manage users and tasks with role-based access, authentication, search, and pagination.",
      tags: [
        "React.js",
        "React Router",
        "Node.js",
        "Express.js",
        "SQLite3",
        "JWT",
        "bcryptjs",
      ],
      link: "https://task-management-seven-plum-86.vercel.app/login",
      demo: "https://task-management-seven-plum-86.vercel.app/login",
    },
    {
      id: 4,
      title: "JobSearch Platform",
      description:
        "RESTful backend for managing movies and reviews with CRUD functionality and SQLite database integration.",
      tags: ["React.js", "React Router", "REST API", "CSS3", "JavaScript"],
      link: "https://jobbyapp2166.ccbp.tech",
      demo: "https://jobbyapp2166.ccbp.tech",
    },
  ];

  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  function copyEmail() {
    navigator.clipboard
      .writeText(profile.email)
      .then(() => alert("Email copied to clipboard"))
      .catch(() => alert("Copy failed — please copy manually"));
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrolled > 300);
      setShowScrollBottom(
        scrolled > 100 && scrolled + windowHeight < documentHeight - 100
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Handle navigation clicks
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <div
      className={`min-h-screen min-w-full transition-colors duration-300 ${
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900"
      } antialiased flex flex-col`}
    >
      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white dark:focus:bg-gray-800 focus:px-3 focus:py-2 focus:rounded-lg focus:shadow-lg focus:z-50 focus:border-2 focus:border-indigo-500"
      >
        Skip to main content
      </a>

      {/* Scroll buttons */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to bottom"
        >
          <FaArrowDown />
        </button>
      )}

      {/* Header */}
      <header
        className={`w-full backdrop-blur-lg border-b sticky top-0 z-30 transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/80 border-gray-700/60"
            : "bg-white/80 border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg">
                  BS
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {profile.name}
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {profile.title}
                  </p>
                </div>
              </div>
            </div>

            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Primary"
            >
              {["about", "skills", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-yellow-400 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>

              <div className="hidden md:flex items-center gap-4">
                <a
                  href={profile.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 transition-colors transform hover:scale-110 ${
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 transition-colors transform hover:scale-110 ${
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick("contact", e)}
                  className="text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <FaEnvelope size={14} />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`md:hidden backdrop-blur-lg border-t animate-fade-in ${
              darkMode
                ? "bg-gray-900/95 border-gray-700"
                : "bg-white/95 border-gray-200"
            }`}
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {["about", "skills", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    darkMode
                      ? "text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <div className="flex gap-4 px-4 py-3">
                <a
                  href={profile.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main" className="flex-1 w-full">
        {/* Hero Section - FIXED Z-INDEX AND POINTER EVENTS */}
        <section
          id="hero"
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div
            className={`absolute inset-0 -z-10 ${
              darkMode
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                : "bg-gradient-to-br from-white via-blue-50/50 to-indigo-100/30"
            }`}
          />
          {/* Added pointer-events-none so these don't block clicks on mobile */}
          <div
            className={`absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-float pointer-events-none ${
              darkMode ? "bg-purple-900/20" : "bg-purple-300/20"
            }`}
          />
          <div
            className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed pointer-events-none ${
              darkMode ? "bg-indigo-900/20" : "bg-indigo-300/20"
            }`}
          />

          {/* Added relative and z-10 to bring content above background layers */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p
                className={`text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick("projects", e)}
                  className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
                >
                  See Projects
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className={`inline-flex items-center px-5 py-3 border-2 rounded-xl transform hover:scale-105 transition-all duration-300 font-medium cursor-pointer ${
                    darkMode
                      ? "border-gray-600 hover:border-indigo-500 hover:bg-gray-800 text-gray-300"
                      : "border-gray-300 hover:border-indigo-500 hover:bg-white text-gray-700"
                  }`}
                >
                  <FaEnvelope className="mr-2" />
                  Email me
                </a>
                <button
                  onClick={copyEmail}
                  className={`inline-flex items-center px-5 py-3 border-2 rounded-xl transform hover:scale-105 transition-all duration-300 font-medium cursor-pointer ${
                    darkMode
                      ? "border-gray-600 hover:border-indigo-500 hover:bg-gray-800 text-gray-300"
                      : "border-gray-300 hover:border-indigo-500 hover:bg-white text-gray-700"
                  }`}
                >
                  <FaCopy className="mr-2" />
                  Copy email
                </button>
              </div>

              <div
                className={`flex flex-wrap gap-6 pt-6 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>
                    <strong className="font-semibold">Location:</strong>{" "}
                    {profile.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>
                    <strong className="font-semibold">Experience:</strong>{" "}
                    Fresher
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt pointer-events-none" />
                <div
                  className={`relative w-80 h-80 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center transform group-hover:scale-105 transition-all duration-500 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    BS
                  </div>
                  <h3
                    className={`mt-6 text-center font-bold text-xl ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {profile.name}
                  </h3>
                  <p
                    className={`mt-2 text-center leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {profile.title}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4 relative z-20">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 transform hover:scale-110 transition-all duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 transform hover:scale-110 transition-all duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className={`p-2 transform hover:scale-110 transition-all duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate Full Stack Developer fresh in the field with
              strong expertise in MERN stack development. I've built multiple
              projects showcasing my ability to create complete web applications
              from frontend to backend. I'm dedicated to writing clean,
              maintainable code and creating seamless user experiences. Always
              eager to learn new technologies and take on challenging projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className={`py-20 backdrop-blur-sm ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p
                className={`text-lg mt-4 md:mt-0 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Fresher • Open to full-time opportunities
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`border-2 rounded-xl p-4 text-center shadow-sm hover:shadow-xl transform hover:scale-105 hover:border-indigo-200 transition-all duration-300 cursor-default group ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span
                    className={`font-medium transition-colors ${
                      darkMode
                        ? "text-gray-200 group-hover:text-indigo-400"
                        : "text-gray-800 group-hover:text-indigo-600"
                    }`}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="relative mt-4 md:mt-0">
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <input
                id="project-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or tag..."
                className={`border-2 rounded-xl px-4 py-3 text-sm w-64 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    : "border-gray-200 text-gray-900"
                }`}
                aria-label="Search projects"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border group ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-2"
                  >
                    {project.title}
                    <FaExternalLinkAlt
                      size={14}
                      className={darkMode ? "text-gray-500" : "text-gray-400"}
                    />
                  </a>
                </h3>
                <p
                  className={`leading-relaxed mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        darkMode
                          ? "bg-indigo-900/30 text-indigo-300 border-indigo-700"
                          : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg hover:bg-indigo-50 transition-all duration-300 group-hover:border-indigo-300 ${
                      darkMode
                        ? "text-indigo-400 border-indigo-800 hover:bg-indigo-900/30"
                        : "text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                    }`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                    {project.demo ? "Live Demo" : "View Code"}
                  </a>
                  {project.demo && project.link !== project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-300 ${
                        darkMode
                          ? "text-gray-300 border-gray-600 hover:bg-gray-700"
                          : "text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div
                className={`col-span-full text-center py-12 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl">No projects match your search.</p>
                <p className="mt-2">
                  Try different keywords or browse all projects.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 backdrop-blur-sm ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p
              className={`text-lg text-center max-w-3xl mx-auto mb-12 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Interested in working together or have a question? Reach out — I
              typically reply within a few business days.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Box - Combined Email & Social */}
              <div
                className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-300 flex flex-col ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </h3>

                {/* Email Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      <FaEnvelope size={18} />
                    </div>
                    <h4 className="font-semibold text-lg">Email</h4>
                  </div>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {profile.email}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm font-medium"
                    >
                      <FaEnvelope className="mr-2" />
                      Send Email
                    </a>
                    <button
                      onClick={copyEmail}
                      className={`inline-flex items-center justify-center px-4 py-3 border rounded-lg hover:border-indigo-300 transform hover:scale-105 transition-all duration-300 ${
                        darkMode
                          ? "border-gray-600 hover:bg-gray-700"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      aria-label="Copy email"
                    >
                      <FaCopy size={16} />
                    </button>
                  </div>
                </div>

                {/* Social Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      🌐
                    </div>
                    <h4 className="font-semibold text-lg">Social</h4>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <FaGithub className="mr-3" size={18} />
                        <span>GitHub</span>
                      </div>
                      <FaExternalLinkAlt
                        size={12}
                        className={darkMode ? "text-gray-400" : "text-gray-500"}
                      />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <FaLinkedin className="mr-3" size={18} />
                        <span>LinkedIn</span>
                      </div>
                      <FaExternalLinkAlt
                        size={12}
                        className={darkMode ? "text-gray-400" : "text-gray-500"}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form Box */}
              <div
                className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    💬
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Send Message
                  </h3>
                </div>
                <ContactForm email={profile.email} darkMode={darkMode} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`border-t backdrop-blur-sm py-12 ${
            darkMode
              ? "bg-gray-900/80 border-gray-700"
              : "bg-white/80 border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                  BS
                </div>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  © {new Date().getFullYear()} {profile?.name || "Your Name"}.
                  All rights reserved.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-400 hover:text-indigo-600"
                  }
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-400 hover:text-indigo-600"
                  }
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className={
                    darkMode
                      ? "text-gray-400 hover:text-indigo-400"
                      : "text-gray-400 hover:text-indigo-600"
                  }
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ContactForm({ email, darkMode }) {
  const [form, setForm] = useState({ name: "", message: "", subject: "" });
  const [status, setStatus] = useState(null);

  function update(key, value) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      form.subject || "Contact from portfolio"
    )}&body=${encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-4"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="c-name" className="sr-only">
          Your name
        </label>
        <input
          id="c-name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your name"
          className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "border-gray-200 text-gray-900"
          }`}
        />
      </div>

      <div>
        <label htmlFor="c-subject" className="sr-only">
          Subject
        </label>
        <input
          id="c-subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          placeholder="Subject"
          className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "border-gray-200 text-gray-900"
          }`}
        />
      </div>

      <div>
        <label htmlFor="c-message" className="sr-only">
          Message
        </label>
        <textarea
          id="c-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Your message..."
          rows={4}
          className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "border-gray-200 text-gray-900"
          }`}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Send Message
        </button>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", message: "", subject: "" });
            setStatus(null);
          }}
          className={`px-4 py-3 border-2 rounded-lg hover:border-gray-300 transform hover:scale-105 transition-all duration-300 ${
            darkMode
              ? "border-gray-600 hover:bg-gray-700"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          Clear
        </button>
      </div>

      {status === "sent" && (
        <p
          className={`text-sm px-4 py-2 rounded-lg border ${
            darkMode
              ? "text-green-400 bg-green-900/30 border-green-800"
              : "text-green-600 bg-green-50 border-green-200"
          }`}
        >
          Opening your email client to send your message...
        </p>
      )}
    </form>
  );
}
