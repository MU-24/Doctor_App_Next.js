import React from "react";
import { Image } from "@chakra-ui/react";

const img5 = "/5.jpeg";
const img12 = "/12.jpeg";
const img1 = "/1.jpeg";
const img6 = "/6.jpeg";
const img3 = "/3.jpeg";
const img4 = "/4.jpeg";
const Blogs = () => {
  return (
    <div>
      <div className="h-full w-full bg-black">
        <div className="w-full mx-auto py-10 px-4 md:px-8">
          <div className=" mx-auto text-center ">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl dark:text-white pt-20 border-b-8 inline-block">
              Our Blogs Regarding Exercise or treatment
            </h2>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 pt-16 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="/Diabetes">
                <Image
                  src={img5}
                  alt="h"
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Diabetes Patient
                </h4>
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="/Jaundice">
                <Image
                  src={img12}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Jaundice Patient
                </h4>
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="/Flu">
                <Image
                  src={img1}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Flu Patient
                </h4>
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="/Cough">
                <Image
                  src={img6}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Cough Patient
                </h4>
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="Weight">
                <Image
                  src={img3}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Weight Loss
                </h4>
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
              <a href="/Heart">
                <Image
                  src={img4}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <h4 className="text-lg font-semibold leading-6 text-white hover:text-teal-100">
                  Heart Attack
                </h4>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
