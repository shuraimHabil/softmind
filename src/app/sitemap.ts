import { MetadataRoute } from "next";
import { careServices } from "@/lib/careServices";
import { conditions } from "@/lib/conditions";
import { fetchClinicians } from "@/lib/clinicians";
import { fetchCentres } from "@/lib/centres";
import { fetchPublishedArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.softmindindia.com";
  const now = new Date();
  const [centresList, cliniciansList, articlesList] = await Promise.all([
    fetchCentres(),
    fetchClinicians(),
    fetchPublishedArticles(),
  ]);

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/our-care`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/centres`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clinicians`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge-centre`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/clinical-standards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/professional-learning`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/professional-learning/internships`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/professional-learning/workshops`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic care routes
  const careRoutes: MetadataRoute.Sitemap = careServices.map((service) => ({
    url: `${baseUrl}${service.url}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic centre routes (from API)
  const centreRoutes: MetadataRoute.Sitemap = centresList.map((centre) => ({
    url: `${baseUrl}/centres/${centre.slug || centre.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Dynamic clinician routes (from API)
  const clinicianRoutes: MetadataRoute.Sitemap = cliniciansList.map((c) => ({
    url: `${baseUrl}/clinicians/${c.slug || c.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic condition routes
  const conditionRoutes: MetadataRoute.Sitemap = conditions.map((cond) => ({
    url: `${baseUrl}${cond.url}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic article routes (from CMS API)
  const articleRoutes: MetadataRoute.Sitemap = articlesList.map((art) => ({
    url: `${baseUrl}/articles/${art.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...careRoutes,
    ...centreRoutes,
    ...clinicianRoutes,
    ...conditionRoutes,
    ...articleRoutes,
  ];
}
