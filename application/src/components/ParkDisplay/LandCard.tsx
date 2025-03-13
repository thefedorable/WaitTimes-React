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
    parkID: number;
  }

/**
* Component for displaying the land info with each ride.
* @returns JSX for the land display.
*/
export default function LandCard({ land, parkID }: LandProps) {
    return (
        <div className = "p-2">
            <Card className="p-2w-full max-w-[500px] mx-auto flex flex-row overflow-hidden">       
            <div className="w-full">
                <CardHeader>
                <CardTitle className="text-2xl font-bold font-figtree">{land.getName()}</CardTitle>
                </CardHeader>
                <CardContent>
                    {land.getRides().map((ride, index) => (
                        <RideCard key={index} ride={ride} landID={land.getID()} parkID={parkID} />
                    ))}
                </CardContent>
            </div>
            </Card>
        </div>
    );
}