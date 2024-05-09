import {NewContent} from "@/components/Pages";
async function getRoom() {
  const resTitleNew = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-news-section/`, { cache: 'no-store' })
  const TitleNew = await resTitleNew.json()
  return TitleNew
}

export default async function Page ({TitleNew}) {

  return (
      <NewContent titleNew={TitleNew}  />
  );
};

