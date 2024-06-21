import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import GlobalApi from "../_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

async function Header() {
  const categoryList = await GlobalApi.getCategoryList();

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" height={100} width={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList?.map((category) => {
              return (
                <DropdownMenuItem className="flex gap-6 items-center cursor-pointer">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      category?.attributes?.icon?.data?.attributes?.url
                    }
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <h2 className="text-lg">{category?.attributes?.name}</h2>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div
          className="md:flex gap-3 items-center border rounded-full p-2
      hidden"
        >
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
