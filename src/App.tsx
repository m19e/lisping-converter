import React from "react";
import Converter from "./components/Converter";

export default function App() {
    return (
        <div className="flex flex-col w-screen h-screen bg-gray-200">
            <div className="flex justify-center items-center">
                <h1 className="m-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">舌足らず変換ツール</h1>
            </div>
            <Converter />
        </div>
    );
}
