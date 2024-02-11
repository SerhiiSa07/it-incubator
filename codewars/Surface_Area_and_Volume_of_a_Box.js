// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Solution

function getSize(width, height, depth) {

    const value = width * height * depth

    const area = 2*(width * height) + 2*(height * depth) + 2*(depth * width);

    return [area, value]

}