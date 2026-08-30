import { useState } from "react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import CountUpNumber from "../components/CountUpNumber";
import { projects, type ProjectCategory } from "../data/projects";

const filters: (ProjectCategory | "All")[] = ["All", "Contracting", "Trading", "Maintenance"];

const projectStats = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Sectors Served" },
  { value: 70, suffix: "%", label: "Repeat Clients" },
];

const experienceHighlights = [
  {
    title: "Operational Reliability",
    text: "Focused on dependable maintenance delivery for critical infrastructure and high-standards client environments.",
  },
  {
    title: "Fast Response Execution",
    text: "Responsive teams supporting planned intervention, service continuity, and efficient troubleshooting.",
  },
  {
    title: "Quality-Driven Delivery",
    text: "Work completed with strict attention to safety, performance, and long-term asset integrity.",
  },
  {
    title: "Trusted Partnership",
    text: "Built on repeat collaboration and a strong reputation across Qatar’s infrastructure and utilities sectors.",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Work That Speaks For Itself"
        subtitle="A selection of projects delivered across Qatar."
        image="/images/projects_page_hero_section.png"
      />

      <Section bg="cloud" className="border-b border-mist">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="block w-8 h-[2px] bg-red" />
                <span className="uppercase tracking-[0.08em] text-red text-xs font-semibold">Experience</span>
              </div>
              <h2 className="text-ink mb-4">Delivering reliable maintenance across vital infrastructure</h2>
              <p className="text-steel max-w-xl leading-relaxed">
                From rapid-response maintenance to long-term operational support, our team delivers dependable service
                for infrastructure partners that require consistent quality, visibility, and performance.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {experienceHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="h-full rounded border border-mist bg-white p-5 shadow-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-tint text-red font-semibold">
                    0{index + 1}
                  </div>
                  <h3 className="text-ink mb-2 text-lg">{item.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="Recent Projects" align="center" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded px-5 py-2 uppercase text-xs font-semibold tracking-[0.08em] border transition-colors ${
                    isActive
                      ? "bg-red text-white border-red"
                      : "bg-white text-graphite border-mist hover:border-graphite"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 6) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="cloud">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projectStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center">
              <CountUpNumber
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl md:text-5xl font-semibold text-graphite"
              />
              <div className="text-steel uppercase text-xs font-medium tracking-wide mt-2">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Ready to start your project?</h2>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
