import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySectionView } from "@/components/case-study/case-study-section";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();
  return (
    <main className="font-sans">
      <CaseStudyHeader project={project} />
      {project.sections.map((s) => (
        <CaseStudySectionView key={s.id} section={s} />
      ))}
    </main>
  );
}
