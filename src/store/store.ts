import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommunityType } from '../models/type';

export interface CommunityStoreType {
    community: CommunityType[]
    createCommunity: (by: CommunityType) => void
}

const communityStore = create<CommunityStoreType>()(
  devtools((set) => ({
    community: [],
    createCommunity: (by: CommunityType) => set((state) => ({community: state.community.concat(by)}), false, 'createCommunity'),
  }))
);

export default communityStore;
