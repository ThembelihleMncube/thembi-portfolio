import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Briefcase,
  BrainCircuit,
  Cpu,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Trophy,
  X,
} from "lucide-react";

const PROFILE = {
  name: "Thembelihle Elizabeth Mncube",
  title: "Software Engineer | Data Analytics & Engineering",
  location: "Johannesburg, South Africa",
  email: "lihlemncube22@gmail.com",
  phone: "+27 82 501 8402",
  photo: "https://github.com/ThembelihleMncube.png",
  links: {
    github: "https://github.com/ThembelihleMncube",
    linkedin: "https://www.linkedin.com/in/thembelihle-mncube-1a317a193/",
  },
  summary:
    "Software Engineer with 4+ years of experience working with Oracle SQL, Python and business-critical systems. I use data analysis, ETL, data quality and predictive modelling in portfolio and research projects, and bring careful testing, troubleshooting and governance practices from enterprise software.",
};

const SKILLS = [
  {
    group: "Data Analysis & Statistics",
    items: ["Data extraction", "Data cleaning", "Exploratory analysis", "Descriptive statistics", "Trend analysis", "Predictive modelling", "Model evaluation"],
  },
  {
    group: "SQL & Databases",
    items: ["Oracle SQL", "Microsoft SQL Server", "PostgreSQL", "SQLite", "Joins", "CTEs", "Window functions", "Database design and testing"],
  },
  {
    group: "Programming & Statistics Tools",
    items: ["Python", "pandas", "scikit-learn", "SAS", "C++", "JavaScript"],
  },
  {
    group: "Reporting & Visualisation",
    items: ["Power BI", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Data visualisation"],
  },
  {
    group: "Data Engineering",
    items: ["ETL", "Data loading", "Star schema", "Dimensional modelling", "Data quality rules", "Audit logging"],
  },
  {
    group: "Engineering & Governance",
    items: ["Git", "GitHub Actions", "pytest", "Agile", "Jira", "Confluence", "UNIX", "Access control", "Secure API integration"],
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "CSG International",
    period: "July 2022 – Present",
    bullets: [
      "Develop and maintain backend components using Oracle SQL, Python and C++ to retrieve and process data within enterprise systems.",
      "Troubleshoot production issues in UNIX environments, trace symptoms to root causes, and document findings and fixes.",
      "Implement exception handling and logging so system behaviour is measurable and failures can be traced.",
      "Build and maintain REST-based integrations and enterprise service interfaces that exchange data between systems.",
      "Apply security and compliance requirements to integrations, including authentication and SSL/TLS.",
      "Test releases and collaborate with development and testing teams in an Agile SDLC using Jira, Confluence and Git.",
    ],
  },
  {
    role: "Software Development Tutor",
    company: "Tshwane University of Technology",
    period: "September 2020 – June 2022",
    bullets: [
      "Taught Python and C++ programming concepts and guided students through practical projects.",
      "Explained algorithms and object-oriented programming clearly to learners with different levels of experience.",
    ],
  },
];

const PROJECTS = [
  {
    title: "BigMart Sales Data Pipeline and Analysis",
    badges: ["Python", "SQL", "pandas", "ETL", "Data Quality", "Star Schema"],
    description:
      "Cleans retail sales data using repeatable rules, checks data quality, loads a star-schema warehouse, and analyses sales trends with SQL. Includes an audit log, automated tests and a predictive sales model.",
    link: "https://github.com/ThembelihleMncube/bigmart-sales-data-pipeline",
    status: "View project",
  },
  {
    title: "Master's Research: Breast Cancer Detection",
    badges: ["Python", "CNN", "MobileNetV2", "EfficientNet-B0"],
    description:
      "Research in progress at Tshwane University of Technology on mammogram classification for low-resource healthcare settings, evaluated with statistical performance metrics.",
    link: null,
    status: "Research in progress",
  },
  {
    title: "Wisconsin Breast Cancer Diagnostic Analysis",
    badges: ["Python", "pandas", "scikit-learn", "Logistic Regression"],
    description:
      "Analysed the Wisconsin Breast Cancer Diagnostic dataset using logistic regression to study which features are most predictive of diagnosis.",
    link: null,
    status: "Research project",
  },
];

const EDUCATION = [
  {
    program: "Master's in Computer Systems Engineering",
    level: "Part-time, in progress",
    school: "Tshwane University of Technology",
    period: "2025 – Present",
  },
  {
    program: "Postgraduate Diploma in Computer Systems Engineering",
    level: "NQF Level 8",
    school: "Tshwane University of Technology",
    period: "2022 – 2023",
  },
  {
    program: "Advanced Diploma in Computer Systems Engineering",
    level: "NQF Level 7",
    school: "Tshwane University of Technology",
    period: "2020 – 2021",
  },
  {
    program: "National Diploma: Information Technology",
    level: "Intelligent Industrial Systems",
    school: "Tshwane University of Technology",
    period: "2015 – 2019",
  },
];

const CERTIFICATIONS = [
  "SAS Programming 1: Essentials",
  "Microsoft Power BI Data Analyst Associate",
  "Python for Data Analytics",
  "AWS Certified Machine Learning Engineer – Associate",
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Cloud Practitioner",
  "SQL Server Security for Developers",
  "Programming Foundations: Databases",
];

const NAV_LINKS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Highlights", "highlights"],
  ["Contact", "contact"],
];

