"use client";
import { ArrowBigLeftDash, ChevronDown, Info, LayoutPanelTop, TableProperties } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import PopoverActions from "./popover-actions";
import { useLayout } from "@/hooks/use-layout";
import { useRouter } from "next/navigation";

interface HeaderProps {
  label: string;
  isHome?: boolean;
  isDocument?: boolean;
  isDocumentPage?: boolean;
}

export default function Header({ label, isHome, isDocument, isDocumentPage }: HeaderProps) {
  const { layout, setLayout } = useLayout();
  const { back } = useRouter();

  return (
    <div className="w-full flex items-center justify-between">
      {isHome ? (
        <Popover>
          <PopoverTrigger className="flex justify-start">
            <div className="px-4 py-2 hover:bg-secondary transition rounded-full flex items-center space-x-2">
              <h2 className="text-xl capitalize">{label}</h2>
              <ChevronDown />
            </div>
          </PopoverTrigger>
          <PopoverContent className="px-0 py-2">
            <PopoverActions />
          </PopoverContent>
        </Popover>
      ) : (
        <>
          {isDocumentPage ? (
            <div
              className="flex items-center space-x-2 hover:bg-secondary transition px-4 py-2 rounded-full"
              role="button"
              onClick={() => back()}
            >
              <ArrowBigLeftDash className="w-6 h-6" />
              <div className="text-xl ">{label}</div>
            </div>
          ) : (
            <div className="text-xl">{label}</div>
          )}
        </>
      )}
      {isHome && !isDocument && (
        <div className="flex items-center space-x-2">
          {layout === "list" ? (
            <div
              className="p-2 hover:bg-secondary rounded-full transition"
              role="button"
              onClick={() => setLayout("grid")}
            >
              <TableProperties className="w-5 h-5" />
            </div>
          ) : (
            <div
              className="p-2 hover:bg-secondary rounded-full transition"
              role="button"
              onClick={() => setLayout("list")}
            >
              <LayoutPanelTop className="w-5 h-5" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
