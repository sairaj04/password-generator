import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import pic from "../assets/favicon.ico";

export default function Header() {
  return (
    <header className="h-14 flex px-4 items-center justify-between font-semibold border-b">
      <div className="flex space-x-1 items-center">
        <h1 className="text-lg lg:text-3xl md:text-2xl sm:text-xl">
          Password Generator
        </h1>
      </div>
      <div className="flex">
        <Link
          className="flex space-x-1 items-center"
          href="https://github.com/sairaj04/password-generator"
        >
          <AiFillGithub className="h-8 w-8" />
          <h1>Github</h1>
        </Link>
      </div>
    </header>
  );
}
