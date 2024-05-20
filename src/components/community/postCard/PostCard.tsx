import postSetting from "../../../img/postSetting.png";
import plus from "../../../img/plus.png";
import heart from "../../../img/heart.png";
import comment from "../../../img/comment.png";
import { CommentType, CommunityType, MemberType, PostType } from "../../../models/type";
import PostSetting from "../../modals/post/PostSetting";
import { ChangeEvent, useState } from "react";
import Comments from "./Comments/Comments";
import communityStore from "../../../stores/community";
import uuid from "react-uuid";
import { joinCommunity } from "../../../Api/community";
import modalStore from "../../../stores/modal";

interface PostCardType {
    id: string;
    content: string;
    comments: CommentType[];
    author: string;
    authorImg: string;
    loginUser: MemberType;
}

export default function PostCard({id, content, comments, loginUser, author, authorImg}: PostCardType) {
    const { community, selectedCommunity, fetchCommunity } = communityStore();
    const [postSettingModal, setPostSettingModal] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [value, setValue] = useState('');
    const openPostSettingModal = () => {
       setPostSettingModal(!postSettingModal);
    }
    
    const postComment = () => {
        const [updateCommunity] = community.map((u) => {
            if(u.id === selectedCommunity.id){
              const editPosts = u.posts.map(po => {
                if(po.id === id){
                  return {
                    ...po,
                    comments:[...po.comments,{
                        id: uuid(),
                        commenterThumbnail: loginUser.profile_picture,
                        commenter: loginUser.name,
                        comment: value
                    }]
                  }
                }
                return po;
              })
              return {
                ...u,
                posts:editPosts
              }
            }
            return u;
          }) as CommunityType[];
          
          joinCommunity(updateCommunity).then(() => fetchCommunity());
          setValue('');
    }
    
  return (
    <>
            {/* 글쓴이 및 글설정 */}
            <div className="w-[660px] border-2 mb-5">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2 p-3">
                <div className="w-[50px] h-[50px] rounded-[50%] border-2"><img src={authorImg} alt="postUserThumbnail" className="w-full h-full"/></div>
                <div className="flex-col">
                <div>{author}</div>
                <div>5분 전</div>
                </div>
            </div>
            <div className="relative">
                <img src={postSetting} alt="postSetting" className="mr-5 cursor-pointer" onClick={openPostSettingModal}/>
                {postSettingModal && <PostSetting id={id} content={content} setPostSettingModal={setPostSettingModal}/>}
            </div>
            </div>
            {/* 게시글 */}
            <div className="flex justify-center">
            <div className="flex-col">
                <div
                className="mt-[30px] overflow-hidden whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                __html: content,
                }}
                />
            </div>
            </div>
            {/* 댓글 */}
            <div className="flex justify-center">
            <div className="w-[500px]">
                {/* 댓글 수 및 좋아요 */}
                <div className="flex justify-between items-center h-[60px] border-b-2">
                <div className="flex items-center gap-x-2">
                    <span>{`댓글 ${comments.length}`}</span>
                    <img
                    src={comment}
                    alt="comment"
                    className={`w-[20px] h-[20px] cursor-pointer ${showComments ? 'rotate-180' : ''}`}
                    onClick={() => setShowComments(!showComments)}
                    />
                </div>

                <div className="flex items-center gap-x-2">
                    <img src={heart} alt="heart" className="w-[20px] h-[20px]" />
                    <span>0</span>
                </div>
                </div>
                {/* 댓글 보여주기 */}
                {
                    showComments ?
                    comments.map((c) => (
                        <Comments
                        key={c.id}
                        id={c.id}
                        comment={c.comment}
                        commenter={c.commenter}
                        commenterThumbnail={c.commenterThumbnail}
                        />
                    ))
                    :
                    <></>
                }
            </div>
            </div>
            {/* 댓글 쓰기 */}
            <div className="flex items-center justify-center gap-x-2 my-[5px]">
            <div>
                <img src={plus} alt="plus" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                placeholder="댓글을 입력해주세요"
                className="border-2 rounded-[50px] w-[430px] h-[40px] p-5"
            />
            <button className="rounded-[50px] w-[90px] h-[40px] bg-blue-500 text-white" onClick={postComment}>
                쓰기
            </button>
            </div>
        </div>
    </>
  )
}
