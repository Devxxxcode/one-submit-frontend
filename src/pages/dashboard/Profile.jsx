import { useEffect } from "react";
import {
    BiUserCircle,
    BiUser,
    BiCopy,
    BiChevronRight,
    BiCreditCard,
    BiLogOutCircle,
    BiBell,
    BiSupport,
    BiShield,
    BiWallet,
} from "react-icons/bi";
import { GiCrown } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../motion";
import { toast } from "sonner";
import BottomNavMobile from "./components/BottomNavMobile";
import { contact, deposit, home, notifications, payment, personal, withdraw } from "../../constants/app.routes";
import authService from "../../app/service/auth.service";
import { logout } from "../../app/slice/auth.slice";
import { login } from "../../constants/app.routes";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Load";
import { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } from "../../app/slice/profile.slice";
import { formatCurrencyWithCode } from "../../utils/currency";


const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile.user);
    const isLoading = useSelector((state) => state.profile.isLoading);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!profile) {
                dispatch(fetchProfileStart());
                try {
                    const response = await authService.fetchProfile();
                    if (response.success) {
                        dispatch(fetchProfileSuccess(response.data));
                    } else {
                        dispatch(fetchProfileFailure(response.message || "Failed to load profile."));
                        toast.error(response.message || "Failed to load profile.");
                    }
                } catch (error) {
                    console.error("Error fetching profile:", error);
                    dispatch(fetchProfileFailure("An error occurred while fetching your profile."));
                    toast.error("An error occurred while fetching your profile.");
                }
            }
        };

        fetchProfile();
    }, [dispatch, profile]);

    const copyReferralCode = () => {
        if (profile?.referral_code) {
            navigator.clipboard.writeText(profile.referral_code);
            toast.success("Referral code copied!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleLogout = () => {
        authService.logout();
        dispatch(logout());
        navigate(login);
    };

    if (isLoading) {
        return <Loader />;
    }

    const accountStats = [
      {
        label: "Wallet Balance",
        value: formatCurrencyWithCode(profile?.wallet?.balance || "0.00"),
      },
      {
        label: "Frozen Amount",
        value: formatCurrencyWithCode(profile?.wallet?.on_hold || "0.00"),
      },
      {
        label: "Commission",
        value: formatCurrencyWithCode(profile?.today_profit || "0.00"),
      },
      {
        label: "Salary",
        value: formatCurrencyWithCode(profile?.wallet?.salary || "0.00"),
      },
    ];

    const profileSections = [
      {
        title: "Wallet",
        items: [
          {
            label: "Deposit",
            icon: BiWallet,
            route: `${home}/${deposit}`,
          },
          {
            label: "Withdraw",
            icon: BiCreditCard,
            route: `${home}/${withdraw}`,
          },
        ],
      },
      {
        title: "Account",
        items: [
          {
            label: "Personal Information",
            icon: BiShield,
            route: `${home}/${personal}`,
          },
          {
            label: "Payment Methods",
            icon: BiCreditCard,
            route: `${home}/${payment}`,
          },
        ],
      },
      {
        title: "Support",
        items: [
          {
            label: "Contact Us",
            icon: BiSupport,
            route: `${home}/${contact}`,
          },
          {
            label: "Notifications",
            icon: BiBell,
            route: `${home}/${notifications}`,
          },
        ],
      },
    ];

    return (
      <div className="min-h-screen md:overflow-hidden px-2 py-3 md:px-4 md:py-6 pb-28 md:pb-6">
        <motion.div
          initial={slideIn("down", null).initial}
          whileInView={slideIn("down", 1 * 2).animate}
          className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(12,22,35,0.96)_0%,rgba(14,22,38,0.96)_52%,rgba(30,18,35,0.92)_100%)] p-5 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4 md:gap-5">
              {profile?.profile_picture ? (
                <img
                  src={profile.profile_picture}
                  alt="Profile"
                  className="h-20 w-20 md:h-24 md:w-24 rounded-2xl object-cover border border-primary/30 shadow-[0_16px_30px_rgba(0,0,0,0.2)]"
                />
              ) : (
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_16px_30px_rgba(0,0,0,0.2)]">
                  <BiUserCircle className="text-4xl md:text-5xl text-primary" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                  Account
                </p>
                <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white break-words">
                  {profile?.username || "N/A"}
                </h1>
                <p className="mt-1 text-sm text-gray-300">
                  Manage your wallet, profile details, and account settings.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="rounded-full border border-primary/25 bg-white/[0.04] px-4 py-2 text-sm text-gray-200">
                    <span className="text-gray-400">Referral Code</span>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-semibold tracking-[0.12em] text-white">
                        {profile?.referral_code || "N/A"}
                      </span>
                      <button
                        type="button"
                        onClick={copyReferralCode}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
                      >
                        <BiCopy className="text-sm" />
                      </button>
                    </div>
                  </div>
                  <div className="rounded-full border border-primary/25 bg-white/[0.04] px-4 py-3 text-sm text-gray-200">
                    <span className="text-gray-400">Package</span>
                    <div className="mt-1 flex items-center gap-2">
                      {profile?.wallet?.package?.icon ? (
                        <img
                          src={profile.wallet.package.icon}
                          alt={profile.wallet.package.name || "Package Icon"}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <GiCrown className="text-primary" />
                      )}
                      <span className="font-semibold text-white">
                        {profile?.wallet?.package?.name || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">Credit Score</span>
                <span className="text-sm font-bold text-white">
                  {profile?.wallet?.credit_score || 0}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${profile?.wallet?.credit_score || 0}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,#6ed8ff_0%,#6c7dff_55%,#c55d86_100%)] shadow-[0_12px_24px_rgba(110,216,255,0.22)]"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Your account level and activity performance are reflected here.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {accountStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={fadeIn("up", null).initial}
              whileInView={fadeIn("up", (index + 1) * 0.1).animate}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)]"
            >
              <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              <p className="mt-2 text-base md:text-xl font-bold text-white break-words">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 space-y-4 md:mb-4 mb-24">
          {profileSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={fadeIn("right", null).initial}
              whileInView={fadeIn("right", (sectionIndex + 1) * 0.16).animate}
              className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
            >
              <div className="px-4 pt-4 pb-2 md:px-5">
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
                  {section.title}
                </p>
              </div>
              <div>
                {section.items.map((item, itemIndex) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => navigate(item.route)}
                    className={`flex w-full items-center justify-between px-4 py-4 md:px-5 text-left transition hover:bg-white/[0.04] ${
                      itemIndex !== section.items.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shrink-0">
                        <item.icon className="text-xl" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white break-words">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-400">
                          Open {item.label.toLowerCase()}
                        </p>
                      </div>
                    </div>
                    <BiChevronRight className="text-xl text-gray-500 shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.button
            initial={fadeIn("right", null).initial}
            whileInView={fadeIn("right", 0.64).animate}
            onClick={handleLogout}
            className="w-full rounded-2xl border border-red-500/20 bg-[linear-gradient(90deg,rgba(127,29,29,0.18)_0%,rgba(69,10,10,0.18)_100%)] py-4 font-semibold text-red-200 transition hover:bg-red-500/10 flex items-center justify-center"
          >
            <BiLogOutCircle className="mr-2 text-xl" /> Logout
          </motion.button>
        </div>
        <BottomNavMobile className="md:hidden" />
      </div>
    );
};

export default Profile;
