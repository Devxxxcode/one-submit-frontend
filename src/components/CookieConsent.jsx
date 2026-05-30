import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // If no choice has been made, show the popup
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    // Basic local storage settings that "don't matter either way"
    localStorage.setItem("essentialCookies", "enabled");
    localStorage.setItem("analyticsCookies", "enabled");
    localStorage.setItem("preferenceCookies", "enabled");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    // Ensure non-essential settings are disabled
    localStorage.setItem("essentialCookies", "enabled"); // Essentials are always needed
    localStorage.setItem("analyticsCookies", "disabled");
    localStorage.setItem("preferenceCookies", "disabled");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a] border-t border-gray-800 p-4 shadow-2xl z-[9999999999] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-300 text-center md:text-left">
        <p className="font-semibold text-white mb-1">We value your privacy</p>
        <p>
          We use minimal local storage cookies to enhance your experience. These are basic settings 
          for analytics and preferences that don't track sensitive data. You can choose to accept or reject them.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={handleReject}
          className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-transparent border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Reject All
        </button>
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
