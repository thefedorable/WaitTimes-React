/**
 * Get a list of parks with their id, name, and icon.
 * @returns A list of parks with their id, name, and icon.
 */
export default function getParks(){
    return [
        {
            id: 16,
            name: "Disneyland",
            icon: `/ParksIcons/16/Disneyland.png`,
        },
        {
            id: 17,
            name: "Disney California Adventure",
            icon: `/ParksIcons/17/DisneyCaliforniaAdventure.png`,
        },
        {
            id: 66,
            name: "Universal Studios Hollywood",
            icon: `/ParksIcons/66/UniversalHollywood.png`,
        },
        {
            id: 6,
            name: "Magic Kingdom",
            icon: `/ParksIcons/6/MagicKingdom.png`,
        }
    ];
}