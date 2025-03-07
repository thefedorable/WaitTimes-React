import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import RideCard from "./RideCard";
import { Land } from "@/lib/actions/Land";

interface LandProps {
    land: Land;
  }

/**
* Component for displaying the land info with each ride.
* @returns JSX for the land display.
*/
export default function LandCard({ land }: LandProps) {
    return (
        <div className = "p-2">
            <Card className="p-2w-full max-w-[500px] mx-auto flex flex-row overflow-hidden">       
            <div className="w-full">
                <CardHeader>
                <CardTitle>{land.getName()}</CardTitle>
                </CardHeader>
                <CardContent>
                    {land.getRides().map((ride, index) => (
                        <RideCard key={index} ride={ride} />
                    ))}
                </CardContent>
            </div>
            </Card>
        </div>
    );
}