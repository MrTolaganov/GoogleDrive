"use client";
import { usePlan } from "@/hooks/use-plan";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "../ui/dialog";
import Image from "next/image";
import { planArray } from "@/constants";
import PlanCard from "../card/plan-card";

export default function PlanModal() {
  const { isOpen, onClose } = usePlan();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <Image src={"/one.svg"} alt="One" width={50} height={50} />
        </DialogHeader>
        <div className="opacity-75 text-center">Choose Google One plan that is right for you</div>
        <div className="grid grid-cols-2 gap-4">
          {planArray.map(plan => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              options={plan.options}
              price={plan.price}
              priceId={plan.priceId}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
