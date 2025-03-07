import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import RideCard from "./RideCard";

/**
* Component for displaying the land info with each ride.
* @returns JSX for the land display.
*/
export default function LandCard() {
    return (
        <Card className="w-full max-w-[700px] mx-auto flex flex-row overflow-hidden">       
          <div className="w-full">
            <CardHeader>
              <CardTitle>Frontierland</CardTitle>
            </CardHeader>
            <CardContent>
              <RideCard />
            </CardContent>
          </div>
        </Card>
    );
}