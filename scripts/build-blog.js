import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

const rootDirectory = path.join(__dirname, "..");

const postsDirectory = path.join(
  rootDirectory,
  "blog",
  "posts"
);

const publicBlogDirectory = path.join(
  rootDirectory,
  "public",
  "blog"
);

const articlesDirectory = path.join(
  publicBlogDirectory,
  "articles"
);

const templatesDirectory = path.join(
  rootDirectory,
  "blog",
  "templates"
);

const articleTemplatePath = path.join(
  templatesDirectory,
  "article-template.html"
);

const indexTemplatePath = path.join(
  templatesDirectory,
  "index-template.html"
);

const blogIndexPath = path.join(
  publicBlogDirectory,
  "index.html"
);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function replaceAll(template, replacements) {
  let result = template;

  for (const [key, value] of Object.entries(replacements)) {
    result = result.replaceAll(`{{${key}}}`, value);
  }

  return result;
}

function formatDate(dateValue) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function calculateReadTime(content) {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function createSlug(filename, customSlug) {
  if (customSlug) {
    return customSlug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  return path
    .basename(filename, ".md")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, {
    recursive: true,
  });
}

if (!fs.existsSync(articlesDirectory)) {
  fs.mkdirSync(articlesDirectory, {
    recursive: true,
  });
}

if (!fs.existsSync(articleTemplatePath)) {
  throw new Error(
    "Missing public/blog/templates/article-template.html"
  );
}

if (!fs.existsSync(indexTemplatePath)) {
  throw new Error(
    "Missing public/blog/templates/index-template.html"
  );
}

const articleTemplate = fs.readFileSync(
  articleTemplatePath,
  "utf8"
);

const indexTemplate = fs.readFileSync(
  indexTemplatePath,
  "utf8"
);

const postFiles = fs
  .readdirSync(postsDirectory)
  .filter((filename) => filename.endsWith(".md"));

const articles = postFiles.map((filename) => {
  const postPath = path.join(
    postsDirectory,
    filename
  );

  const source = fs.readFileSync(postPath, "utf8");
  const parsed = matter(source);

  const title = parsed.data.title;
  const description = parsed.data.description;
  const category = parsed.data.category || "Business AI";
  const date = parsed.data.date;
  const image = parsed.data.image;
  const slug = createSlug(
    filename,
    parsed.data.slug
  );

  if (!title) {
    throw new Error(
      `${filename}: missing title`
    );
  }

  if (!description) {
    throw new Error(
      `${filename}: missing description`
    );
  }

  if (!date) {
    throw new Error(
      `${filename}: missing date`
    );
  }

  if (!image) {
    throw new Error(
      `${filename}: missing image`
    );
  }

  const readTime =
    parsed.data.readTime ||
    calculateReadTime(parsed.content);

  const htmlContent = markdown.render(
    parsed.content
  );

  const articleHtml = replaceAll(
    articleTemplate,
    {
      TITLE: escapeHtml(title),
      DESCRIPTION: escapeHtml(description),
      CATEGORY: escapeHtml(category),
      DATE: escapeHtml(formatDate(date)),
      READ_TIME: escapeHtml(readTime),
      IMAGE: escapeHtml(image),
      CONTENT: htmlContent,
    }
  );

  const outputPath = path.join(
    articlesDirectory,
    `${slug}.html`
  );

  fs.writeFileSync(
    outputPath,
    articleHtml,
    "utf8"
  );

  return {
    title,
    description,
    category,
    date,
    image,
    slug,
    readTime,
  };
});

articles.sort(
  (firstArticle, secondArticle) =>
    new Date(secondArticle.date) -
    new Date(firstArticle.date)
);

const articleCards = articles
  .map((article) => {
    return `
      <article class="article-card">
        <a href="public/blog/articles/${article.slug}.html">
          <img
            src="${escapeHtml(article.image)}"
            alt="${escapeHtml(article.title)}"
          >

          <div class="article-card-content">
            <p class="article-category">
              ${escapeHtml(article.category)}
            </p>

            <h2>${escapeHtml(article.title)}</h2>

            <p>
              ${escapeHtml(article.description)}
            </p>

            <div class="article-card-information">
              <span>${escapeHtml(formatDate(article.date))}</span>
              <span>${escapeHtml(article.readTime)}</span>
            </div>
          </div>
        </a>
      </article>
    `;
  })
  .join("\n");

const finalIndexHtml = replaceAll(
  indexTemplate,
  {
    ARTICLES:
      articleCards ||
      "<p>No articles published yet.</p>",
  }
);

fs.writeFileSync(
  blogIndexPath,
  finalIndexHtml,
  "utf8"
);

console.log(
  `Blog generated successfully: ${articles.length} article(s).`
);