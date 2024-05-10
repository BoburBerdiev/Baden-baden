
import {RoomContent} from "@/components/Pages";

async function getRoom() {
  const resRoom = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, { cache: 'no-store' })
  const room = await resRoom.json()
  return room
}

export default async function Page () {
  const room = await getRoom()

  return (
     <RoomContent room={room} />
  );
};

 Page;