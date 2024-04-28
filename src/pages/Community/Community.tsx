import communityStore from "../../store/store";
import ClickCommunity from "./ClickCommunity/ClickCommunity";


export default function Community() {
  const { community } = communityStore();
  return (
    <div>
      <ClickCommunity
      />
    </div>
  )
}
