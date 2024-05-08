import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MemberType } from '../models/type';
import { getUser } from '../Api/community';

export interface UserStoreType {
    users: MemberType[]
    loginUser: MemberType
    getUsers: () => void;
    loginCheck : (by: MemberType | undefined) => void
}

const userStore = create<UserStoreType>()(
  devtools((set) => ({
    users: [],
    loginUser: {
      id: '',
      userId: '',
      password: '',
      email: '',
      name: '',
      birthdate: '',
      carrier: '',
      phone_number: '',
      verification_code: '',
      profile_picture: '',
      gender: '',
      introduction: '',
      mbti: '',
    },
    getUsers: async () => {
      const res = await getUser();
      set({users: res})
    },
    loginCheck: (by: MemberType | undefined) => set(({loginUser: by}), false, 'loginCheck'),
  }))
);



export default userStore;

