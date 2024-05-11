
import {PageInner} from "@/components/Pages";

async function getHome() {
  // resRoom
  const resRoom = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/index-rooms/`, { cache: 'no-store' })
  const room = await resRoom.json()


  return [room]
}

export default async function Page() {
  const [room] = await getHome()
  return <PageInner roomCatalog={room}/>;
};

