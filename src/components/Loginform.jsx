import React from "react";
import LoginLeft from "./LoginLeft";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Loginform = ({ role, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeft />
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md animate-fade-in ">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
          >
            <ArrowLeftIcon size={16} />
            Back to portal
          </Link>
          <div className="mb-8">
            <div className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </div>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
