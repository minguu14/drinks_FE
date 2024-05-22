import axios from "axios";
import { MemberType } from "../models/type";

export const updateImg = async (updateUser:MemberType, img: string | undefined) => {
    const rqs = await axios.put(`http://localhost:3000/users/${updateUser.id}`,{
        ...updateUser,
        profile_picture: img,
    })
    return rqs;
}