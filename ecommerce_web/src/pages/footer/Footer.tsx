import React from "react";
import UpdatePart from "./UpdatePart/UpdatePart";
import Twitter from "../../assets/icon/SocialMediaIcon/Twitter";
import Facebook from "../../assets/icon/SocialMediaIcon/Facebook";
import Instagram from "../../assets/icon/SocialMediaIcon/Instagram";
import Github from "../../assets/icon/SocialMediaIcon/Github";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative bg-[#F0F0F0] h-[70vh] mt-40">
      <div className="absolute top-[-88px] left-60">
        {" "}
        <UpdatePart />
      </div>
      <div className="container h-full w-full mx-auto mt-20 grid grid-cols-5 gap-8 px-4 place-items-center">
        {/* SHOP.CO Column */}
        <div>
          <h1 className="font-bold text-black text-2xl">SHOP.CO</h1>
          <p className="text-[14px] text-[#00000099] mt-2">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <Twitter />
            <Facebook />
            <Instagram />
            <Github />
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h1 className="font-medium text-[16px] text-black">Company</h1>
          <ul className="mt-2 space-y-2 text-[#00000099]">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h1 className="font-medium text-[16px] text-black">Help</h1>
          <ul className="mt-2 space-y-2 text-[#00000099]">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Column */}
        <div>
          <h1 className="font-medium text-[16px] text-black">FAQ</h1>
          <ul className="mt-2 space-y-2 text-[#00000099]">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h1 className="font-medium text-[16px] text-black">Resources</h1>
          <ul className="mt-2 space-y-2 text-[#00000099]">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
