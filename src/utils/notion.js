// src/utils/notion.js
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.REACT_APP_NOTION_KEY });

export const getBlogPosts = async () => {
  try {
    console.log("Attempting to fetch blog posts...");
    const response = await notion.databases.query({
      database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    console.log(`Successfully fetched ${response.results.length} blog posts`);

    return response.results.map((page) => {
      return {
        id: page.id,
        title: page.properties.Title.title[0].plain_text,
        date: page.properties.Date.date.start,
        snippet: page.properties.Snippet.rich_text[0].plain_text,
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};
// export const getBlogPostContent = async (pageId) => {
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   const blocks = await notion.blocks.children.list({ block_id: pageId });

//   // You'll need to parse the blocks to get the content
//   // This is a simple example that only handles paragraph blocks
//   const content = blocks.results
//     .filter(block => block.type === 'paragraph')
//     .map(block => block.paragraph.rich_text[0]?.plain_text || '')
//     .join('\n\n');

//   return {
//     title: response.properties.Title.title[0].plain_text,
//     content: content,
//   };
// };
