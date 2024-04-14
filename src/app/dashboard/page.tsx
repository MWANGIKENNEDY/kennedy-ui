import React from "react";
import SimpleStackedFooter from "./components/simpleStackedFooter";
import SimpleAnnouncement from "./components/announcements/simpleAnnouncement";
import WithAction from "./components/announcements/withAction";
import FloatingBottom from "./components/announcements/floatingBottom";
import FloatingBottomwithClose from "./components/announcements/floatingBottomwithClose";
import AnnouncementWithClose from "./components/announcements/announcementWithClose";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Announcements</h3>
        <SimpleAnnouncement />
        <WithAction />
        <AnnouncementWithClose />
      </div>
      <SimpleStackedFooter />
    </>
  );
};

export default page;
