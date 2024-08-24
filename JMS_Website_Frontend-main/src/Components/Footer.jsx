import React, { useEffect, useRef, useState } from "react";
import Anime from "./Anime";

function Footer() {
  return ( 
    <div className="text-white">
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
