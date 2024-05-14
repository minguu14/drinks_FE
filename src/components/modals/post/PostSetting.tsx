import { joinCommunity } from "../../../Api/community";
import { PostType } from "../../../models/type";
import communityStore from "../../../stores/community";
import modalStore from "../../../stores/modal";

interface PostSettingType {
  id: string;
  content: string;
  setPostSettingModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostSetting({id, content, setPostSettingModal}: PostSettingType) {
    const { community, selectedCommunity, fetchCommunity, edit } = communityStore();
    const { modalControl } = modalStore();
    const deletePost = () => {
        const updatedCommunity = community.map(u => {
          if (u.id === selectedCommunity.id) {
              const updatedPosts = u.posts.filter(po => po.id !== id);
              return {
                  ...u,
                  posts: updatedPosts
              };
          }
          return u;
        });
        const [filter] = updatedCommunity.filter((community) => community.id === selectedCommunity.id);
        joinCommunity(filter).then(() => fetchCommunity());
      }
    const editPost = () => {
      modalControl('edit');
      setPostSettingModal(false);
      const [editPost] = selectedCommunity.posts.filter(ep => ep.id === id);
      edit(editPost);
    }
  return (
    <div className="flex flex-col justify-evenly border cursor-pointer border-black rounded-[10px] w-[130px] h-[135px] z-50 absolute right-[-43px] top-[25px] bg-white">
      <div className="border-b border-black p-2" onClick={editPost}>
        글 수정
      </div>
      <div className="border-b border-black p-2">
        공지 설정
      </div>
      <div className="p-2 text-red-500" onClick={deletePost}>
        글 삭제
      </div>
    </div>
  )
}
