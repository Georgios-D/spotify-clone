import { ChevronDown } from "react-feather";

export default function PlayerOverlay({
    setPlayerOverlayIsOpen,
    playerOverlayIsOpen,
    track,
}) {
    return (
        <div
            className="fixed top-0 h-screen w-screen bg-bg-dimmed transition-transform duration-300 md:hidden"
            style={{
                transform: `translateY(${playerOverlayIsOpen ? "0%" : "100%"})`,
            }}
        >
            <div
                className="fixed top-4 left-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-text-dimmed/20"
                onClick={() => setPlayerOverlayIsOpen(false)}
            >
                <ChevronDown />
            </div>
            <div className="px-5 pb-10 pt-14">
                <div className="mx-auto mb-5 aspect-square max-w-[300px]">
                    <img
                        src={track.album.images[0]?.url}
                        alt=""
                        className="h-full w-full"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-bold">{track.name}</h2>
                    <p className="text-text-dimmed">{track.artists[0].name}</p>
                </div>
            </div>
        </div>
    );
}
