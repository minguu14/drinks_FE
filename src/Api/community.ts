import axios from "axios";
import { CommunityType, MemberType, PostType, UserType } from "../models/type";

export const getCommunity = async () => {
    const res = await axios<CommunityType[]>("http://localhost:3000/community");
    return res.data;
}

export const createCommunity = async (
    id: string,
    thumbnail_url: string,
    description: string,
    tag1: string,
    tag2: string,
    area: string,
    communityName: string,
    member: UserType[],
    posts: PostType[],
    schedule: PostType[],
    last_chat_time: string,
    isPublic: string,
    isPopular: boolean,
    isNew: boolean,
) => {
    const rqs = await axios.post("http://localhost:3000/community", {
      id,
      thumbnail_url,
      description,
      tag1,
      tag2,
      area,
      communityName,
      member,
      posts,
      schedule,
      last_chat_time,
      isPublic,
      isPopular,
      isNew,
    })
    return rqs;
}

export const joinCommunity = async (updateCommunity:CommunityType) => {
    const rqs = await axios.put(`http://localhost:3000/community/${updateCommunity.id}`,{
        ...updateCommunity,
    })
    return rqs;
}

export const deleteCommunity = async (communityId:string) => {
    const rqs = await axios.delete(`http://localhost:3000/community/${communityId}`);
    return rqs;
}

export const getUser = async () => {
    const res = await axios<MemberType[]>("http://localhost:3000/users");
    return res.data;
}