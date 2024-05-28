"use client";
import { Loader, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Item from "./item";
import { Progress } from "../ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import PopoverActions from "./popover-actions";
import { usePlan } from "@/hooks/use-plan";
import { useSubscription } from "@/hooks/use-subscription";
import { byteConverter } from "@/lib/utils";

export default function Sidebar() {
  const { onOpen } = usePlan();
  const { isLoading, subscription, totalStorage } = useSubscription();
  const totalValue = subscription === "Basic" ? 15_000_000 : 15_000_000_0;

  return (
    <div className="h-[90vh] w-72 fixed top-[10vh] left-0 z-30 bg-[#F6F9FC] dark:bg-[#1f1f1f] border-r">
      <div className="flex flex-col p-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-fit h-12 rounded-full px-6">
              <Plus />
              <span>New</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="px-0 py-2">
            <PopoverActions />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col space-y-6 mt-8">
          {sidebarLinks.map(sidebarLink => (
            <Link key={sidebarLink.path} href={sidebarLink.path}>
              <Item icon={sidebarLink.icon} label={sidebarLink.label} path={sidebarLink.path} />
            </Link>
          ))}
          <div className="flex flex-col space-y-2 mx-4">
            {isLoading ? (
              <div className="w-full flex justify-center">
                <Loader className="animate-spin text-muted-foreground w-4 h-4" />
              </div>
            ) : (
              <>
                <Progress value={totalStorage / totalValue} className="h-2" />
                <span>
                  {byteConverter(totalStorage, 1)} of {subscription === "Basic" ? "1.5" : "15"} GB
                  used
                </span>
              </>
            )}
            <Button className="rounded-full" variant={"outline"} onClick={onOpen}>
              Get more storage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
