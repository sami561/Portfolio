"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectLabel } from "@radix-ui/react-select";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  { icon: <FaPhoneAlt />, text: " +216 24 580 302", title: "Phone" },
  {
    icon: <FaEnvelope />,
    text: "semiayachi.contact@gmail.com",
    title: "Email",
  },
  { icon: <FaMapMarkerAlt />, text: "Tunisia, Sousse", title: "address" },
];
const Contact = () => {
  return (
    <motion.section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col  xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets Work together</h3>
              <p className=" text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
                recusandae reiciendis consequuntur maxime quaerat ipsa nobis
                sequi tempora est. Atque eveniet necessitatibus iste explicabo
                adipisci illum cumque sunt nam!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="Firstname" />
                <Input type="lastName" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/*  <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service </SelectLabel>
                    <SelectLabel>Web Development </SelectLabel>
                    <SelectLabel>UI/UX </SelectLabel>
                    <SelectLabel>Logo Design </SelectLabel>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Textarea
                className="h-[200px] "
                placeholder="type your  message here ."
              />
              <Button size="lg">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex  items-center xl justify-end oder-1 xl:order-none mb-8 xl:mb-2">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[42px] h-[42px] xl:h-[62px] xl:w-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center gap-5 ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.text}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