function Section({ id, title, subtitle, icon, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-16" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center gap-3">
          {icon}
          <h2 id={`${id}-heading`} className="text-2xl font-bold md:text-3xl">{title}</h2>
        </div>
        {subtitle && <p className="mb-8 max-w-3xl text-slate-600 dark:text-slate-300">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children }) {
  return <span className="mb-2 mr-2 inline-flex rounded-full border border-slate-300 px-3 py-1 text-sm dark:border-slate-600">{children}</span>;
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setDark(saved === "dark");
    } catch {
      // Keep the default theme if browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      window.localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // The theme still works for the current page when storage is unavailable.
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900" href="#main">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3" aria-label="Main navigation">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <div className="hidden items-center gap-5 text-sm md:flex">
            {NAV_LINKS.map(([label, id]) => <a key={id} href={`#${id}`} className="hover:underline">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:shadow dark:border-slate-600"
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            >
              {dark ? "Light mode" : "Dark mode"}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 md:hidden dark:border-slate-600"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {menuOpen && (
            <div id="mobile-navigation" className="grid w-full gap-1 border-t border-slate-200 pt-3 md:hidden dark:border-slate-700">
              {NAV_LINKS.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main id="main">
        <section id="home" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-10 md:grid-cols-3"
            >
              <div className="md:col-span-2">
                <p className="mb-3 font-medium text-sky-700 dark:text-sky-300">Portfolio · Johannesburg, South Africa</p>
                <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{PROFILE.title}</h1>
                <p className="mt-5 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">{PROFILE.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("CV request")}`} className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-800">
                    <FileDown size={18} /> Request CV by email
                  </a>
                  <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm hover:shadow dark:border-slate-600">
                    <Github size={18} /> GitHub
                  </a>
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm hover:shadow dark:border-slate-600">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><MapPin size={16} /> {PROFILE.location}</p>
              </div>
              <div className="mx-auto w-full max-w-xs">
                <img src={PROFILE.photo} alt="Thembelihle Elizabeth Mncube" className="mx-auto mb-5 h-40 w-40 rounded-2xl border border-slate-200 object-cover shadow dark:border-slate-700" />
                <Card className="grid grid-cols-2 gap-4 p-4 text-sm">
                  <div className="flex items-center gap-2"><Cpu size={18} /><span>Software</span></div>
                  <div className="flex items-center gap-2"><BarChart3 size={18} /><span>Analytics</span></div>
                  <div className="flex items-center gap-2"><Network size={18} /><span>Data pipelines</span></div>
                  <div className="flex items-center gap-2"><BrainCircuit size={18} /><span>Applied AI</span></div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" title="About Me" icon={<GraduationCap className="shrink-0" />} subtitle="I combine enterprise software experience with practical data analytics and engineering projects. I value clear communication, reliable data and careful handling of sensitive information.">
          <div className="grid gap-6 md:grid-cols-3">
            <Card><h3 className="mb-2 font-semibold">What I do</h3><p className="text-slate-600 dark:text-slate-300">Develop and support backend systems, build data pipelines, analyse data, and test software changes.</p></Card>
            <Card><h3 className="mb-2 font-semibold">How I work</h3><p className="text-slate-600 dark:text-slate-300">Use source control, documented checks, logging and collaboration to make work traceable and dependable.</p></Card>
            <Card><h3 className="mb-2 font-semibold">Currently</h3><p className="text-slate-600 dark:text-slate-300">Completing a Master's in Computer Systems Engineering while developing research on mammogram image analysis.</p></Card>
          </div>
        </Section>

        <Section id="skills" title="Skills" icon={<Cpu className="shrink-0" />}>
          <div className="grid gap-6 md:grid-cols-2">
            {SKILLS.map(({ group, items }) => <Card key={group}><h3 className="mb-3 font-semibold">{group}</h3><div>{items.map((item) => <Badge key={item}>{item}</Badge>)}</div></Card>)}
          </div>
        </Section>

        <Section id="experience" title="Experience" icon={<Briefcase className="shrink-0" />}>
          <div className="space-y-6">
            {EXPERIENCE.map((job) => (
              <Card key={job.company + job.role}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div><h3 className="font-semibold">{job.role}</h3><p className="text-slate-600 dark:text-slate-300">{job.company}</p></div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{job.period}</p>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects & Research" icon={<ExternalLink className="shrink-0" />} subtitle="Selected analytics, data engineering and research work.">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1 text-sm hover:shadow dark:border-slate-600">
                      {project.status}<ExternalLink size={14} />
                    </a>
                  ) : <span className="rounded-lg border border-slate-300 px-3 py-1 text-sm dark:border-slate-600">{project.status}</span>}
                </div>
                <div className="mt-3">{project.badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}</div>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education & Certifications" icon={<GraduationCap className="shrink-0" />}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 font-semibold">Education</h3>
              <div className="space-y-4">
                {EDUCATION.map((item) => (
                  <div key={item.program}>
                    <h4 className="font-medium">{item.program}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{item.level} · {item.school}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="mb-4 font-semibold">Certifications</h3>
              <ul className="space-y-2">{CERTIFICATIONS.map((cert) => <li key={cert} className="flex gap-3"><Award size={18} className="mt-0.5 shrink-0" /><span>{cert}</span></li>)}</ul>
            </Card>
          </div>
        </Section>

        <Section id="highlights" title="Highlights" icon={<Trophy className="shrink-0" />}>
          <Card><ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300"><li>1st Place, GirlCode Hackathon 2023 (Johannesburg).</li><li>Built a tested ETL pipeline and analytics warehouse as a portfolio project.</li></ul></Card>
        </Section>

        <Section id="contact" title="Contact" icon={<Mail className="shrink-0" />}>
          <Card>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-300">Open to opportunities in data analytics, data engineering and software development.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:shadow dark:border-slate-600"><Mail size={18} /> Email</a>
                  <a href={`tel:${PROFILE.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:shadow dark:border-slate-600">{PROFILE.phone}</a>
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:shadow dark:border-slate-600"><Linkedin size={18} /> LinkedIn</a>
                </div>
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><MapPin size={16} /> {PROFILE.location}</p>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
