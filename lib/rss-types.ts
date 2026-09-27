export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
  categories?: string[];
  creator?: string;
  'content:encoded'?: string;
  enclosure?: {
    url: string;
    type: string;
  };
  mediaContent?: {
    url?: string;
    type?: string;
    medium?: string;
  };
}

export interface RSSFeed {
  title: string;
  description: string;
  link: string;
  items: RSSItem[];
  lastBuildDate?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  link: string;
  categories: string[];
  featuredImage?: string;
}
