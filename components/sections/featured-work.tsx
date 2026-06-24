import { projects } from "@/content/projects";
import { Section } from "@/components/ui-bits/section";
import { ProjectCard } from "@/components/project-card";

export function FeaturedWork() {
  return (
    <Section id="work" number="02" title="Featured Work">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
