import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-blue-600 h-80 flex items-center pl-5">
        <Link href="/">
          <a className="text-white text-xl font-semibold">Movie searcher</a>
        </Link>
      </header>
      <div className="container px-8 mx-auto mt-8">{children}</div>
    </>
  );
}
