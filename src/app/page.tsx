"use client";

import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const clickHandler = () => {
    console.log("hey again");
  };
  return (
    <div className="p-2">
      <Button size={"lg"} variant={"default"} onClick={clickHandler}>
        hey man
      </Button>
    </div>
  );
}
