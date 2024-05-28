"use client";
import { useFolder } from "@/hooks/use-folder";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function FolderModal() {
  const { isOpen, onClose } = useFolder();
  const { user } = useUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const promise = addDoc(collection(db, "folders"), {
      name: values.name,
      timestamp: serverTimestamp(),
      uid: user?.id,
      isArchive: false,
      isDocument: false,
    }).then(() => {
      form.reset();
      onClose();
      router.refresh();
    });
    toast.promise(promise, {
      loading: "Loading..",
      success: "Folder created",
      error: "Error creating folder",
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>New Folder</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Folder name"
                        {...field}
                        className="rounded-none outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end items-center space-x-2">
                <Button variant={"link"} size={"sm"} type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant={"outline"} size={"sm"} type="submit">
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
