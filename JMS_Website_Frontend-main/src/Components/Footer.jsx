import React, { useEffect, useRef, useState } from "react";
import Anime from "./Anime";

function Footer() {
  return ( 
    <div className="text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-[5px] pl-4 md:pl-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="underline underline-offset-2 pb-[20px] text-2xl font-bold">About Us</h1>
          <div className="pl-4 md:pl-0 md:items-left md:text-left">
          hellojshfbghsifbsidhb sdhbvshdfkcbhidskbchksdn csidvbnihfksb c sdijfhcnsujdkncusjkdl uosdhcnuosldjfhcn osduhfncjhk
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
            <h1 className="underline underline-offset-2 pb-[20px] flex flex-row md:justify-around text-2xl font-bold">Links</h1>
            <div className="flex flex-col gap-[10px] md:gap-[5px] md:pl-0 justify-center md:items-start md:text-left">
              <div className="cursor-pointer hover:text-blue-500"><a href="/">Home</a></div>
              <div className="cursor-pointer hover:text-blue-500"><a href="#about">About Us</a></div>
              <div className="cursor-pointer hover:text-blue-500">Library</div>
              <div className="cursor-pointer hover:text-blue-500">Rules</div>
              <div className="cursor-pointer hover:text-blue-500">Admins</div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center">
            <h1 className="underline underline-offset-2 pb-[20px] text-2xl font-bold">Contact Us</h1>
            <div className="flex flex-col gap-[10px] md:gap-[5px] md:pl-0 justify-center md:items-start md:text-left">
              <div className="cursor-pointer">Address</div>
              <div className="cursor-pointer">Phone Number</div>
              <div className="cursor-pointer">Email Id</div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center">
            <h1 className="underline underline-offset-2 pb-[20px] text-2xl font-bold">Follow Us</h1>
            <div className="flex gap-5 ">
              <div className="text-sm">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                      alt="Image"
                      height={30}
                      width={30}
                  />
              </div>
              <div className="text-sm">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Image"
                      height={30}
                      width={30}
                  />
              </div>
              <div className="text-sm">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Image"
                      height={30}
                      width={30}
                  />
              </div>
              <div className="text-sm">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="Image"
                      height={30}
                      width={30}
                  />
              </div>
            </div>
        </div>
      </div>
      <div className="pt-10">
        <hr className="w-4/5 h-10 mx-auto" />
      </div>
      <div className="relative flex flex-row items-center justify-center">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczNOHKK_fmL0VuRE5IEVU-patZOTHIbdCTTIXaHwdpdhyxXNCWBLxP46oAPBbm8BmH7Cqun-1-jIH7p5n4DAdTjtsSCNSGzsWFfd0h9HGWu1AsPosaVxaXZzp6t922e8jYanAoJqJC3leH0T1_gaelJn=w640-h640-s-no-gm?authuser=0"
          alt="No image"
          height={50}
          width={50}
          className="rounded-lg mr-4 "
        />
        <div className="text-white">
          <Anime />
        </div>
      </div>
      <div className="flex pl-[20px] justify-center pb-[20px]">
        Made with Love ❤️ by JMS
      </div>
    </div>
  );
}

export default Footer;
