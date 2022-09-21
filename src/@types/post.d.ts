import { User } from "./user";

export type PostType = {
    title: string;
    body: string;
    comments: number;
    created_at: string;
    html_url: string;
    id: number;
    user: User;
    number: number;
}