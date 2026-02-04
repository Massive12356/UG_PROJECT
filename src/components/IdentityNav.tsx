import { Link } from "react-router-dom";

const IdentityNav = () => {
  return (
    <div className="relative z-20 w-full flex justify-end gap-4 pr-30 top-1 text-sm font-semibold text-white items-center">
      <Link
        to="/#"
        className="hover:text-yellow-400 transition-colors duration-200"
      >
        Staff
      </Link>
      <Link
        to="/#"
        className="hover:text-yellow-400 transition-colors duration-200"
      >
        Student
      </Link>
    </div>
  );
};

export default IdentityNav;
