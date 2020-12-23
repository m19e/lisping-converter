const kanaPairs = [
    { in: "ら", out: "ぁ" },
    { in: "り", out: "ぃ" },
    { in: "る", out: "ぅ" },
    { in: "れ", out: "ぇ" },
    { in: "ろ", out: "ぉ" },
    { in: "い", out: "ふぃ" },
    { in: "こ", out: "ほ" },
    { in: "し", out: "ひ" },
    { in: "す", out: "ひゅ" },
    { in: "ぜ", out: "ぇ" },
    { in: "せ", out: "へ" },
    { in: "だ", out: "ら" },
    { in: "ちゃ", out: "ひゃ" },
    { in: "た", out: "ひゃ" },
    { in: "つ", out: "ふ" },
    { in: "て", out: "へ" },
    { in: "と", out: "ほ" },
    { in: "べ", out: "へ" },
    // { in: "", out: "" },
];

const kanaMap: Map<string, string> = new Map(kanaPairs.map((p) => [p.in, p.out]));

const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
};

export default function replaceHiragana(text: string): string {
    const result = text
        .split("")
        .map((c) => {
            let char = "" + c;
            if (kanaMap.has(c) && getRandomInt() < 5) {
                char = kanaMap.get(c) ?? c;
            }
            return char;
        })
        .join("");

    return result;
}
