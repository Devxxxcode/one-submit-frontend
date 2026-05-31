import { GoArrowLeft } from "react-icons/go";
import certImage from "../../assets/one-submit-cre.jpeg";

const Certificate = () => {
    return (
        <div className="w-full min-h-screen flex flex-col px-3 py-4 md:px-6 md:py-6 pb-28 md:pb-6">
            {/* Back Button */}
            <div className="w-fit bg-white/[0.06] border border-white/10 p-2 rounded-xl shadow-sm mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-lg text-primary"
                >
                    <GoArrowLeft />
                    <h2 className="text-xl font-bold text-white ml-4">Back</h2>
                </button>
            </div>

            {/* Certificate Image */}
            <div className="flex-grow flex justify-center items-start md:items-center">
                <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] p-3 md:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
                <img
                    src={certImage}
                    alt="Certificate of Incorporation"
                    className="w-full max-h-[70vh] md:max-h-[78vh] object-contain rounded-xl"
                />
                </div>
            </div>
        </div>
    );
};

export default Certificate;
