
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroCarousel } from "./hero-arousel";

export function Hero() {
  

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <HeroCarousel />
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-700 max-w-[480px] text-center">
          Learn, practice, and master new languages with our.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="w-5 h-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton mode="modal" forceRedirectUrl={"/learn"}>
                <Button
                  size={"lg"}
                  variant={"primaryOutline"}
                  className="w-full"
                >
                  I alredy have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button className="w-full" size={"lg"} variant={"secondary"} asChild>
                <Link href={"/lean"}>
                Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
