//Question 3
//Check color format
const colorFormater = color => {
    if (color.includes(",")) {
        return "rgb";
    } else {
        return "hex";
    }
}

//Convert color code
const rgbConverter = color => {
    if (colorFormater(color) === "rgb") {
        //RGB to HEX
        //Get each color of "R", "G", "B"
        let colorRGB = color.split(",");
        //Convert number to hex
        for (i of colorRGB.keys()) {
            // Loop for convert 3 times (R, G, B)
            colorRGB[i] = parseInt(colorRGB[i]).toString(16).padStart(2, '0');
        }
        return colorRGB.join("").toUpperCase(); // Combine the RGB string
    } else if (colorFormater(color) === "hex") {
        //HEX to RGB
        //Get each color of "R", "G", "B"
        let colorHEX = [];
        //Slice the color code become an array
        colorHEX[0] = color.slice(0, 2); //R
        colorHEX[1] = color.slice(2, 4); //G
        colorHEX[2] = color.slice(4, 6); //B
        //Convert hex to number
        for (i of colorHEX.keys()) {
            // Loop for convert 3 times (R, G, B)
            colorHEX[i] = parseInt(colorHEX[i], 16);
        }
        return colorHEX.join(); // Combine the HEX string
    }
}

const color1 = "0,85,255";
const color2 = "0055FF";

console.log("The Q3 answer is :");
console.log(`The HEX color of (${color1}) is (${rgbConverter(color1)})`);
console.log(`The RGB color of (${color2}) is (${rgbConverter(color2)})`);
console.log("-----------------------------------------");