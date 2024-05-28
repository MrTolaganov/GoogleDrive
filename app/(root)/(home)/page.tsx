import Header from "@/components/shared/header";
import Lists from "@/components/shared/lists";
import { db } from "@/lib/firebase";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs, query, where } from "firebase/firestore";

const getData = async (uid: string, type: "files" | "folders") => {
  let data: any[] = [];
  const q = query(
    collection(db, type),
    where("uid", "==", uid),
    where("isArchive", "==", false),
    where("isDocument", "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};

export default async function HomePage() {
  const { userId } = auth();
  const files = await getData(userId!, "files");
  const folders = await getData(userId!, "folders");

  return (
    <>
      <Header label={"My drive"} isHome />
      <Lists
        files={JSON.parse(JSON.stringify(files))}
        folders={JSON.parse(JSON.stringify(folders))}
      />
    </>
  );
}
