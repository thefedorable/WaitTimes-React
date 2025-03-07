import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image";
  import Big from "../../../public/ParksIcons/Big_Thunder_Moutain_Railroad.jpg";
import { Ride } from "@/lib/actions/Ride";
  
  interface RideProps {
      ride: Ride;
    }
  /**
   * Component for displaying the ride info with an image.
   * @returns JSX for the ride display.
   */
  export default function RideCard({ ride }: RideProps) {
    return (
      <div className="flex flex-row justify-center w-full">
        <Card className="w-full max-w-[400px] flex flex-row overflow-hidden">
          {/* Image on the left side */}
          <div className="w-1/4 sm:w-1/3 bg-gray-200">
            <Image 
              src={Big.src}
              alt={ride.getName()} 
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Card content on the right side */}
          <div className="w-3/4">
            <CardHeader className="p-2">
              <CardTitle className="text-xl">{ride.getName()} </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-2xl">{ride.getWaitTime()} </p>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }