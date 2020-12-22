export default function Converter() {
    return (
        <>
            <div className="flex-grow flex justify-center items-center p-4">
                <textarea placeholder="テキストを入力" className="h-full w-full max-w-4xl rounded-md resize-none focus:outline-none"></textarea>
            </div>
            <div className="flex justify-center items-center">
                <button className="inline-block px-6 py-2 text-md font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">
                    変換
                </button>
            </div>
            <div className="flex-grow flex justify-center items-center p-4">
                <textarea placeholder="変換されたテキスト" className="h-full w-full max-w-4xl rounded-md resize-none focus:outline-none"></textarea>
            </div>
        </>
    );
}
