import { CalendarIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";
import { BellIcon, Book, Share2Icon, Shield, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: FileTextIcon,
    name: "Best Analytics",
    description: "analyse race data and simplify it to you in f1 terms as required. ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image src={"/dem1.png"} alt="" width={1920} height={1080} className="" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Backed by lot of trainning data",
    description: "we aldready know that if A happens B is the result so we use that to predict future outcomes.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image src={"/epic7.png"} alt="" width={1920} height={1080} className="" />
    ),
  },
  {
    Icon: Shield,
    name: "Robust Security",
    description: "Store data locally on your mobile/laptop or on cloud.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 text-wrap lg:col-span-2 ",
    background: (
      <Image src={"/epic6.png"} alt="" width={1000} height={190} className=" pb-20" />
    ),
  },
  {
    Icon: Wallet,
    name: "fit the User",
    description: "Weather you are a f1 driver or f1 tech crew based on it we modify the agent response so you understand it better .",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Image src={"/dem4.png"} alt="" width={1920} height={1080} className=" " />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
