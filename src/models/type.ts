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

interface UserProfile {
    image: string;
    nickname: string;
}

export interface UserType {
    id: string;
    profile: UserProfile;
    userId: string;
    authority: string;
    state: boolean;
}

export interface ChatRoomType {
    id: string;
    roomName: string;
    thumbnailUrl: string;
    initialMembers: string;
}
