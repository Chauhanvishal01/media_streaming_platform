const Home = () => {
  return (
<div className="parent">
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle peer" />
      <div
        className={`
      fixed top-0 left-0 z-40 
      h-full w-70 mt-[10vh]
      transition-transform duration-300
      bg-base-200 text-base-content 
      translate-x-[-80%] 
      peer-checked:translate-x-0
    `}
      >
        <div className="flex justify-between p-2 items-center ">
          <p>LIVE STREAMERS</p>

          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              &gt;
            </label>
          </div>
        </div>
        <label
          htmlFor="my-drawer"
          className="drawer-overlay absolute inset-0 z-[-1] cursor-pointer"
        ></label>
        <ul className="menu p-2 min-h-full">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
</div>
  );
};

export default Home;
