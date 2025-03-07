import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Big from "../../../public/ParksIcons/Big_Thunder_Moutain_Railroad.jpg";

/**
 * Component for displaying the ride info with an image.
 * @returns JSX for the ride display.
 */
export default function RideCard() {
  return (
    <div className="flex flex-row justify-center w-full">
      <Card className="w-full max-w-[650px] flex flex-row overflow-hidden">
        {/* Image on the left side */}
        <div className="w-1/4 sm:w-1/3 bg-gray-200">
          <Image 
            src={Big.src}
            alt="Big Thunder Mountain Railroad" 
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Card content on the right side */}
        <div className="w-3/4 sm:w-2/3">
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-sm sm:text-base md:text-lg">Big Thunder Mountain Railroad</CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
            <p className="text-xs sm:text-sm">10 min</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}