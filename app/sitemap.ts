import type { MetadataRoute } from "next";
import { PEOPLE } from "@/lib/people";
import { COURSES } from "@/lib/courses";
import { FACTSHEETS, RESOURCE_CATEGORIES } from "@/lib/factsheets";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/our-people",
    "/training-and-education",
    "/retreat",
    "/resource",
    "/contact-us",
    "/podcasts",
    "/workshop-resources",
    "/organisational-solutions",
    "/organisational-solutions/bootcamp-for-the-brain",
    "/organisational-solutions/bootcamp-for-the-brain-heart-and-mind",
    "/organisational-solutions/respect_seminar",
    "/organisational-solutions/assertiveness-at-work",
    "/organisational-solutions/resources",
    "/disclaimer",
    "/gratitude",
    "/eat-mindfully",
    "/working-from-home-in-the-age-of-cornoavirus",
    "/pause-to-breathe-managing-stress-anxiety-depression-and-trauma",
    "/pause-reflect-reconnect-preventing-burnout-in-clinical-practice-working-with-emotion-and-the-body",
  ];

  const dynamicRoutes = [
    ...PEOPLE.map((p) => `/people/${p.slug}`),
    ...COURSES.map((c) => `/training_course/${c.slug}`),
    ...FACTSHEETS.map((f) => `/resource/${f.slug}`),
    ...RESOURCE_CATEGORIES.map((c) => `/resources/${c.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
