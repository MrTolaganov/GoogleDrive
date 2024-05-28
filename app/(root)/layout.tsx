import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ChildProps } from "@/types";

export default function RootLayout({ children }: ChildProps) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="w-full min-h-[90vh] relative top-[10vh] pl-72 bg-[#F6F9FC] dark:bg-[#1f1f1f] pr-4">
        <div className="min-h-[90vh] bg-white dark:bg-black p-4">{children}</div>
      </main>
    </div>
  );
}
