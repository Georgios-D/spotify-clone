import Link from "next/link";
import { Home } from "react-feather";
import { spotifyApi } from "@/pages/_app";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Sidebar() {
    const {
        data: playlists,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["playlists"],
        queryFn: async () => (await spotifyApi.getUserPlaylists()).body.items,
    });
    const router = useRouter();
    function renderPlaylists() {
        if (isLoading)
            return Array(10)
                .fill(null)
                .map((_, index) => (
                    <div
                        className="mb-1.5 h-6  animate-pulse rounded-lg bg-neutral-800"
                        style={{
                            width: Math.floor(Math.random() * 40 + 40) + "%",
                        }}
                        key={index}
                    ></div>
                ));

        if (isError) return "error...";

        return playlists.map((playlist) => (
            <Link
                href={"/playlists/" + playlist.id}
                className={
                    "block py-1  transition-colors hover:text-text" +
                    (router.query.id === playlist.id
                        ? " text-text"
                        : " text-text-dimmed")
                }
                key={playlist.id}
            >
                {playlist.name}
            </Link>
        ));
    }

    return (
        <aside className="w-full max-w-xs overflow-y-scroll bg-bg p-6 max-md:hidden">
            <Link
                href="/"
                className="transition-color flex w-max items-center gap-4 text-text-dimmed hover:text-text"
            >
                <Home className="h-6 w-6" />
                <p className="font-semibold">Home</p>
            </Link>
            <hr className="my-3 border-text-dimmed/50" />
            <div className="">{renderPlaylists()}</div>
        </aside>
    );
}
