export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "list"; items: string[] };

export interface ArticleRecord {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  accent_color: string;
  author: string;
  read_time: string;
  body: BodyBlock[];
  cover_image_url: string | null;
  is_featured: boolean;
  is_hidden: boolean;
  meta_title: string;
  meta_description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
