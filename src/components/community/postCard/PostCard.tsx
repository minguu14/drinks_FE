import postSetting from "../../../img/postSetting.png";
import plus from "../../../img/plus.png";
import whiteHeart from "../../../img/whiteHeart.png";
import redHeart from "../../../img/redHeart.png";
import comment from "../../../img/comment.png";
import { CommentType, CommunityType, LikeListType, MemberType } from "../../../models/type";
import PostSetting from "../../modals/post/PostSetting";
import { ChangeEvent, useEffect, useState } from "react";
import Comments from "./Comments/Comments";
import communityStore from "../../../stores/community";
import uuid from "react-uuid";
import { joinCommunity } from "../../../Api/community";


interface PostCardType {
    id: string;
    content: string;
    comments: CommentType[];
    likeLists: LikeListType[];
    author: string;
    authorImg: string;
    loginUser: MemberType;
}

export default function PostCard({id, content, comments, loginUser, author, authorImg, likeLists}: PostCardType) {
    const { community, selectedCommunity, fetchCommunity } = communityStore();
    const [postSettingModal, setPostSettingModal] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [like, setLike] = useState(false);
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
    
    const likeBtn = () => {
        const [updateCommunity] = community.map((u) => {
            if(u.id === selectedCommunity.id){
              const like = u.posts.map(po => {
                if(po.id === id){
                  return {
                    ...po,
                    likeLists:[...po.likeLists,{
                        id: loginUser.id,
                        userName: loginUser.name
                    }]
                  }
                }
                return po;
              })
              return {
                ...u,
                posts:like
              }
            }
            return u;
          }) as CommunityType[];
          
          joinCommunity(updateCommunity).then(() => fetchCommunity());
          setLike(!like)
    }

    const cancelLike = () => {
        const [updateCommunity] = community.map((u) => {
            if(u.id === selectedCommunity.id){
              const like = u.posts.map(po => {
                if(po.id === id){
                  const filter = po.likeLists.filter(f => f.id !== loginUser.id);
                  return {
                    ...po,
                    likeLists: filter
                }
                }
              })
              return {
                ...u,
                posts:like
              }
            }
            return u;
          }) as CommunityType[];
          
          joinCommunity(updateCommunity).then(() => fetchCommunity());
          setLike(!like)
    }

    useEffect(()=> {
      if(likeLists.some(l => l.id === loginUser.id)){
        setLike(true);
      }else{
        setLike(false);
      }
    },[loginUser])
  return (
    <>
            {/* 글쓴이 및 글설정 */}
            <div className="w-[660px] border-2 mb-5">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2 p-3">
                <div className="w-[50px] h-[50px] rounded-[50%] border-2"><img src={authorImg} alt="postUserThumbnail" className="w-full h-full"/></div>
                <div className="flex-col">
                <div>{author}</div>
                <div>1분 전</div>
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

                <div className="flex items-center gap-x-1">
                    {
                        like ?  
                        <img src={redHeart} alt="redHeart" className="w-[20px] h-[20px] cursor-pointer" onClick={()=>cancelLike()}/>
                        :
                        <img src={whiteHeart} alt="whiteHeart" className="w-[20px] h-[20px] cursor-pointer" onClick={()=>likeBtn()}/>
                        
                    }
                    <span>{likeLists.length}</span>
                    
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
