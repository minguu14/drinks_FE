export interface MemberType {
    id: string;
    userId?: string;
    password?: string;
    email?: string;
    name: string;
    birthdate?: string;
    carrier?: string;
    phone_number?: string;
    verification_code?: string;
    profile_picture?: string;
    gender?: string;
    introduction?: string;
    mbti?: string;
}

export interface CommunityType {
    id: string;
    thumbnail_url: string;
    description: string;
    tag1: string;
    tag2: string;
    area: string;
    communityName: string;
    member: UserType[];
    posts: PostType[];
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
    image?: string;
    nickname: string;
}

export interface UserType {
    id: string;
    profile: UserProfile;
    userId?: string;
    authority: string;
    state: boolean;
}

export interface PostType {
    id: string;
    content: string;
}

export interface ChatRoomType {
    id: string;
    roomName: string;
    thumbnailUrl: string;
    initialMembers: string;
}
