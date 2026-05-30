import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { slideIn, fadeIn, zoomIn } from "../../motion";
import Logo from "../../assets/logo.avif";
// import LaptopImage from "../../assets/laptop.webp";
import HeroImage from "../../assets/hero.jpg";
import HeroVideo from "../../assets/hero.mp4";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.png";
import Hero4 from "../../assets/hero4.png";
import Hero5 from "../../assets/hero5.png";
import LeftLine from "../../assets/left.avif";
import RightLine from "../../assets/right.avif";
import { FaSpotify, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { BiCommentEdit } from "react-icons/bi";
import { MdQueueMusic } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import { IoDiscOutline } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PreviousBg from "../../assets/previous.jpg";
import HeatAboveImg from "../../assets/heat_above.jpeg";
import DaxImg from "../../assets/dax.jpg";
import GabrielGuyImg from "../../assets/gabriel_guy.jpeg";
import AnthonyVegaImg from "../../assets/anthony_vega.jpeg";
import SeanStephensImg from "../../assets/sean_stephens.jpeg";
import HelloSisterImg from "../../assets/hello_sister.jpg";
import Slide1 from "../../assets/1.png";
import Slide2 from "../../assets/2.png";
import Slide3 from "../../assets/3.png";
import Slide4 from "../../assets/4.png";
import DiscIcon from "../../assets/disc.png";
import HeadsetIcon from "../../assets/headset.png";
import GraphIcon from "../../assets/graph.png";
import CuratorsBg from "../../assets/curators.avif";
import HeadsetImg from "../../assets/headset.png";
import WalletImg from "../../assets/wallet.png";
import DiscoverImg from "../../assets/discover.png";
import FemaleImg from "../../assets/female.jpg";
import BlogBg from "../../assets/blog.jpg";
import Blog11 from "../../assets/11.jpg";
import Blog12 from "../../assets/12.jpg";
import Blog13 from "../../assets/13.jpg";
import Blog14 from "../../assets/14.jpg";
import Blog15 from "../../assets/15.png";
import Blog16 from "../../assets/16.jpg";
import SubmitBg from "../../assets/submit.png";
import InnerImg from "../../assets/inner.jpg";
import UltimateBg from "../../assets/ultimate.jpg";
import LeftsIcon from "../../assets/lefts.svg";
import RightsIcon from "../../assets/rightb.svg";

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [curatorIndex, setCuratorIndex] = useState(0);
  const curatorSlides = [Slide1, Slide2, Slide3, Slide4];

  // Auto-play logic for the curator slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCuratorIndex((prevIndex) =>
        prevIndex === curatorSlides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [curatorIndex, curatorSlides.length]);

  const nextCuratorSlide = () => {
    setCuratorIndex((prev) =>
      prev === curatorSlides.length - 1 ? 0 : prev + 1,
    );
  };

  const prevCuratorSlide = () => {
    setCuratorIndex((prev) =>
      prev === 0 ? curatorSlides.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic (Resets timer when currentIndex changes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
  };

  const campaigns = [
    {
      id: 1,
      cover: HeatAboveImg,
      label: null,
      title1: "Heat Above",
      title2: "Slow Down",
      addedToNum: "35",
      addedToText: "Spotify Playlists",
      generatedLabel: "Generated",
      generatedNum: "55,122",
      generatedText: "Streams",
      extraNote: null,
      description:
        "Fueled by catchy twists and rousing energy, Heat Above unleashes the kind of rock anthem fit for a stadium. Hailing from the Flint, Michigan area, the band consists of Brady Lott, Jack Davis, and Michael Davis. The collective mixes genres between extravagant punk, lively rock, dance sounds and unique tunes.<br/><br/>With their debut EP \"Jellyfish\", which was recorded at Rooftop Recording with Dave Roof, Heat Above have assembled an eclectic collection of polished studio songs in a short time. The band has opened for Scotty Austin, Enuff Z'Nuff, Charlotte Sands, and Wildstreet.<br/>Looking ahead, there's plans to continue releasing new releases and performing throughout the Midwest with the goal of providing an inspirational escape from reality through their songs.",
    },
    {
      id: 2,
      cover: DaxImg,
      label: null,
      title1: "DAX",
      title2: "Lonely Dirt Road",
      addedToNum: "29",
      addedToText:
        "Spotify Playlists <span style='color: #83FF90'>+</span><br/>Magazines,<br/>Blogs,<br/>YouTube Channels",
      generatedLabel: "Generated in total",
      generatedNum: "50,292,916",
      generatedText: "Streams",
      extraNote:
        "Note: Not all streams were generated from the One Submit campaign.",
      description:
        "Dax keeps it raw on Lonely Dirt Road, riding deep in his thoughts with that gritty, real talk energy he's known for. The track feels like a late-night drive with no headlights, just pain, growth, and truth spilling out every bar. No flex, no gimmicks, just Dax speaking from the soul and letting the silence hit as hard as the beat.",
    },
    {
      id: 3,
      cover: GabrielGuyImg,
      label: "Universal Music",
      title1: "Gabriel Guy",
      title2: "Doing so much better",
      addedToNum: "25",
      addedToText: "Spotify Playlists",
      generatedLabel: "Generated",
      generatedNum: "214,453",
      generatedText: "Streams",
      extraNote: null,
      description:
        "At 23 years old and making waves in the pop scene is Gabriel Guy—a budding talent who is swiftly making a name for himself in the music industry landscape by transitioning from songwriting in his own space to securing deals with Universal Music Group (UMI) and Island UK—a journey worth noting for its impressive trajectory and accomplishments.<br/><br/>A man finalized an agreement, with Island Records UK which represents artists such, as Drake and Ariana Grande, and later on signed with Universal Music in the year 2022.<br/>His breakout single, Arrest Me, debuted with an animated video, and Doing So Much Better became a TikTok hit, surpassing a million YouTube views and 148,000 Spotify streams.",
    },
    {
      id: 4,
      cover: AnthonyVegaImg,
      label: null,
      title1: "Clear Thoughts",
      title2: "Anthony Vega",
      addedToNum: "16",
      addedToText: "Spotify Playlists",
      generatedLabel: "Generated",
      generatedNum: "222,000",
      generatedText: "Streams",
      extraNote: null,
      description:
        "Anthony Vega is a pianist and composer celebrated for his calming piano tunes.<br/>Mixing modern elements his music has the ability to whisk listeners away, to an harmonious state of mind. Whether playing in front of an audience or crafting pieces, in the studio Anthony's heartfelt songs strike a chord with listeners resulting in a musical journey.<br/><br/>We helped Anthony get his track on 18 Spotify playlists which generated 212K streams so far.",
    },
    {
      id: 5,
      cover: SeanStephensImg,
      label: null,
      title1: "Rectangular",
      title2: "Sean Stephens",
      addedToNum: "15",
      addedToText: "Spotify Playlists",
      generatedLabel: "Generated",
      generatedNum: "397,000",
      generatedText: "Streams",
      extraNote: null,
      description:
        "I Am Rectangular, continued I Feel No Hole, refers to a song by <span class='underline'>Canadian TikToker</span> Sean Stephens (@seanstephens.music) who went viral in July 2023 for a TikTok he posted of himself singing the song in Times Square with green hair. The video was <span class='underline'>reposted</span> to <span class='underline'>Twitter</span> and elsewhere, inspiring <span class='underline'>memes</span> and reactions, many of which centered on him looking <span class='underline'>AI-generated</span> with <span class='underline'>Midjourney</span> while others focused on the song's strange lyrics, specifically his use of the word \"hole\" which is also an explicit <span class='underline'>slang</span> term.",
    },
    {
      id: 6,
      cover: HelloSisterImg,
      label: null,
      title1: "Hello Sister",
      title2: "Things You Never Said",
      addedToNum: "22",
      addedToText: "Spotify Playlists",
      generatedLabel: "Generated",
      generatedNum: "123,453",
      generatedText: "Streams",
      extraNote: null,
      description:
        "Florida-based Three sisters who perform as Hello Sister make indie pop with rock influences. While their music occasionally has a dark undercurrent, it is also driven by strong hooks and powerfully moving choruses. The trio emphasizes that blending on Things You Never Said. Fans of PVRIS, Paramore, and Hayley Williams will enjoy it because of its topics and musical style, which focus on the psychological effects of toxic friendships.<br/>The band includes 3 sisters from Florida.<br/>Their journey started in 2017 and and never stopped working on new songs since there.",
    },
  ];

  return (
    <div className="text-gray-80">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black md:bg-gradient-to-r from-[#22879E] via-[#3b3c5a] to-[#BE4A4A] shadow-lg">
        <div className="max-w-[1150px] mx-auto px-4 md:px-0 flex justify-between items-center py-7">
          <motion.div
            variants={slideIn("down", 0.5)}
            initial="initial"
            animate="animate"
          >
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                loading="lazy"
                width="145"
                height="40"
                className="transition-all duration-300"
              />
            </Link>
          </motion.div>
          <motion.nav
            variants={zoomIn(0.5)}
            initial="initial"
            whileInView="animate"
          >
            <Link
              to={"/loader"}
              className="py-1.5 px-5 font-medium text-white bg-[#52344F] hover:text-[#83FF90] rounded-lg transition-all duration-300 border-2 border-[#83FF90]"
            >
              Sign in
            </Link>
          </motion.nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative in-h-screen flex flex-col justify-center py-4 md:py-8 px-4 md:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-[1150px] mx-auto w-full">
          {/* Top label with image lines */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="initial"
            whileInView="animate"
            className="flex items-center justify-center gap-4 "
          >
            <img
              src={LeftLine}
              alt="left line"
              className="w-12 md:w-36 h-auto object-contain"
            />
            <p className="text-[#83FF90] font-medium text-lg md:text-[30px] tracking-[0.15em] uppercase">
              One Submit
            </p>
            <img
              src={RightLine}
              alt="right line"
              className="w-12 md:w-48 h-auto object-contain"
            />
          </motion.div>

          {/* Main Heading - Now heavier (font-black) and wider (tracking-wide) */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="initial"
            whileInView="animate"
            className="text-[#C9C9D3] font-extra-bold text-4xl md:text-5xl lg:text-[52px] leading-tight text-center mb-1 max-w-[1150px] mx-auto tracking-wide"
          >
            Reach 2,200 Music Curators With <br className="hidden md:block" />
            Powerful Music Promotion
          </motion.h1>

          {/* Trust badge - Now with a border */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="initial"
            whileInView="animate"
            className="flex justify-center mb-5"
          >
            <div className="flex items-center gap-2 border border-[#756F72] px-4 py-1.5 bg-black/20 backdrop-blur-sm">
              <span className="text-yellow-500 text-lg tracking-widest">
                ★★★★★
              </span>
              <p className="text-[#FFFFDE] text-sm md:text-base font-light">
                Trusted by{" "}
                <strong className="font-bold text-white">22,000+</strong>{" "}
                Artists
              </p>
            </div>
          </motion.div>

          {/* Content Grid - Adjusted to ~40/60 split */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 items-stretch mb-16 max-w-[1150px] mx-auto">
            {/* Left Column - Curator Types (Lighter Glassy Card) */}
            <motion.div
              variants={slideIn("left", 0.5)}
              initial="initial"
              whileInView="animate"
              className="bg-[#150f10]/30 backdrop-blur-md border border-white/10 rounded-lg pb-2 pt-4 px-6 md:px-10 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-[#83FF90] text-2xl md:text-[28px] font-medium mb-8 leading-tight tracking-wide">
                  Submit your music <br />
                  to Independent Curators:
                </h3>

                {/* Increased spacing (space-y-6) and scaled up text/icons to fill the card */}
                <div className="space-y-3">
                  <div className="flex items-center gap-5 text-white">
                    <FaSpotify className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <strong className="font-bold text-[#C9C9D3]">
                        Spotify
                      </strong>{" "}
                      <span className="font-light text-[#C9C9D3]">
                        playlisters
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <FaTiktok className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        TikTok
                      </strong>{" "}
                      <span className="font-light text-[#C9C9D3]">
                        Influencers
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <FaYoutube className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        YouTube Music
                      </strong>{" "}
                      <span className="font-light text-[#C9C9D3]">
                        Channels
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <BiCommentEdit className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <span className="font-light text-[#C9C9D3]">Music</span>{" "}
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        Bloggers
                      </strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <MdQueueMusic className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <span className="font-light text-[#C9C9D3]">Online</span>{" "}
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        Music Magazines
                      </strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <FaFacebook className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        Facebook/Instagram
                      </strong>{" "}
                      <span className="font-light text-[#C9C9D3]">Ads</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <BsBroadcast className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <span className="font-light text-[#C9C9D3]">Online</span>{" "}
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        Radio Stations
                      </strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-5 text-white">
                    <IoDiscOutline className="text-3xl md:text-[34px] flex-shrink-0" />
                    <p className="text-xl md:text-[22px] leading-none tracking-wide">
                      <strong className="font-extra-bold text-[#C9C9D3]">
                        Record Labels
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Video & CTA (Lighter Glassy Card) */}
            <motion.div
              variants={slideIn("right", 0.5)}
              initial="initial"
              whileInView="animate"
              className="bg-[#150f10]/30 backdrop-blur-md md:py-0 py-4 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-lg px-6 md:px-10 flex flex-col justify-center items-center h-full"
            >
              {/* Video Embed - Takes up the max space inside its container */}
              <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-8 border border-white/10 bg-black">
                <video
                  width="100%"
                  height="auto"
                  controls
                  poster={HeroImage}
                  className="w-full h-auto aspect-video object-cover"
                >
                  <source src={HeroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text-based CTA */}
              <Link
                to="/loader"
                className="group flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2 text-white text-xl md:text-2xl font-book mb-2 transition-all">
                  Start Your Campaign Now
                  <div
                    className="w-6 h-6 bg-[#83FF90] -scale-x-100 group-hover:translate-x-2 transition-transform duration-300 ml-3"
                    style={{
                      maskImage: `url(${LeftsIcon})`,
                      WebkitMaskImage: `url(${LeftsIcon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  {/* <span className="text-[#83FF90] text-4xl group-hover:translate-x-2 transition-transform duration-300">
                    »
                  </span> */}
                </div>
                <p className="text-[#83FF90] text-sm md:text-base font-light tracking-wide">
                  Guaranteed review or your money back
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Brand Logos - Text under logos made bigger */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="initial"
            whileInView="animate"
            className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12 pt-8"
          >
            <div className="flex flex-col items-center justify-start gap-3 max-w-[140px]">
              <img
                src={Hero1}
                alt="KpopStarz"
                className="h-10 object-contain mb-1"
              />
              <p className="text-gray-300 text-xs md:text-sm text-center leading-tight">
                KpopStarz Best Spotify Promotion Service
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-white/20 my-2" />

            <div className="flex flex-col items-center justify-start gap-3 max-w-[140px]">
              <img
                src={Hero2}
                alt="Ninetone"
                className="h-10 object-contain mb-1"
              />
              <p className="text-gray-300 text-xs md:text-sm text-center leading-tight">
                Ninetone Records
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-white/20 my-2" />

            <div className="flex flex-col items-center justify-start gap-3 max-w-[140px]">
              <img
                src={Hero3}
                alt="Magnetic"
                className="h-10 object-contain mb-1"
              />
              <p className="text-gray-300 text-xs md:text-sm text-center leading-tight">
                Top Music Promotion Service by Magnetic Magazine
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-white/20 my-2" />

            <div className="flex flex-col items-center justify-start gap-3 max-w-[140px]">
              <img
                src={Hero4}
                alt="Universal"
                className="h-10 object-contain mb-1"
              />
              <p className="text-gray-300 text-xs md:text-sm text-center leading-tight">
                Universal Music Group
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-white/20 my-2" />

            <div className="flex flex-col items-center justify-start gap-3 max-w-[160px]">
              <img
                src={Hero5}
                alt="ChatGPT"
                className="h-10 object-contain mb-1"
              />
              <p className="text-gray-300 text-xs md:text-sm text-center leading-tight">
                Chat GPT&apos;s Best Platform to Promote Music{" "}
                <span className="underline cursor-pointer hover:text-white">
                  Read More
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* previous section */}
      <section
        className="relative min-h-screen py-20 px-4 flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${PreviousBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-black tracking-wide text-center mb-12 relative z-10">
          Previous Music Promotion Campaigns
        </h2>

        <div className="relative w-full max-w-[1100px] flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 z-20 text-white hover:text-[#83FF90] transition-colors p-2 hidden md:block"
          >
            <SlArrowLeft className="text-4xl stroke-[10px]" />
          </button>

          {/* Card Container */}
          <div className="w-full max-w-[900px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#222222] rounded-xl shadow-2xl p-6 md:p-10 min-h-[600px] relative overflow-hidden flex flex-col"
              >
                {/* Green Triangle in Top Right */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-[#83FF90]"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Top Section: Image & Stats */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8 relative">
                  {/* Album/Artist Cover */}
                  <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={campaigns[currentIndex].cover}
                      alt={campaigns[currentIndex].title1}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info & Stats */}
                  <div className="flex-1 w-full mt-2">
                    <div className="pr-20">
                      {" "}
                      {/* Padding to prevent overlap with Spotify button */}
                      {campaigns[currentIndex].label && (
                        <p className="text-white text-[30px] font-bold mb-1">
                          {campaigns[currentIndex].label}
                        </p>
                      )}
                      <h3 className="text-[#83FF90] text-3xl md:text-[38px] font-medium leading-none mb-2">
                        {campaigns[currentIndex].title1}
                      </h3>
                      <h4 className="text-white text-xl md:text-2xl font-bold mb-6">
                        {campaigns[currentIndex].title2}
                      </h4>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Added To Stat */}
                      <div>
                        <p className="text-white text-[20px] font-book">
                          Added to
                        </p>
                        <p className="text-[#83FF90] text-4xl md:text-5xl font-medium leading-none my-1">
                          {campaigns[currentIndex].addedToNum}
                        </p>
                        <p
                          className="text-white text-[20px] font-book leading-tight"
                          dangerouslySetInnerHTML={{
                            __html: campaigns[currentIndex].addedToText,
                          }}
                        />
                      </div>

                      {/* Generated Stat */}
                      <div>
                        <p className="text-white text-[20px] font-book">
                          {campaigns[currentIndex].generatedLabel}
                        </p>
                        <p className="text-[#83FF90] text-4xl md:text-5xl font-medium leading-none my-1">
                          {campaigns[currentIndex].generatedNum}
                        </p>
                        <p className="text-white text-[20px] font-book mb-2">
                          {campaigns[currentIndex].generatedText}
                        </p>
                        {campaigns[currentIndex].extraNote && (
                          <p className="text-gray-400 text-[11px] leading-tight max-w-[200px]">
                            {campaigns[currentIndex].extraNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spotify Button */}
                  <button className="absolute top-0 right-10 flex items-center gap-2 text-white hover:text-[#83FF90] transition-colors group">
                    <FaSpotify className="text-2xl text-[#83FF90] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">Click to listen</span>
                  </button>
                </div>

                {/* Bottom Section: Description */}
                <div
                  className="text-[#83FF90] text-[15px] md:text-[20px] font-book leading-relaxed tracking-wide"
                  dangerouslySetInnerHTML={{
                    __html: campaigns[currentIndex].description,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 z-20 text-white hover:text-[#83FF90] transition-colors p-2 hidden md:block"
          >
            <SlArrowRight className="text-4xl stroke-[10px]" />
          </button>
        </div>

        {/* Mobile Arrows (Visible only on small screens) */}
        <div className="flex md:hidden justify-between w-full max-w-[900px] mt-6 px-4">
          <button onClick={prevSlide} className="text-white">
            <SlArrowLeft className="text-3xl" />
          </button>
          <button onClick={nextSlide} className="text-white">
            <SlArrowRight className="text-3xl" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {campaigns.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-white scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Header */}
        <div className="mt-32 w-full relative z-10 flex justify-center">
          <div className="flex flex-col items-start">
            <p className="text-[#83FF90] font-bold text-3xl md:text-4xl lg:text-[48px] leading-none mb-[-5px] md:mb-[-10px] ml-1 md:ml-12">
              For
            </p>
            <h2 className="text-white text-5xl md:text-6xl lg:text-[96px] font-bold tracking-tighter leading-none">
              Artists
            </h2>
          </div>
        </div>

        {/* First Card: Curator Slider & Stats */}
        <div className="w-full max-w-[1100px] mt-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] relative z-10">
          <h3 className="text-[#83FF90] text-center text-xl md:text-[30px] font-medium mb-10">
            Check out some of our organic curators:
          </h3>
          {/* Slider Container */}
          <div className="relative flex justify-center items-center mb-12">
            <button
              onClick={prevCuratorSlide}
              className="absolute left-0 md:-left-6 z-20 text-gray-400 hover:text-white p-2 transition-colors"
            >
              <SlArrowLeft className="text-4xl stroke-[15px]" />
            </button>

            <div className="w-full max-w-[850px] overflow-hidden flex justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={curatorIndex}
                  src={curatorSlides[curatorIndex]}
                  alt={`Curator Slide ${curatorIndex + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </AnimatePresence>
            </div>

            <button
              onClick={nextCuratorSlide}
              className="absolute right-0 md:-right-6 z-20 text-gray-400 hover:text-white p-2 transition-colors"
            >
              <SlArrowRight className="text-4xl stroke-[15px]" />
            </button>

            {/* Slide Counter (Optional, based on screenshot showing '2/4') */}
            <p className="absolute bottom-0 right-0 text-gray-400 text-xs font-medium translate-y-6">
              {curatorIndex + 1}/{curatorSlides.length}
            </p>
          </div>
          {/* Organic Label */}
          <div className="flex flex-col items-center gap-6 mt-12 mb-10">
            {/* Top Line */}
            <div className="w-full h-[1.5px] bg-[#83FF90]/60 max-w-[850px]"></div>

            <div className="text-center">
              <h4 className="text-white text-2xl md:text-[33px] font-black tracking-[0.15em] uppercase mb-1">
                ONLY ORGANIC PLAYLISTS
              </h4>
              <p className="text-white text-base md:text-[28px] font-book tracking-wide">
                Click to see more curator samples
              </p>
            </div>

            {/* Bottom Line */}
            <div className="w-full h-[1.5px] bg-[#83FF90]/60 max-w-[850px]"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-[950px] mx-auto">
            <p className="text-[#dbdbdb] text-[13px] md:text-[16px] font-medium leading-snug">
              <span className="text-[#83FF90] font-black text-base md:text-lg mb-1">
                2,200
              </span>{" "}
              Spotify <br /> Playlists
            </p>
            <p className="text-[#dbdbdb] text-[13px] md:text-[16px] font-medium leading-snug">
              YouTube channels with
              <br />
              up to <span className="text-[#83FF90] font-black">1.5M</span>{" "}
              subscribers
            </p>
            <p className="text-[#dbdbdb] text-[13px] md:text-[16px] font-medium leading-snug">
              TikTok influencers with
              <br />
              up to <span className="text-[#83FF90] font-black">4.8M</span>{" "}
              followers
            </p>
            <p className="text-[#dbdbdb] text-[13px] md:text-[16px] font-medium leading-snug">
              <span className="text-[#83FF90] font-black text-base md:text-lg mb-1">
                400
              </span>{" "}
              Independent <br /> music blogs
            </p>
          </div>
        </div>

        {/* Second Card: 3-Column Features */}
        <div className="w-full max-w-[1100px] mt-6 bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0">
              <img
                src={DiscIcon}
                alt="Upload Music"
                className="h-16 md:h-20 mb-6 object-contain"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Upload your music and submit it to Spotify playlists, YouTube
                channels, TikTok influencers, blogs and radio stations.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center px-4 md:px-8 pt-8 md:pt-0">
              <img
                src={HeadsetIcon}
                alt="Curator Review"
                className="h-16 md:h-20 mb-6 object-contain"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Every submissions gets a review from our organic curators, If
                they like your music, they will add it to their playlist or
                channel.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center px-4 md:px-8 pt-8 md:pt-0">
              <img
                src={GraphIcon}
                alt="Analytics"
                className="h-16 md:h-20 mb-6 object-contain"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Get detailed data about your campaign, watch your fanbase and
                listeners grow, gain more streams and attract new audiences.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 relative z-10 mb-4 md:mb-0">
          <button className="group border-2 border-[#83FF90] bg-black text-white text-lg md:text-[25px] font-medium py-3.5 px-8 md:px-12 rounded-2xl flex items-center gap-3 hover:bg-[#83FF90]/10 transition-all duration-300">
            Ready? Let&apos;s start your campaign
            <div
              className="w-6 h-6 bg-[#83FF90] group-hover:translate-x-2 transition-transform duration-300 ml-3"
              style={{
                maskImage: `url(${RightsIcon})`,
                WebkitMaskImage: `url(${RightsIcon})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </button>
        </div>
      </section>

      {/* curators section */}
      <section
        className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${CuratorsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay just in case the background image is too bright */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Header - Accurately positioned "For" over "Curators" */}
        <div className="relative z-10 w-full flex justify-center mb-12">
          <div className="flex flex-col items-start">
            <p className="text-[#83FF90] font-bold text-2xl md:text-[32px] leading-none mb-[-5px] md:mb-[-8px] ml-1 md:ml-12">
              For
            </p>
            <h2 className="text-white text-5xl md:text-6xl lg:text-[80px] font-black tracking-tighter leading-none">
              Curators
            </h2>
          </div>
        </div>

        {/* Content Grid (35/65 Split) */}
        <div className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[33%_67%] gap-6 md:gap-8 items-stretch">
          {/* Left Card: Info & Images (Glassy) */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-10 h-full">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={HeadsetImg}
                alt="Listen and review"
                className="h-14 md:h-16 mb-4 object-contain drop-shadow-md"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Listen and review new music within your music genre. If you own
                Spotify playlist, blog, radio station, YouTube channel, or
                TikTok channel, you might be eligible to register.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={WalletImg}
                alt="Earn money"
                className="h-14 md:h-16 mb-4 object-contain drop-shadow-md"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Spotify playlist curators earn from 50%- 60% of each song
                review.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={DiscoverImg}
                alt="Discover artists"
                className="h-14 md:h-16 mb-4 object-contain drop-shadow-md"
              />
              <p className="text-white text-sm md:text-[16px] font-book leading-relaxed">
                Access and discover new indie artists
              </p>
            </div>
          </div>

          {/* Right Card: YouTube Video Embed (Glassy) */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center h-full">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/O4N88zkttgY"
                title="Curators Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 relative z-10">
          <Link
            to="/login/signup"
            className="group border-2 border-[#83FF90] bg-[#111111]/60 backdrop-blur-md text-white text-lg md:text-[28px] font-medium py-2 px-8 rounded-2xl flex items-center gap-3 hover:bg-[#83FF90]/20 transition-all duration-300"
          >
            Join us now and become a curator
            <span className="text-[#83FF90] text-5xl leading-none group-hover:translate-x-2 transition-transform duration-300">
              »
            </span>
          </Link>
        </div>
      </section>

      {/* artists section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-black overflow-hidden">
        {/* Background Polygon Effect */}
        <div
          className="absolute inset-0 z-0 bg-[#1a0f2e]"
          style={{ clipPath: "polygon(0 100%, 100% 70%, 100% 100%)" }}
        ></div>

        {/* Content Container - Strictly limited to 1150px */}
        <div className="relative z-10 w-full max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-2 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col pr-0">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[60px] font-medium tracking-tight leading-[1.1] mb-2">
              Artists should be artists
            </h2>
            <h2 className="text-[#83FF90] text-4xl md:text-5xl lg:text-[60px] font-medium tracking-tight leading-[1.1] mb-10">
              Not promoters
            </h2>

            <div className="space-y-6 text-white text-[16px] md:text-base font-book leading-relaxed">
              <p>
                We tried different music promotion sites, but none offered an
                all-around solution. We spent one month creating a song and
                another month and a half trying to promote it. It didn&apos;t
                make sense.
              </p>

              <p>
                This inspired us to change the way musicians worldwide use music
                promotion services. Our effort is focused on delivering good
                results with minimum effort for the artist. Our music promotion
                service is suitable for independent artists, and it&apos;s one
                of the best available on the market today, from indie music
                promotion and playlist promotion to YouTube music promotion. It
                is suitable for aspiring music artists as well as music industry
                professionals.
              </p>

              <p>
                Artists should be artists, not promoters. If you need to get
                your song heard or if you have great music, we&apos;re here for
                you. See{" "}
                <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                  why thousands of indie artists choose One Submit
                </span>{" "}
                over other music promotion platforms.
              </p>
            </div>
          </div>

          {/* Right Column: Image (Contained and narrower) */}
          <div className="flex mx-auto md:mx-0 md:ml-20 md:pt-0 pt-12 w-full justify-center md:justify-start">
            <div className="relative w-full max-w-[300px] h-[500px] md:h-[600px] bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src={FemaleImg}
                alt="Female artist in neon lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* blog section */}
      <section
        className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${BlogBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Header */}
        <div className="relative z-10 w-full text-center mb-16">
          <h3 className="text-[#83FF90] text-3xl md:text-4xl font-nold mb-2">
            Our featured
          </h3>
          <h2 className="text-white text-5xl md:text-6xl font-medium tracking-tight">
            Blog Articles
          </h2>
        </div>

        {/* Blog Grid Container */}
        <div className="relative z-10 w-full max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              How to Get Your Music on Spotify&apos;s Algorithmic Playlists
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4">
              <img
                src={Blog11}
                alt="Spotify Algorithmic Playlists"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Using an online music promotion strategy that will eventually
              trigger Spotify&apos;s algorithmic playlists. This is how
              it&apos;s done.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              The best music magazine to read in 2026
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4 bg-white flex items-center justify-center p-2">
              <img
                src={Blog12}
                alt="Music Magazines"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Discover the top music magazines in 2026, showcasing the latest
              trends, artists, and industry insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              How much does Spotify pay per stream in 2026
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4">
              <img
                src={Blog13}
                alt="Spotify Royalty Payout"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Spotify has changed the{" "}
              <span className="underline">royalty payout</span> starting January
              2024. Check out how much they will pay for every stream.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              5 Famous independent artists who made it big all on their own
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4">
              <img
                src={Blog14}
                alt="Famous Independent Artists"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Success stories of 5 different independent artists who decided to
              break the norm and eventually managed to flourish and make it in
              the industry.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              7 Tips on how to submit your music to blogs
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4">
              <img
                src={Blog15}
                alt="Submit music to blogs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Blogs are a great way to get your music exposed and listened to by
              new audiences. Here are 7 best tips on how to get your music onto
              blogs.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#2a272e]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col h-full hover:bg-[#322f36]/90 transition-colors cursor-pointer group">
            <h4 className="text-white text-[20px] font-bold mb-4 leading-snug min-h-[50px]">
              How to get on Spotify editorial playlists
            </h4>
            <div className="w-full h-[180px] rounded-lg overflow-hidden mb-4">
              <img
                src={Blog16}
                alt="Spotify editorial playlists"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-[13px] md:text-[16px] font-light leading-relaxed">
              Spotify&apos;s editorial playlists are the holy grail of all
              Spotify playlists. All artists try to get their music heard. Find
              out how to submit your tracks to these playlists.
            </p>
          </div>
        </div>
      </section>

      {/* submit section */}
      <section
        className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${SubmitBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Headers */}
        <div className="relative z-10 w-full text-center mb-10">
          <h2 className="text-white text-4xl md:text-[64px] font-medium tracking-wide mb-6">
            One Submit
          </h2>
          <h3 className="text-[#83FF90] text-2xl md:text-[54px] font-medium tracking-wide">
            Your smart way to promote music
          </h3>
        </div>

        {/* Glassy Content Card */}
        <div className="relative z-10 w-full max-w-[1050px] mx-auto bg-[#1a171a]/70 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl">
          {/* Inner Wrapper - Locks in the right-side alignment padding */}
          <div className="w-full pr-0 md:pr-8 lg:pr-16">
            {/* Top Section: Text (Left) & Image (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[65%_35%] gap-8 lg:gap-12 mb-8">
              {/* Left Text Column - NOW JUSTIFIED */}
              <div className="space-y-5 text-gray-300 text-[13px] md:text-[16px] font-light leading-[1.6] text-justify">
                <p>
                  <strong className="font-bold text-white">OneSubmit</strong> is
                  an independent music promotion website dedicated to helping
                  independent artists submit music to curators. We offer Spotify
                  promotion for artists, blogs, online radio, YouTube, and
                  TikTok music promotion.
                </p>

                <p>
                  We are not affiliated with Spotify, Apple Music, TikTok,
                  YouTube, streaming platforms, social media platforms, Spotify
                  for Artists, Playlist Push, Submithub, music distribution
                  services, social media marketing, or any other streaming
                  services.
                </p>

                <p>
                  We do not integrate with your fans or promise additional fans.
                  Our artist services do not include free Spotify playlisting or
                  music video promotion, and we do not promote unreleased
                  tracks.
                </p>

                <p>
                  We help artists promote their tracks online through playlist
                  consideration, music submission to music bloggers, TikTok
                  influencers, industry influencers, and other platforms for
                  submitting tracks.
                </p>

                <p>
                  If you&apos;re an independent artist, you can promote your
                  tracks through music submissions and music PR. Here you can
                  submit tracks to{" "}
                  <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                    Spotify curators
                  </span>
                  , Spotify playlists, YouTube channels, TikTok creators, blogs,
                  and radio stations, and submit songs to record labels. We do
                  not integrate with your Spotify playlist, YouTube channel, or
                  any other asset.
                </p>

                <p>
                  Service is suitable for electronic music and electronic
                  artists as well.
                  <br />
                  To use our Spotify promotion services, your songs need to be
                  on the different music streaming services.
                </p>
              </div>

              {/* Right Image Column */}
              <div className="w-full h-[400px] md:h-full min-h-[350px]">
                <img
                  src={InnerImg}
                  alt="DJ performing"
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-white/5"
                />
              </div>
            </div>

            {/* Bottom Section: Full Width Text - ALIGNED AND JUSTIFIED */}
            <div className="mt-8 space-y-6 text-gray-300 text-[13px] md:text-[16px] font-light leading-[1.8] text-justify">
              <p>
                All music submissions are reviewed, guaranteed. We do not send
                your track releases to Spotify&apos;s editorial playlists; we do
                not guarantee Spotify playlist submission, and our services are
                not free. All submissions are subject to playlist consideration,
                and they do not include label placement,{" "}
                <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                  Spotify promotion
                </span>
                , song features, or audience on any platform. We do not
                distribute or generate streams directly, and we do not promise
                anyone millions of streams. We are working hard for our artists
                to promote their indie music.
              </p>

              {/* Kept text-left here so these short lines don't stretch weirdly */}
              <div className="font-bold text-white space-y-1 text-left">
                <p className="cursor-pointer hover:text-[#83FF90] transition-colors w-max">
                  Check out our TikTok music promotion plan
                </p>
                <p className="cursor-pointer hover:text-[#83FF90] transition-colors w-max">
                  For our Streaming Calculator
                </p>
              </div>

              <p>
                Check out the{" "}
                <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                  best music promotion
                </span>{" "}
                services available. Visit our YouTube channel. Join for free on
                our artist dashboard.
                <br />
                Take a look at the best Spotify promotion services out there.
                <br />
                To get your upcoming releases featured on &quot;Campaign of the
                Month&quot;, contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${UltimateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay just in case the background needs darkening for text readability */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        <div className="relative z-10 w-full max-w-[950px] mx-auto">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-medium tracking-wide mb-8">
            Ultimate{" "}
            <span className="text-[#83FF90] font-bold">music submission</span>{" "}
            platform
          </h2>

          {/* Body Text */}
          <div className="text-white text-[13px] md:text-[15px] font-book leading-[1.8] space-y-4">
            <p>
              There are many music promotion companies in the music industry,
              offering different music marketing
              <br className="hidden md:block" />
              strategies, from Indie Music Academy to Playlistpush.
            </p>

            <p>
              Our online music promotion services offer help promoting artists,
              from cheap music promotion that
              <br className="hidden md:block" />
              includes single music submissions to overall music promotion to
              TikTok influencers, Spotify music
              <br className="hidden md:block" />
              promotion, Spotify ads, YouTube channels, radio promotion, and
              more.
            </p>

            <p>
              Professional consulting services and social media digital
              marketing are expected to be available soon.
              <br />
              Our services are independent music promotions.
              <br />
              Visit our{" "}
              <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                music guide hub
              </span>{" "}
              , and our{" "}
              <span className="underline cursor-pointer hover:text-[#83FF90] transition-colors">
                partners page
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-r from-[#110813] via-[#150b1a] to-[#290001] py-4 px-4 border-t border-white/5">
        <div className="max-w-[1150px] mx-auto flex items-center justify-center gap-6">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              width="145"
              height="40"
              className="transition-transform duration-300 hover:opacity-80"
            />
          </Link>

          <p className="text-white text-sm font-light text-center">
            © {new Date().getFullYear()} OneSubmit. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
