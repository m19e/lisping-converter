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
    { in: "", out: "" },
];

const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
};

export default function replaceHiragana(text: string): string {
    let result = "" + text;

    kanaPairs.forEach((pair) => {
        if (getRandomInt() < 5) {
            result = result.split(pair.in).join(pair.out);
        }
    });

    return result;
}
