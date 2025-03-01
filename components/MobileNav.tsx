"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-1 px-4">
            <Image
              src={"/icons/logo.svg"}
              width={34}
              height={34}
              alt="inoti-logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Inoti
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((sidebarLink) => {
                  const isActive =
                    pathname === sidebarLink.route ||
                    pathname.startsWith(`${sidebarLink.route}/`);
                  return (
                    <SheetClose asChild key={sidebarLink.route}>
                      <Link
                        href={sidebarLink.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}>
                        <Image
                          src={sidebarLink.imgURL}
                          alt={sidebarLink.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}>
                          {sidebarLink.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
