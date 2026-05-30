import { BiBookOpen } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import PropTypes from "prop-types";
import logo from "../../../assets/logo.avif";
import { home, starting, records } from "../../../constants/app.routes";

function BottomNavMobile() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-primary/30 shadow-[0_-18px_45px_rgba(0,0,0,0.35)] flex justify-around items-center py-2 md:hidden text-gray-300">
      {/* Home Link */}
      <NavLink
        to={home}
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#83FF90] font-bold flex flex-col items-center"
            : "flex flex-col items-center hover:text-white transition"
        }
      >
        <BiHome className="text-2xl" />
        <p className="text-xs">Home</p>
      </NavLink>

      {/* Starting Link - Elevated Icon */}
      <NavLink
        to={`${home}/${starting}`}
        className={({ isActive }) =>
          isActive
            ? "text-[#83FF90] font-bold flex flex-col items-center relative -top-5"
            : "flex flex-col items-center relative -top-5 hover:text-white transition"
        }
      >
        <div className="rounded-full p-3 bg-[#050806] border border-primary/50 shadow-[0_0_24px_rgba(34,197,94,0.28)]">
          <div className="rounded-full w-12 overflow-hidden shadow-lg">
            <img src={logo} alt="Logo" className="w-auto h-auto" />
          </div>
          <p className="text-xs mt-1">Starting</p>
        </div>
      </NavLink>

      {/* Records Link */}
      <NavLink
        to={`${home}/${records}`}
        className={({ isActive }) =>
          isActive
            ? "text-[#83FF90] font-bold flex flex-col items-center"
            : "flex flex-col items-center hover:text-white transition"
        }
      >
        <BiBookOpen className="text-2xl" />
        <p className="text-xs">Records</p>
      </NavLink>
    </div>
  );
}

BottomNavMobile.propTypes = {
  showside: PropTypes.bool,
  toggle: PropTypes.func,
};

export default BottomNavMobile;
