import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import { User, Social } from "@/types";
import useStore from "@/store";

import socialColors from "@/constants/socialColors";

interface Props {
  user: User;
  socials: Social[];
}

const Hero = ({ user, socials }: Props) => {
  const { isMobile } = useStore();

  const [text, _] = useTypewriter({
    words: user.description,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="active layout flex-center flex-col text-center overflow-hidden"
    >
      <motion.img
        className="w-40 h-40 mx-auto object-cover my-8"
        animate={{
          scale: [1, 1.6, 2.3, 1.6, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["50%", "25%", "12%", "25%", "50%"],
        }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.5, 0.8, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        src={user.image}
        alt="profile"
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[5px] sm:tracking-[15px]">
          {user.role}
        </h2>

        <h3 className="text-4xl lg:text-6xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="var(--primary)" />
        </h3>
      </div>

      {isMobile && (
        <div className="w-[90vw] flex-center pt-5">
          <div className="w-[90%]">
            {socials.map((social) => {
              return (
                <SocialIcon
                  key={social.id}
                  network={social.name}
                  url={social.url}
                  className="opacity-80"
                  style={{
                    color: socialColors[`${social.name}`],
                  }}
                  fgColor="currentColor"
                  bgColor="transparent"
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
