"use client";
import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
          />
        </div>
        <div>
          <Link href={"/find-jobs"}>
            <span className="text-gray-400 mr-4 cursor-pointer">Find Jobs</span>
          </Link>
          <Link href={"/find-companies"}>
            <span className="text-gray-400 cursor-pointer">
              Browse Companies
            </span>
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        {session ? (
          <MenuAuth/>
        ) : (
          <>
            <Button variant={"link"} onClick={() => router.push("/signin")}>
              Login
            </Button>
            <Button onClick={() => router.push("/signup")}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
