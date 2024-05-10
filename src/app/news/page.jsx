import {NewContent} from "@/components/Pages";
async function getRoom() {
  const resTitleNew = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-news-section/`, { cache: 'no-store' })
  const titleNew = await resTitleNew.json()
  return titleNew
}

export default async function Page () {

  const titleNew = await getRoom()
  return (
      <NewContent titleNew={titleNew}  />
  );
};

