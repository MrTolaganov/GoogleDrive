"use client";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useSubscription } from "@/hooks/use-subscription";

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  options: string;
  priceId?: string;
}

export default function PlanCard({ name, description, price, options, priceId }: PlanCardProps) {
  const { user } = useUser();
  const { subscription } = useSubscription();

  const onSubmit = () => {
    const promise = axios
      .post("/api/subscription", {
        email: user?.emailAddresses[0].emailAddress,
        fullName: user?.fullName,
        userId: user?.id,
        priceId,
      })
      .then(res => window.open(res.data, "_blank"));
    toast.promise(promise, {
      loading: "Loading...",
      success: "Subscribed!",
      error: "Error subscribing",
    });
  };

  return (
    <div className="border rounded-md p-4">
      <h1 className="text-center text-xl">{name}</h1>
      <div className="text-center mt-4 text-3xl">{description}</div>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          {price !== "Free" && "$"}
          {price}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      {priceId ? (
        <div className="w-full flex justify-center">
          <Button onClick={onSubmit}>
            {subscription === "Basic" ? "Get offer" : "Manage subscription"}
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <Button
            variant={subscription === "Basic" ? "destructive" : "default"}
            disabled={subscription === "Basic"}
            onClick={onSubmit}
          >
            {subscription === "Basic" ? "Current plan" : "Manage subscription"}
          </Button>
        </div>
      )}
      <Separator />
      <p className="mt-3 opacity-75 text-sm">Google One includes</p>
      <div className="flex flex-col space-y-2 mt-4">
        {options.split(", ").map(option => (
          <div key={option} className="flex items-center">
            <Check className="mr-2" size={16} />
            <span className="text-sm">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
