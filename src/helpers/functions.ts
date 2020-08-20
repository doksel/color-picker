export const rgb2hex = (r: number, g: number, b: number) => (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
);

export const hex2rgb = (c: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}