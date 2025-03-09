export interface Content {
    ID: number;
    title: string;
    description: string;
    image: string;
    status: string;
    tags: string[];
    created_at: string;
    author: string;
    created_by_name: string;
    created_by_id: number;
    category_id: number;
}

export interface ContentRequest {
    title: string;
    description: string;
    excerpt: string;
    image: string;
    status: string;
    tags: string;
    created_by_id: number;
    category_id: number;
}