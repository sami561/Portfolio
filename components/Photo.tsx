"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[294px] xl:w-[498px] xl:h-[498px] mix-blend-lighten rounded-full"
        >
          <Image
            src="/assets/photo-modified.png"
            alt="test"
            priority
            quality={100}
            fill
            className="object-contain rounded-full  "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
