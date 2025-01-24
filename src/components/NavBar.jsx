import React from "react";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt="Amazon logo"
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United States</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex">Middle</div>
        {/* Right */}
        <div className="flex items-center">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              {" "}
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3">ICON</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
