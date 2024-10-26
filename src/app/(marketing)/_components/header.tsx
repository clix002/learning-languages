import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const { userId } = await auth();

  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 h-full">
          <Image
            src={"/logo.svg"}
            alt="logo marketing page"
            height={50}
            width={50}
          />
          <h1 className="text-2xl font-extrabold text-sky-500 tracking-wide">
            Learning Languages
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-sky-500 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            {userId ? (
              <Button asChild variant={"link"}>
                <Link href={"/learn"}>Go to dashboard</Link>
              </Button>
            ) : (
              <UserButton />
            )}
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl={"/learn"}>
              <Button size={"lg"} variant={"default"}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
