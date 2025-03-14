import ParkRetrieval from "@/components/ParkDisplay/ParkRetrieval";

interface ParkPageProps {
    params: Promise<{
      id: number;
    }>;
}

/**
 * The page for a given park.
 * @returns The park tsx component.
 */
export default async function ParkPage({params}: ParkPageProps) {
  const {id: parkID} = await params;
  return (
    <div className="text-3xl text-black font-figtree flex justify-center items-center">
      <ParkRetrieval parkID={parkID} />
    </div>
  );
}