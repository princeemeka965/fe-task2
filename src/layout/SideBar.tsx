import {
  AvatarGrey,
  CalendarIcon,
  ChevronLeft,
  DocumentIcon,
  GroupIcon,
  HeartIcon,
  HomeIcon,
  NoteBook,
  SettingsIcon,
  ShareIcon,
} from "../icons/icons";

const SideBar: React.FC = () => {
  return (
    <>
      <div
        className="h-full flex flex-col p-2 bg-white shadow-md fixed"
        style={{ height: "100vh", width: "4%" }}
      >
        <div className="w-full flex justify-center my-2">
          <AvatarGrey />
        </div>
        <div className="w-full flex justify-center bg-lightBlue rounded-md p-2 my-2">
          <HomeIcon currentcolor="#1D4ED8" />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <GroupIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <CalendarIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <ShareIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <DocumentIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <NoteBook />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <HeartIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <ChevronLeft />
        </div>
        <div className="w-full flex justify-center p-2 mt-32">
          <SettingsIcon />
        </div>
        <div className="w-full flex justify-center p-2 my-2">
          <div className="w-6 h-6 rounded-full flex justify-center p-1 bg-skyBlue">
            <span
              className="font-semibold text-greyBlue"
              style={{ fontSize: "10px" }}
            >
              AS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
