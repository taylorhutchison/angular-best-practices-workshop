interface IRectangle {
    width: number;
    height: number;
}

function Area(shape: IRectangle) {
    return shape.width * shape.height;
}
