import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image";
  import Big from "../../../public/ParksIcons/big-thunder-mountain-railroad-00.avif";
import { Ride } from "@/lib/actions/Ride";
import { ellipsis } from "@/lib/utils";
  
  interface RideProps {
      ride: Ride;
    }
  /**
   * Component for displaying the ride info with an image.
   * @returns JSX for the ride display.
   */
  export default function RideCard({ ride }: RideProps) {

    /**
     * Get the ride time.
     * @returns The ride time as a string.
     */
    const rideTime = (): string =>{
      if (ride.getIsOpen()) {
        if(ride.getWaitTime() === 0){
          return "Open"; 
        } else {
          return ride.getWaitTime() + " min";
        }
      } else {
        return "Closed";
      }
    }
    return (
      <div className="flex flex-row justify-center w-full p-2">
        <Card className="w-full max-w-[325px] flex flex-row overflow-hidden">
          {/* Image container with 16:9 aspect ratio on the left side */}
          <div className="w-1/4 sm:w-1/3 relative">
            <div className="aspect-w-16 aspect-h-9 h-full">
              <Image 
                src={Big.src}
                alt={ride.getName()} 
                width={160}
                height={90}
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          {/* Card content on the right side */}
          <div className="w-3/4 sm:w-2/3">
            <CardHeader className="p-2">
              <CardTitle className="text-xl">{ellipsis(ride.getName(), 40)}</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-2xl">{rideTime()}</p>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }