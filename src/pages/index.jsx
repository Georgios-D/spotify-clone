import Sidebar from "@/components/Sidebar";
import React from "react";

export default function index() {
    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-1 overflow-y-auto">
                <Sidebar />
                <main className="flex-1">Main</main>
            </div>
            <footer className="h-[59px]">Player</footer>
        </div>
    );
}
