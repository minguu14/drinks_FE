export interface CommunityType {
    id: string;
    thumbnail_url: string;
    description: string;
    tag1: string;
    tag2: string;
    area: string;
    communityName: string;
    member: number;
    last_chat_time: string;
    isPublic: string;
    isPopular: boolean;
    isNew: boolean;
}

export interface FormValue {
    title: string;
    description: string;
    area: string;
}