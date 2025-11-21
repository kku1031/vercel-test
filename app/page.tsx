'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Web Platform",
      description: "고성능 웹 애플리케이션 개발",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      year: "2024",
    },
    {
      id: 2,
      title: "API System",
      description: "마이크로서비스 아키텍처 설계 및 구현",
      tech: ["Spring Boot", "Docker", "Kubernetes"],
      year: "2024",
    },
    {
      id: 3,
      title: "Real-time App",
      description: "실시간 데이터 처리 시스템",
      tech: ["WebSocket", "React", "Node.js"],
      year: "2023",
    },
  ];

  const skills = [
    { name: "TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 88 },
    { name: "Java", level: 82 },
    { name: "Spring Boot", level: 80 },
    { name: "Docker", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        {/* Hero Section */}
        <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            강경구
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            코드로 세상을 만들어가는 개발자
          </p>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
            사용자 경험과 성능을 최우선으로 생각하며,
            끊임없이 학습하고 성장하는 개발자입니다.
          </p>
        </div>

        {/* Skills Section */}
        <div className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className={`mb-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            프로젝트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-500 text-xs">{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-medium border border-gray-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
