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
      img: "",
      description: "",
      tag1: "",
      tag2: "",
      area: "",
      communityName: "",
      member: 1,
      recentChat: "",
      isPublic: "",
      isPopular: false,
      isNew: true,
    },
    createCommunity: (by: CommunityType) => set((state) => ({community: state.community.concat(by)}), false, 'createCommunity'),
    selectCommunity: (by: CommunityType) => set(({selectedCommunity: by}))
  }))
);

export default communityStore;
