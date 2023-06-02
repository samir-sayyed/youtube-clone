import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center px-4 m-2 shadow-md">
      <div className="flex items-center">
        <img
          onClick={() => {
            handleMenuToggle();
          }}
          className="h-4 cursor-pointer"
          alt="menu"
          src="https://openclipart.org/image/2000px/221605"
        />
        <img
          className="mx-2 w-[140px]"
          alt="app-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="flex items-center">
        <input className="h-8 w-[400px] border border-gray-300 rounded-l-full" />
        <button className="text-md' h-8 rounded-r-full border border-gray-300 bg-gray-50">
          <img
            className="h-5 mx-4"
            alt="profile-pic"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          />
        </button>
        <img
          className="h-5 mx-4"
          alt="profile-pic"
          src="https://icons.veryicon.com/png/o/miscellaneous/the-font-is-great/microphone-89.png"
        />
      </div>
      <div className="flex">
        <img
          className="h-8 mx-6"
          alt="profile-pic"
          src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"
        />
        <img
          className="h-8"
          alt="profile-pic"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        />
      </div>
    </div>
  );
};

export default Head;
