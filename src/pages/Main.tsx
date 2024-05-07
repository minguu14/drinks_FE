
import Recipe from "../components/recipe/Recipe";
import Announcement from "../components/announcement/Announcement";
import Nav from "../components/nav/Nav";
import PopularCommunity from "../components/community/PopularCommunity";
import NewCommunity from "../components/community/NewCommunity";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { MemberType } from "../models/type";
import userStore from "../stores/user";
import communityStore from "../stores/community";

export default function Main() {
  const { fetchCommunity } = communityStore();
  const { loginCheck, getUsers } = userStore();
  const [Users, setUsers] = useState<MemberType[]>([
    {
      id: "1",
      userId: 'aodrn123',
      password: '123123',
      email: 'aodrn123@gmail.com',
      name: '맹구',
      birthdate: '19990909',
      carrier: 'kt',
      phone_number: '01000000000',
      verification_code: '123456',
      profile_picture: 'img',
      gender: '남성',
      introduction: '맹구입니다.',
      mbti: '???',
    },
    {
      id: "2",
      userId: 'Wkdrn123',
      password: '123123',
      email: 'Wkdrn123@gmail.com',
      name: '짱구',
      birthdate: '19990909',
      carrier: 'kt',
      phone_number: '01000000000',
      verification_code: '123456',
      profile_picture: 'img',
      gender: '남성',
      introduction: '짱구입니다.',
      mbti: '???',
    },
    {
      id: "3",
      userId: 'cjftn123',
      password: '123123',
      email: 'cjftn123@gmail.com',
      name: '철수',
      birthdate: '19990909',
      carrier: 'kt',
      phone_number: '01000000000',
      verification_code: '123456',
      profile_picture: 'img',
      gender: '남성',
      introduction: '철수입니다.',
      mbti: '???',
    },
    {
      id: "4",
      userId: 'gnsdl123',
      password: '123123',
      email: 'gnsdl123@gmail.com',
      name: '훈이',
      birthdate: '19990909',
      carrier: 'kt',
      phone_number: '01000000000',
      verification_code: '123456',
      profile_picture: 'img',
      gender: '남성',
      introduction: '훈이입니다.',
      mbti: '???',
    },
    {
      id: "5",
      userId: 'dbfl123',
      password: '123123',
      email: 'dbfl123@gmail.com',
      name: '유리',
      birthdate: '19990909',
      carrier: 'kt',
      phone_number: '01000000000',
      verification_code: '123456',
      profile_picture: 'img',
      gender: '여성',
      introduction: '유리입니다.',
      mbti: '???',
    },    
])

const login = (email: string) => {
  const loginUser = Users.find(user => user.email === email);
  loginCheck(loginUser);
  console.log(loginUser);
}

useEffect(() => {
  fetchCommunity();
  getUsers(Users);
  login('dbfl123@gmail.com');
},[])

  return (
    <div className="App">
      {/* 네브 */}
      <Nav/>
      {/* 컨텐츠 */}
      <div className="flex justify-center mt-10">
        <div className='w-[1200px] flex flex-wrap justify-between'>
          {/* 인기모임 */}
          <PopularCommunity/>
          {/* 레시피 */}
          <Recipe/>
          {/* 새싹모임 */}
          <NewCommunity
          />
          {/* 공지사항 */}
          <Announcement/>
        </div>
      </div>
    </div>
  );
}
