export default function fiveMinuteCacheImage(src: string) {
    const date = new Date();
    const coff = 1000 * 60 * 5;
    return `${src}?${(new Date(Math.round(date.getTime() / coff) * coff)).getTime()}`;
}