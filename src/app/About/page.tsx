import React from "react";
import { Image } from "@chakra-ui/react";
const img10 = '/10.jpeg'
const page = () => {
  return (
    <div className="bg-black text-white ">
      <div className="w-full h-screen">
        <div className="h-3/4">
          <Image
            src={img10}
            alt=""
            boxSize="100%"
            objectFit="cover" // Optional: Ensures the image covers its container
          />
        </div>
      </div>
      <div className=" -mt-24 md:-mt-0 px-14 lg:px-72 md:px-20 pb-12">
        Operating under the Ziauddin Trust, 
        <span className="border-b">Dr. Ziauddin Group of Hospitals </span>is one
        of the largest private groups in the country. Its mission has been to
        reach out to the masses and cater to their needs for quality health care
        facilities at affordable rates in the country. It began with a small
        maternity home and has grown exponentially over the years to include
        five hospitals, including three tertiary-care facilities, responding to
        the healthcare needs of the people.
        <br />
        These hospitals are:
        <br />
        <span className="border-b">
          Dr. Ziauddin Hospital, North Nazimabad Campus
        </span>
        <br />
        <span className=" border-b">Dr. Ziauddin Hospital, Clifton Campus</span>
        <br />
        <span className=" border-b">Dr. Ziauddin Cancer Hospital</span>
        <br />
        <span className=" border-b">
          Dr. Ziauddin Hospital , Keamari Campus
        </span>
        <br />
        <span className="border-b">Dr. Ziauddin Memorial Hospital</span>
        <br />
        <span className="border-b">Boat Basin Executive Clinics</span>
        <br />
        All facilities under Dr. Ziauddin Group of Hospitals are equipped with
        state-of-the-art equipment and focused on providing services of the
        highest quality. The diagnostic technologies, and medical and surgical
        treatments provided, are controlled to keep pace with the technological
        advancements. The planning and development team of Dr. Ziauddin Group of
        Hospitals is working continuously to increase the patient capacity at
        each of the hospitals to make quality health care accessible to as many
        people as possible. Dr. Ziauddin Group of Hospitals competes with some
        of the biggest names in the healthcare industry and aspires to become
        the preferred healthcare facility for our people and a symbol of
        national pride for all. Zia Medical Center located in Dubai, UAE is a
        part of Dr. Ziauddin Group of Hospitals. ZMC practices the same standard
        of excellence and provides premium healthcare to the residents of Dubai.
      </div>
    </div>
  );
};

export default page;
