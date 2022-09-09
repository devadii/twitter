const SidebarMenuItems = ({ text, Icon, active }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-200 rounded-full text-gray-700 w-[52px] xl:w-max h-[52px] xl:h-auto flex items-center justify-center xl:justify-start p-1 xl:p-2 ">
      <Icon className="h-7" />
      <p className={`${active && "font-bold"} pl-2 hidden xl:inline`}>{text}</p>
    </div>
  );
};

export default SidebarMenuItems;
