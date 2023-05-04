import React from "react";
import { Link } from "react-router-dom";

function ButtonKomen() {
  return (
    <div>
      <Link
        to="/login"
        className="group relative inline-block focus:outline-none focus:ring"
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 dark:bg-purple-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5" />

        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest dark:text-white">
          Tambah Komentar
        </span>
      </Link>
    </div>
  );
}

export default ButtonKomen;
