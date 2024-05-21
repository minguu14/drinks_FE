export default function InviteMemberCard({id, name, setUser, user }: any) {

  // const checkedItemHandler = (value: string, isChecked: boolean) => {
    
  //   if (isChecked) {
      
  //     setUser((prev:any) => [...prev, value]);

  //     return;
  //   }
    
  //   if (!isChecked && user.includes(value)) {
      
  //     setUser(user.filter((item:any) => item !== value));

  //     return;
  //   }

  //   return;
  // };

  // const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
  //   checkedItemHandler(value, e.target.checked);
  // };

  return (
    <div className="flex justify-between items-center px-2 py-1">
      <div className="flex items-center gap-x-2">
        <div className="w-[40px] h-[40px] border rounded-[50%]"></div>
        <span>{name}</span>
      </div>
      <input 
      type="checkbox"
      // checked={user.includes(name)}
      // onChange={(e)=>checkHandler(e, name)}
      className="w-[25px] h-[25px] rounded-[10px]"/>
    </div>
  );
}
