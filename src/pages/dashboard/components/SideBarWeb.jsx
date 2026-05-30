import { BiCalendarEvent } from "react-icons/bi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiEgyptianProfile } from "react-icons/gi";
import { RiRestartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import {
  deposit,
  events,
  home,
  login,
  notifications as notificationsRoute, // Rename here
  profile,
  records,
  starting,
  withdraw,
} from "../../../constants/app.routes";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../../motion";
import logo from "../../../assets/logo.avif";
import { BiBookOpen } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux"; // Import dispatch
import authService from "../../../app/service/auth.service"; // Import authService
import { logout } from "../../../app/slice/auth.slice"; // Import logout action
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

function SideBarWeb() {
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout(); // Clear tokens and state
    dispatch(logout()); // Dispatch the logout action
    navigate(login);
  };

  const { notifications } = useSelector((state) => state.notifications);

  // Unread notifications count
  const unreadNotifications = notifications.filter(
    (notification) => !notification.is_read,
  ).length;

  const navClass = ({ isActive }) =>
    [
      "group flex items-center gap-x-4 w-full px-5 py-3 rounded-xl transition-all duration-300",
      isActive
        ? "text-[#83FF90] bg-primary/15 border border-primary/40 font-bold shadow-[0_10px_28px_rgba(34,197,94,0.16)]"
        : "text-gray-300 hover:bg-white/10 hover:text-white border border-transparent",
    ].join(" ");

  return (
    <div className="w-[240px] lg:w-[330px] bg-[#050806] px-4 py-6 hidden md:flex flex-col justify-between h-screen shadow-2xl overflow-y-auto border-r border-primary/25">
      {/* Logo */}
      <motion.div
        initial={zoomIn(1, "min").initial}
        whileInView={zoomIn(1, "min").animate}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
      >
        <img src={logo} alt="Logo" className="h-auto w-40" />
      </motion.div>

      {/* Navigation Links */}
      <div className="mt-6 flex flex-col space-y-2 text-gray-300 flex-grow">
        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={home}
            end
            className={navClass}
          >
            <MdOutlineDashboard className="text-2xl" />
            <p>Home</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={starting}
            className={navClass}
          >
            <RiRestartLine className="text-2xl" />
            <p>Starting</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={records}
            className={navClass}
          >
            <BiBookOpen className="text-2xl" />
            <p>Records</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={profile}
            className={navClass}
          >
            <GiEgyptianProfile className="text-2xl" />
            <p>Profile</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={notificationsRoute}
            className={navClass}
          >
            <div className="relative flex items-center">
              <IoMdNotificationsOutline
                className={`text-lg cursor-pointer mr-1 ${unreadNotifications > 0 ? "shake" : ""}`}
              />
              {unreadNotifications > 0 && (
                <span className=" bg-green-500 p-3 absolute -top-5 -right-2 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {unreadNotifications}
                </span>
              )}
            </div>
            <p>Notifications</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={withdraw}
            className={navClass}
          >
            <BiMoneyWithdraw className="text-2xl" />
            <p>Withdraw</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={deposit}
            className={navClass}
          >
            <RiLuggageDepositLine className="text-2xl" />
            <p>Deposit</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={slideIn("left", 0).initial}
          whileInView={slideIn("left", 2).animate}
        >
          <NavLink
            to={events}
            className={navClass}
          >
            <BiCalendarEvent className="text-2xl" />
            <p>Events</p>
          </NavLink>
        </motion.div>
      </div>

      {/* Logout Button */}
      <motion.button
        initial={slideIn("up", null).initial}
        whileInView={slideIn("up", 2).animate}
        className="flex items-center gap-x-3 py-3 px-4 text-red-300 hover:bg-red-500/10 rounded-xl border border-red-500/15 transition"
        onClick={handleLogout} // Add the logout handler here
      >
        <CiLogout className="text-2xl" />
        <p>Logout</p>
      </motion.button>
    </div>
  );
}

export default SideBarWeb;
