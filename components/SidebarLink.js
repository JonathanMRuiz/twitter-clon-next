import React from "react";

const SidebarLink = ({ text, Icon, active }) => {
  const styles = {
    container: `text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
      active && "font-bold"
    }`,
    text: "hidden xl:inline",
  };
  return (
    <div className={styles.container}>
      <Icon className="h-7" />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default SidebarLink;
