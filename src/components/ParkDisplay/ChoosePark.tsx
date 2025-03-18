"use client";
import { Button } from "@/components/ui/button";
import getParks from "@/lib/actions/ParkList";
import Image from "next/image";
// <ParkRetrieval parkID={16} />
/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function ChoosePark() {
  const items = getParks();

  return (
    <div className="p-6 text-3xl text-black font-figtree flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {items.map((item) => (
          <Button
            key={item.id}
            onClick={() => (window.location.href = `/${item.id}`)}
            variant="ghost"
            size="sm"
            className="p-0 h-auto w-auto overflow-hidden"
            asChild
          >
            <div className="inline-block">
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <span className="sr-only">{item.name}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}