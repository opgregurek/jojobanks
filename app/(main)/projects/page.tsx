import { redirect } from "next/navigation";
import { FIRST_PROJECT_SLUG, getProjectHref } from "./project-routes";

export default function ProjectsIndexPage() {
  redirect(getProjectHref(FIRST_PROJECT_SLUG));
}