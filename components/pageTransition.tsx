"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }): any => {
  const pathname = usePathname();
  return (
    <AnimatePresence key={pathname}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
