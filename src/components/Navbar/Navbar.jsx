import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* {logo section} */}
          <h1 className="text-2xl font-semibold uppercase">
            <span className="text-primary">Smart</span> Sync
          </h1>
          {/* {Hamburger Menu section} */}
          <div className="">
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar