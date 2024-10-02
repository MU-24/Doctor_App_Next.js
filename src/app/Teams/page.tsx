import React from 'react'
import { Image } from '@chakra-ui/react'
const page = () => {
  return (
    <div>
      <div className="py-14 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="sm:w-6/12 order-last sm:order-first">
            <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <Image
                      alt='img'
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src="data:image/jpeg;base64,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"
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Dr jack
                      </a>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Surgeon
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <Image
                      alt='img'
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJUmaGCGfzCWsBnRo2S9W9IK8lwK0E-QlarbwzzURjMGmyb_Qpp6VgriBM5w&s"
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Dr James
                      </a>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Doctor
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <Image
                      alt='img'
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEbxQGTIVqf9nk1laIrLqnEMaXUjfS9joUA2f4o6GM7NnTr9p_bZTUWbEug&s"
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Dr mike
                      </a>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Specialist
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <Image
                      alt='img'
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src="https://i.pravatar.cc/150?img=32"
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Dr Annie
                      </a>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">
                      Doctor
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              THE TEAM
            </p>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              Meet Our <span className="text-indigo-600">Team</span>
            </h3>
            <p className="mt-4 text-md leading-7 text-gray-500 font-light">
              You cannot save the world, but you can save the man right in front
              of you.” “God cannot come for us all the time, that is why he sent
              doctors for us.” “Doctor is the profession where knowledge, power,
              and heart come together.” “Doctor is a person who gives people an
              opportunity for a healthy tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
