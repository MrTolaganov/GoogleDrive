import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { HelpCircle, Settings } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import UserBox from "./user-box";

export default function Navbar() {
  const { userId } = auth();

  return (
    <div className="h-[10vh] fixed top-0 left-0 right-0 z-30 bg-[#F6F9FC] dark:bg-[#1f1f1f] border-b">
      <div className="flex items-center justify-between my-4 mx-6">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
            <span className="pl-2 text-[22px] opacity-75">Drive</span>
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Link href={"/settings"}>
            <div className="p-2 hover:bg-secondary rounded-full transition" role="button">
              <Settings className="w-5 h-5" />
            </div>
          </Link>
          {userId && <UserBox />}
        </div>
      </div>
    </div>
  );
}
