import Image from "next/image";
import React from "react";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
const Sidebar = () => {
  const styles = {
    container:
      "hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full ",
    logo: "flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24",
    sidebarLink: "space-y-2.5 mt-4 mb-2.5 xl:ml-24",
    button:
      "hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]",
    img: "h-10 w-10 rounded-full xl:mr-2.5",
    userContainer:
      "text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto  mt-auto",
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="https://rb.gy/ogau5a" width={30} height={30} alt="logo" />
      </div>
      <div className={styles.sidebarLink}>
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className={styles.button}>Tweet</button>
      <div className={styles.userContainer}>
        <img
          src="https://lh3.googleusercontent.com/ogw/AOh-ky19idCjNEsJE5dj3k9zQXeaYDu3-YB-vs6Htwkh=s32-c-mo"
          alt="image"
          className={styles.img}
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">firebase 1875</h4>
          <p className="text-[#6e767d]">@firebase1875</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
