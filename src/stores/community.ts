import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommunityType, MemberType, PostType, UserType } from '../models/type';
import { getCommunity, joinCommunity } from '../Api/community';

export interface CommunityStoreType {
    community: CommunityType[]
    selectedCommunity: CommunityType
    editPost: PostType
    fetchCommunity: () => void
    selectCommunity: (by: CommunityType) => void
    edit: (by: PostType) => void
}

const communityStore = create<CommunityStoreType>()(
  devtools((set) => ({
    community: [],
    selectedCommunity: {
      id: "",
      thumbnail_url: "",
      description: "",
      tag1: "",
      tag2: "",
      area: "",
      communityName: "",
      member: [],
      posts: [],
      schedule: [],
      last_chat_time: "",
      isPublic: "",
      isPopular: false,
      isNew: true,
    },
    editPost: {
      id: "",
      content: "",
      comments: [],
    },
    fetchCommunity: async () => {
      const res = await getCommunity();
      set({community: res});
    },
    selectCommunity: (by: CommunityType) => set(({selectedCommunity: by}), false, 'selectCommunity'),
    edit: (by: PostType) => set(({editPost: by}), false, 'editPost'),
  }))
);



export default communityStore;

