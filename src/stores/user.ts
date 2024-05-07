import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MemberType } from '../models/type';

export interface UserStoreType {
    users: MemberType[]
    loginUser: MemberType
    getUsers: (by: MemberType[]) => void
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
    getUsers: (by: MemberType[]) => set(({users: by}), false, 'getUsers'),
    loginCheck: (by: MemberType | undefined) => set(({loginUser: by}), false, 'loginCheck'),
  }))
);



export default userStore;

