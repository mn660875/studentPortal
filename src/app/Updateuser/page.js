"use client";
import Navbar from "../components/Navbar";

import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
     <div className="hidden md:block">
     <Navbar />
     </div>
      <div className="flex items-center justify-center">
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                GOVERNMENT COLLEGE UNIVERSITY FAISALABAD
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                At GCUF, students are encouraged to engage in innovative
                research, participate in diverse academic programs, and
                contribute positively to society.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="/addstudent"
                  className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <Image id="img-round"
            src="/imgs/uni.jpg"
            alt="uni"
            width={450}
            height={350}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </section>
      </div>
    </div>
  );
}
