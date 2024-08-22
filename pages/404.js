

import Link from "next/link";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 fixed top-0 left-0 w-screen h-screen bg-secondary">
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-800 text-center">
        <BiErrorCircle className="text-6xl" />
      </h1>
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="md:text-4xl text-2xl font-semibold text-gray-800 text-center">
          404 - برگه درخواست شما یافت نشد
        </h1>
        <p className="text-gray-600 text-center">
        صفحه مورد نظر شما وجود ندارد.
        </p>
      </div>
      <Link
        href="/"
        className="px-secondary py-2 shadow hover:bg-primary hover:text-white rounded-primary"
      >
        به صفحه اول برگرد
      </Link>
    </section>
  );
};

export default NotFound;
