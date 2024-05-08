'use client'
import {RoomCard, SectionUI} from "@/components";

const Page = () => {
  return (
      <SectionUI title={'Наши номера'}>
        <div className="flex flex-col gap-10 md:gap-[60px]">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </SectionUI>
  );
};

export default Page;