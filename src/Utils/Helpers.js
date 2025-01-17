export const rgbToHex = (r,g,b) => 
    "#" + 
    [r,g,b]
        .map((x) => {
            const hex = x.toString(16);
            return hex.lenght === 1 ? "0" + hex : hex;
        })
        .join("");