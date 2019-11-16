import React from "react";

// ─── STYLES ─────────────────────────────────────────────────────────────────────
import "@styles/tailwind.css";
import "@styles/global.scss";

export default () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div id="inner" className="px-8 py-12">
        <img
          src="https://i.postimg.cc/yNRpZV4Y/logo.jpg"
          alt=""
          className="h-10"
        />
        <img
          src="https://i.postimg.cc/jjX4yB17/img.jpg"
          alt=""
          className="mt-6 rounded-lg shadow-xl"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          You can work from anywhere.
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vaction.
        </p>
        <div className="mt-4">
          <a
            href="#top"
            className="inline-block px-5 py-3 shadow-lg rounded-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold"
          >
            Book your escape
          </a>
        </div>
      </div>
      {/*─── END INNER ───────────────────────────────────────────────────*/}
    </div>
  );
};
