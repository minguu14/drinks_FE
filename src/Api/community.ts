import axios from "axios";
import { CommunityType } from "../models/type";

export const getCommunity = async () => {
    const res = await axios<CommunityType[]>("https://b3c88658-6fee-4c90-bb40-6921b693700b.mock.pstmn.io/communitylist");
    return res.data;
}