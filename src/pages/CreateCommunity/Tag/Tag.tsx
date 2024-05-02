interface TagType {
    tag: string;
    selectedTag: string;
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>
}

export default function Tag({tag, selectedTag, setSelectedTag}: TagType) {

    const handleTagClick = (tag: string) => {
        if (selectedTag === tag) {
          setSelectedTag("");
        } else {
          setSelectedTag(tag);
        }
      };

  return (
    <div
      className={`w-[60px] h-[25px] border-2 rounded-[10px] text-center cursor-pointer ${
        selectedTag === tag ? "bg-red-300" : ""
      }`}
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </div>
  );
}
