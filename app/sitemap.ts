import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getCmsContent } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await getCmsContent();

  const routes = [
    "",
    "/about",
    "/services",
    "/fleet",
    "/quote",
    "/house-shifting",
    "/loading-services",
    "/transport-company-pakistan",
    "/house-shifting-services-pakistan",
    "/loading-services-pakistan",
    "/cargo-transport-lahore-karachi",
    "/contact",
    "/blog",

    // Cities
    "/cities",
    "/lahore-goods-transport",
    "/karachi-goods-transport",
    "/islamabad-goods-transport",
    "/rawalpindi-goods-transport",
    "/faisalabad-goods-transport",
    "/multan-goods-transport",
    "/peshawar-goods-transport",
    "/gujranwala-goods-transport",

    // Routes
    "/routes",
    "/karachi-to-lahore-goods-transport",
    "/lahore-to-karachi-goods-transport",
    "/lahore-to-islamabad-goods-transport",
    "/islamabad-to-karachi-goods-transport",
    "/multan-to-lahore-goods-transport",
    "/peshawar-to-karachi-goods-transport",
    "/rawalpindi-to-lahore-goods-transport",
    "/faisalabad-to-karachi-goods-transport",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const posts = cms.blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}