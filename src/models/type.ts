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
    schedule: ScheduleType[];
    chatRoom: ChatRoomType[];
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

export interface UserProfile {
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

export interface CommentType {
    id: string;
    commenterThumbnail: string;
    commenter: string;
    comment: string;
}

export interface LikeListType {
    id: string;
    userName: string;
}

export interface PostType {
    id: string;
    content: string;
    comments: CommentType[];
    likeLists: LikeListType[];
    author: string;
    authorImg: string;
}


export interface VoteUserType {
    id: string;
    userImg: string | undefined;
    userName: string;
}

export interface ScheduleType {
    id: string;
    scheduleTitle: string;
    scheduleDescription: string;
    scheduleLocation: string;
    scheduleDate: string;
    scheduleTime: string;
    users: VoteUserType[];
}

export interface ChatRoomType {
    id: string;
    roomName: string;
    thumbnailUrl: string;
    initialMembers: string[];
}
