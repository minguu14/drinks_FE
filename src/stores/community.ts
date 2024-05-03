import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommunityType } from '../models/type';

export interface CommunityStoreType {
    community: CommunityType[]
    selectedCommunity: CommunityType
    createCommunity: (by: CommunityType) => void
    selectCommunity: (by: CommunityType) => void
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
      member: 1,
      last_chat_time: "",
      isPublic: "",
      isPopular: false,
      isNew: true,
    },
    createCommunity: (by: CommunityType) => set((state) => ({community: state.community.concat(by)}), false, 'createCommunity'),
    selectCommunity: (by: CommunityType) => set(({selectedCommunity: by}), false, 'selectCommunity'),
  }))
);



export default communityStore;

