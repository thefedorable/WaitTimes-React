import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { Ride } from "@/lib/objects/Ride";
import { ellipsis } from "@/lib/utils";

interface RideProps {
    ride: Ride;
    landID: number;
    parkID: number;
  }
/**
 * Component for displaying the ride info with an image.
 * @returns JSX for the ride display.
 */
export default function RideCard({ ride, landID, parkID }: RideProps) {
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

  /**
 * Get image for the ride.
 * @returns The image path for the ride.
 */
  const getRideImage = (id: number): string => {
    return `/ParksIcons/${parkID}/${landID}/${id}.png`;
  }

  return (
    <div className="flex flex-row justify-center w-full p-2">
      <Card className="w-full max-w-[325px] flex flex-row overflow-hidden">
        {/* Image container with 16:9 aspect ratio on the left side */}
        <div className="w-1/4 sm:w-1/3 relative">
          <div className="aspect-w-16 aspect-h-9 h-full">
            <Image 
              src={getRideImage(ride.getId())}
              alt={ride.getName()} 
              width={1000}
              height={1000}
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>
        
        {/* Card content on the right side */}
        <div className="w-3/4 sm:w-2/3">
          <CardHeader className="p-1">
            <CardTitle className="text-base">
              {ellipsis(ride.getName(), 45)}
            </CardTitle>
            <CardContent className="p-1">
              <p className="text-sm">
                {rideTime()}
              </p>
            </CardContent>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}