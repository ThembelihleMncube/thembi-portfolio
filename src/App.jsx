import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Award, FileDown, ExternalLink, Cpu, BrainCircuit, Network, BarChart3, Trophy } from "lucide-react";

// ======== PROFILE & DATA ========
const PROFILE = {
  name: "Thembelihle Elizabeth Mncube",
  title: "Software Engineer | AI & Data Enthusiast",
  location: "Johannesburg, South Africa",
  email: "lihlemncube22@gmail.com",
  phone: "+27 82 501 8402",
  photo: "https://github.com/ThembelihleMncube.png",
  links: {
    github: "https://github.com/ThembelihleMncube",
    linkedin: "https://www.linkedin.com/in/thembelihle-mncube-1a317a193/",
    resume: "/resume.pdf",
  },
  tagline:
    "Software Engineer with a strong focus on building secure, scalable, and data-driven systems. Experienced in Python, C++, SQL, and AI-driven applications for telecom and healthcare innovation.",
};

const SKILLS = {
  Languages: ["Python", "C++", "JavaScript", "SQL", "HTML5", "CSS3"],
  Databases: ["Oracle SQL", "Microsoft SQL Server", "PostgreSQL"],
  Frameworks: ["TensorFlow", "PyTorch", "REST APIs", "Flask", "React"],
  Cloud: ["AWS (Cloud Basics)", "CI/CD Pipelines"],
  Tools: ["Git", "Jira", "Confluence", "UNIX"],
  Technical: ["Machine Learning", "Data Science", "Data Visualization", "Optimization", "Software Development Lifecycle (SDLC)"],
  SoftSkills: ["Effective Communication", "Teamwork", "Adaptability", "Problem-Solving", "Analytical Thinking", "Continuous Learning", "Project Management", "Attention to Detail", "Proactive Leadership", "Customer Focus"],
};

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "CSG International",
    period: "July 2022 – Current",
    bullets: [
      "Develop and customize high-performance billing and revenue-management systems using Python, C++, and Oracle SQL.",
      "Trusted subject matter expert for API integrations, consistently selected to participate in complex integration projects, successfully enhancing connectivity with mobile apps and USSD platforms.",
      "Reduced critical system downtime by 40% through proactive troubleshooting, testing, and optimizing the CI/CD pipeline.",
      "Debug complex service workflows, improving performance and stability across UNIX environments.",
      "Collaborate in Agile teams, contributing to cross-functional development and testing initiatives.",
    ],
  },
  {
    role: "Software Development Tutor",
    company: "Tshwane University of Technology",
    period: "September 2020 – June 2022",
    bullets: [
      "Delivered interactive lessons on programming concepts using Python and C++, empowering students with strong software development fundamentals.",
      "Guided hands-on projects, simplifying complex topics such as algorithms and object-oriented programming.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Breast Cancer Detection (Mammograms)",
    badges: ["Python", "CNN", "MobileNetV2", "EfficientNet"],
    description:
      "Deep learning pipeline tailored for low-resource settings in South Africa. Focus on sensitivity, AUC, and model portability.",
    link: "#",
  },
  {
    title: "WBCD Logistic Regression Study",
    badges: ["Python", "Pandas", "scikit-learn"],
    description:
      "Feature selection (ρ>0.8 threshold), cross-validation, and interpretability via coefficients. Benchmarked accuracy and AUC.",
    link: "#",
  },
];

const EDUCATION = [
  {
    program: "Master’s in Computer Systems Engineering (Part-time)",
    school: "Tshwane University of Technology",
    details: [
      "Jan 2025 – Present",
      "Research: Breast Cancer Detection from Mammogram Images Using CNNs: A Deep Learning Approach for Low-Resource Settings.",
      "Key models: MobileNetV2, EfficientNet-B0, Logistic Regression, K-Means Clustering.",
      "Supervisors: Dr D. Pholo (pholodiana@gmail.com), Dr C. Du (ChanlingDu@tut.ac.za), Prof P. Owolawi (Owolawip@tut.ac.za).",
    ],
  },
  {
    program: "Post Graduate Diploma in Computer Systems Engineering",
    school: "Tshwane University of Technology",
    details: ["Jan 2022 – Jun 2023", "Specialization: Data Science, Advanced Machine Learning."],
  },
  {
    program: "Advanced Diploma in Computer Systems Engineering",
    school: "Tshwane University of Technology",
    details: ["Jan 2020 – Nov 2021", "Focus: C++, Python Programming, and Networking."],
  },
  {
    program: "Diploma in Business Information Technology",
    school: "Tshwane University of Technology",
    details: ["Jan 2015 – Nov 2018", "Key Areas: C++, Industrial Automation, Database Design."],
  },
];

const CERTS = [
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { name: "SAS Programming 1: Essentials", org: "SAS" },
  { name: "Power BI Data Analyst Associate", org: "Microsoft" },
  { name: "Python for Data Analytics", org: "LinkedIn Learning" },
  { name: "SQL Server Security for Developers", org: "LinkedIn Learning" },
  { name: "Programming Foundations: Databases", org: "LinkedIn Learning" },
];

const ACHIEVEMENTS = [
  "1st Place Winner – GirlCode Hackathon 2023 (Johannesburg). Contributed as part of a high-performing team developing innovative software solutions under time pressure.",
  "Recognized as a trusted Subject Matter Expert for API integrations.",
 
];

// ======== UI ========
const Section = ({ id, title, subtitle, icon, children }) => (
  <section id={id} className="py-16" aria-label={title}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm mr-2 mb-2">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
    {children}
  </div>
);

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setDark(saved === 'dark');
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur border-b bg-white/60 dark:bg-slate-900/40">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#achievements" className="hover:underline">Highlights</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <button onClick={() => setDark(!dark)} className="ml-4 inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm hover:shadow">{dark ? 'Light' : 'Dark'} mode</button>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {PROFILE.title}
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
                {PROFILE.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                  <Mail size={18} /> Email me
                </a>
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                  <Github size={18} /> GitHub
                </a>
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                  <Linkedin size={18} /> LinkedIn
                </a>
                {PROFILE.links.resume && (
                  <a href={PROFILE.links.resume} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                    <FileDown size={18} /> Resume
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2 mt-4 text-slate-600 dark:text-slate-300">
                <MapPin size={16} /> {PROFILE.location}
              </div>
            </div>
            <div className="md:col-span-1">
              <img src={PROFILE.photo} alt={PROFILE.name} className="w-40 h-40 rounded-2xl object-cover border shadow mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-3 border"><Cpu /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Focus</p>
                    <p className="font-semibold">Backend & APIs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-3 border"><BrainCircuit /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">AI</p>
                    <p className="font-semibold">ML & CV</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-3 border"><Network /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Domain</p>
                    <p className="font-semibold">Telecom</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-3 border"><BarChart3 /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Data</p>
                    <p className="font-semibold">Analytics</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="rounded-2xl border shadow-sm p-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur flex items-center gap-3">
                  <div className="rounded-xl p-3 border"><Trophy /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Recent Win</p>
                    <p className="font-semibold">1st Place – GirlCode Hackathon 2023 (Johannesburg)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me" icon={<GraduationCap className="shrink-0" />} subtitle="Detail-oriented developer with experience in distributed systems (telecom) and practical AI/ML. I love turning complex requirements into reliable software with clean interfaces and measurable impact.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-semibold mb-2">What I do</h3>
            <p className="text-slate-600 dark:text-slate-300">Backend development, API integrations, data pipelines, and ML experiments with a focus on reliability and interpretability.</p>
          </div>
          <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-semibold mb-2">What I value</h3>
            <p className="text-slate-600 dark:text-slate-300">Accessibility, clarity, version control, and automated testing. I prefer pragmatic solutions over hype.</p>
          </div>
          <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-semibold mb-2">Currently</h3>
            <p className="text-slate-600 dark:text-slate-300">Exploring efficient CNNs and data-centric AI while optimizing telecom provisioning workflows.</p>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" icon={<Cpu className="shrink-0" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
              <h3 className="font-semibold mb-3">{group}</h3>
              <div>
                {items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" icon={<Briefcase className="shrink-0" />}>
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <div key={job.company + job.role} className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{job.company}</p>
                </div>
                <p className="text-sm opacity-80">{job.period}</p>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700 dark:text-slate-300">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects & Research" icon={<ExternalLink className="shrink-0" />} subtitle="A selection of hands-on work. Add GitHub repos, papers, or demos to strengthen credibility.">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.title} className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="mt-2">
                    {p.badges.map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                  </div>
                </div>
                <a href={p.link} className="rounded-lg border px-3 py-1 text-sm inline-flex items-center gap-1 hover:shadow">
                  View <ExternalLink size={14} />
                </a>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION & CERTS */}
      <Section id="education" title="Education & Certifications" icon={<GraduationCap className="shrink-0" />}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-semibold mb-2">Education</h3>
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <div key={e.program}>
                  <p className="font-medium">{e.program}</p>
                  <p className="text-slate-600 dark:text-slate-300">{e.school}</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-700 dark:text-slate-300">
                    {e.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-semibold mb-2">Certifications</h3>
            <ul className="space-y-2">
              {CERTS.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  <Award size={18} />
                  <span>
                    <span className="font-medium">{c.name}</span>{" "}
                    <span className="opacity-80">— {c.org}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Highlights" icon={<Trophy className="shrink-0" />}>
        <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" icon={<Mail className="shrink-0" />}>
        <div className="rounded-2xl border shadow-sm p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-slate-600 dark:text-slate-300">I'm open to roles in Software Development, AI/ML, and Data Engineering. Remote or on-site.</p>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                  <Mail size={18} /> {PROFILE.email}
                </a>
                <a href={PROFILE.links.linkedin} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={PROFILE.links.github} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
            <div className="text-sm opacity-80">
              <p className="flex items-center gap-2"><MapPin size={16} /> {PROFILE.location}</p>
              <p className="mt-1">Phone: {PROFILE.phone}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm opacity-70">© {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and love.</footer>
    </div>
  );
}
