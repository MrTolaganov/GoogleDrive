"use client";
import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark, shadesOfPurple } from "@clerk/themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  return <SignIn appearance={{ baseTheme: resolvedTheme === "dark" ? dark :  shadesOfPurple}} />;
}
