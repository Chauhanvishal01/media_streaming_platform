import React, { useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="navbar bg-[#222831] shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">StreamTube</a>
      </div>
      <div className="flex gap-5 justify-between w-[100%]">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered border lg:w-[40vw] md:w-auto ml-[18vw]"
        />
        {isLogin ? (
          <>
            <div className="dropdown dropdown-end mr-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul

                tabIndex={0}
                className="menu menu-md dropdown-content bg-[#222831] rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">Viewer</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex gap-2 mr-5 items-center">
            <button onClick={()=>setIsLogin(true)} className="btn btn-outline ">Sign In</button>
            <button className="btn  bg-purple-700 p-4 hover:border-1 hover:border-white hover:bg-inherit box-border">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
