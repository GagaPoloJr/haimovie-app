import { Link } from 'react-router-dom';
import Switcher from './Switcher';
const Navbar = () => {
  const shadow = `shadow-lg shadow-slate-500/50 dark:shadow-indigo-900/50`;
  return (
    <>
      <header
        className={`${shadow} rounded-xl mx-auto w-full  lg:w-2/4  fixed inset-x-0 bottom-5 z-50 px-3 md:px-0`}
      >
        <nav className={`rounded-xl bg-slate-200 dark:bg-slate-900 py-5`}>
          <ul className="flex justify-center items-center gap-10 md:gap-20 text-center">
            <li className="">
              <a href={`/`} className="text-xs md:text-sm dark:text-slate-200 font-semibold">
                Home
              </a>
            </li>
            <li className="">
              <Link to="/latest" className="text-xs md:text-sm dark:text-slate-200 font-semibold">
                Latest
              </Link>
            </li>
            <li className="">
              <Link to="/popular" className="text-xs md:text-sm dark:text-slate-200 font-semibold">
                Popular
              </Link>
            </li>
            <li className="">
              <Link to="/favorite" className="text-xs md:text-sm dark:text-slate-200 font-semibold">
                Favorite
              </Link>
            </li>
            <li className="">
              <Switcher />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
