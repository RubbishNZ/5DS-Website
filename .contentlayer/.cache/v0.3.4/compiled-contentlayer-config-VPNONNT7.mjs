// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "@contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Cta = defineNestedType(() => ({
  name: "Cta",
  fields: {
    label: { type: "string", required: true },
    href: { type: "string", required: true }
  }
}));
var Hero = defineNestedType(() => ({
  name: "Hero",
  fields: {
    lines: { type: "list", of: { type: "string" }, required: true },
    body: { type: "string", required: true },
    cta: { type: "nested", of: Cta, required: false }
  }
}));
var Pillar = defineNestedType(() => ({
  name: "Pillar",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true }
  }
}));
var ProofPoint = defineNestedType(() => ({
  name: "ProofPoint",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true }
  }
}));
var Service = defineNestedType(() => ({
  name: "Service",
  fields: {
    order: { type: "number", required: false },
    title: { type: "string", required: true },
    problem: { type: "string", required: true },
    approach: { type: "string", required: true },
    outcomes: { type: "list", of: { type: "string" }, required: true }
  }
}));
var InfoCard = defineNestedType(() => ({
  name: "InfoCard",
  fields: {
    label: { type: "string", required: true },
    value: { type: "string", required: true }
  }
}));
var Principle = defineNestedType(() => ({
  name: "Principle",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true }
  }
}));
var ContactMethod = defineNestedType(() => ({
  name: "ContactMethod",
  fields: {
    icon: { type: "string", required: true },
    title: { type: "string", required: true },
    value: { type: "string", required: true },
    href: { type: "string", required: false }
  }
}));
var Faq = defineNestedType(() => ({
  name: "Faq",
  fields: {
    question: { type: "string", required: true },
    answer: { type: "string", required: true }
  }
}));
var CtaSection = defineNestedType(() => ({
  name: "CtaSection",
  fields: {
    title: { type: "string", required: true },
    body: { type: "string", required: true },
    cta: { type: "nested", of: Cta, required: true }
  }
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    hero: { type: "nested", of: Hero, required: false },
    pillars: { type: "list", of: Pillar, required: false },
    proofPoints: { type: "list", of: ProofPoint, required: false },
    ctaSection: { type: "nested", of: CtaSection, required: false },
    services: { type: "list", of: Service, required: false },
    infoCards: { type: "list", of: InfoCard, required: false },
    story: { type: "list", of: { type: "string" }, required: false },
    principles: { type: "list", of: Principle, required: false },
    contactMethods: { type: "list", of: ContactMethod, required: false },
    faqs: { type: "list", of: Faq, required: false },
    calendlyUrl: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^pages\//, "")
    },
    url: {
      type: "string",
      resolve: (doc) => {
        const slug = doc._raw.flattenedPath.replace(/^pages\//, "");
        return slug === "home" ? "/" : `/${slug}`;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
  }
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VPNONNT7.mjs.map
