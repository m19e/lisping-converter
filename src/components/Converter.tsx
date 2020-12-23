import React, { useState } from "react";
import replaceHiragana from "../libs/converter";

export default function Converter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.currentTarget.value);
    };

    const convert = () => {
        setOutput(replaceHiragana(input));
    };

    return (
        <>
            <div className="flex-grow flex justify-center items-center p-4">
                <textarea
                    onChange={onInputChange}
                    placeholder="テキスト(ひらがな)を入力"
                    className="h-full w-full max-w-4xl rounded-md resize-none focus:outline-none"
                ></textarea>
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={() => convert()}
                    className="inline-block px-6 py-2 text-md font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
                >
                    変換
                </button>
            </div>
            <div className="flex-grow flex justify-center items-center p-4">
                <textarea
                    value={output}
                    placeholder="変換されたテキスト"
                    className="h-full w-full max-w-4xl rounded-md resize-none focus:outline-none"
                ></textarea>
            </div>
        </>
    );
}
