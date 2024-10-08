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
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { sendMail } from "../../lib/mail";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendMailer = async (data: any) => {
    await sendMail({
      to: data.Email,
      name: `${data.firstName} ${data.Lastname}`,
      subject: "Contact",
      body: data.message,
    });
  };
  return (
    <motion.section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col  xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form
              onSubmit={handleSubmit(sendMailer)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets Work together</h3>
              <p className=" text-white/60">
                If you'd like to collaborate or discuss any opportunities, feel
                free to contact me. I'm always open to new ideas and projects!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstName"
                  placeholder="Firstname"
                  {...register("firstName")}
                />
                <Input
                  type="lastName"
                  placeholder="Lastname"
                  {...register("Lastname")}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("Email")}
                />
                <Input
                  type="phone"
                  placeholder="Phone"
                  {...register("Phone")}
                />
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
                {...register("message")}
              />
              <Button size="lg">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex  items-center xl justify-end oder-1 xl:order-none mb-8 xl:mb-2">
            <ul className="flex flex-col gap-10 ">
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
