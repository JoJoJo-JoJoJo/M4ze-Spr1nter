import HomeIcon from "./HomeIcon";

const HomeBtn = () => {
  return (
    <button
      className="header-btn"
      aria-label="Home button, on click returns to home page"
    >
      <HomeIcon />
    </button>
  );
};

export default HomeBtn;
