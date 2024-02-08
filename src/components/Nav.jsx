import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { servis } from "../assets/images";

const Nav = () => {
  return (
    <nav className="w-full absolute z-10 px-18 xl:pl-32 box-border font-medium flex justify-between items-center">
      <div className="cursor-pointer">
        <img width={180} height={100} src={servis} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-16 text-lg text-slate-gray max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="cursor-pointer">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" font-semibold text-lg max-lg:hidden pl-12 cursor-pointer">
        <span>Signin / Explore now</span>
      </div>
      <div className="pr-6">
        <img
          src={hamburger}
          alt="menu"
          width={30}
          height={10}
          className="cursor-pointer hidden max-lg:block"
        />
      </div>
    </nav>
  );
};

export default Nav;
