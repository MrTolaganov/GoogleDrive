import Image from "next/image";

interface EmptyProps {
  sm?: boolean;
}

export default function Empty({ sm }: EmptyProps) {
  return (
    <div className="w-full flex flex-col justify-center space-y-2">
      <Image
        src={"/empty.svg"}
        alt="Empty"
        width={sm ? 100 : 200}
        height={sm ? 100 : 200}
        className="mx-auto"
      />
      <h1 className="text-3xl text-center">Empty</h1>
      <p className="text-center text-gray-500">There is nothing here. Please check again.</p>
    </div>
  );
}
