const kanaPairs = [
    { in: "ら", out: "ぁ" },
    { in: "り", out: "ぃ" },
    { in: "る", out: "ぅ" },
    { in: "れ", out: "ぇ" },
    { in: "ろ", out: "ぉ" },
];

export default function replaceHiragana(text: string): string {
    let result = "" + text;

    kanaPairs.forEach((pair) => (result = result.split(pair.in).join(pair.out)));

    return result;
}
