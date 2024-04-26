

export default function Announcement() {
    return (
      <div className='flex flex-col w-[500px] mt-10'>
              <div className='flex justify-between'>
                <span className="font-['TTLaundryGothicB'] text-[20px]">공지사항</span>
                <span className='text-[10px]'>전체보기</span>
              </div>
              <div className="mt-5">
                <div className='flex justify-between pb-2'>
                  <span>공지사항1</span>
                  <span>2023.04.07</span>
                </div>
                <div className='flex justify-between pb-2'>
                  <span>공지사항2</span>
                  <span>2023.04.07</span>
                </div>
                <div className='flex justify-between pb-2'>
                  <span>공지사항3</span>
                  <span>2023.04.07</span>
                </div>
              </div>
            </div>
    )
  }
  