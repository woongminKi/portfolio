import { jetRag } from "./jet-rag";
import { directorsNote } from "./directors-note";
import type { Project } from "../types";

export const projects: Project[] = [jetRag, directorsNote];
export const getProject = (slug: string): Project | undefined => projects.find((p) => p.slug === slug);
