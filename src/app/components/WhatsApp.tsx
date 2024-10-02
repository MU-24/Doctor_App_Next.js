import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "../../../public/WhatsAppIcon.png";
const WhatsApp = () => {

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "9999",
      }}
    >
      <Link href="https://wa.me/+923139963021" target="_blank">
        <Image alt="" width={60} height={60} src={WhatsAppIcon} />
      </Link>
    </div>
  );
};

export default WhatsApp;
