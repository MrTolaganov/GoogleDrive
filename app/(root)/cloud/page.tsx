import Header from "@/components/shared/header";
import ListItem from "@/components/shared/list-item";
import Storage from "@/components/shared/storage";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/firebase";
import { IFolderAndFile } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs, query, where } from "firebase/firestore";

const getData = async (uid: string) => {
  let data: any[] = [];
  const q = query(
    collection(db, "files"),
    where("uid", "==", uid),
    where("isArchive", "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};

export default async function CloudPage() {
  const { userId } = auth();
  const files = (await getData(userId!)) as IFolderAndFile[];
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);

  return (
    <>
      <Header label="Storage" />
      <Storage totalSize={totalSize} />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>File size</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map(file => (
            <ListItem key={file.id} item={file} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
