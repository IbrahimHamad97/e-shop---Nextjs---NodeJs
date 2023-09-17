"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const items = [];
  return (
    <Sheet>
      <SheetTrigger className="flex items-center flex-col gap-1 font-bold px-2">
        <div className="relative">
          <AiOutlineShoppingCart size={24} />
          {items.length > 0 && (
            <div
              className="bg-orange-300 absolute top-0 right-0 w-[12px] h-[12px] 
              rounded-full text-[8px]"
            >
              {items.length}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
