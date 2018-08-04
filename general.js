var options = {
    gridType: 'hexa',
    globalSize: 60,
    slowSize: 2,
    withInter: false,
    minNeighToBorn: 2,
    maxNeighToBorn: 2,
    minNeighToLive: 2,
    maxNeighToLive: 2,
}

var theme;

function setGridType(gridType) {
    switch (gridType) {
        case "hexa":
            options = {
                gridType: 'hexa',
                globalSize: 100,
                slowSize: 4,
                withInter: true,
                minNeighToBorn: 2,
                maxNeighToBorn: 2,
                minNeighToLive: 2,
                maxNeighToLive: 3,
            };
            break;
        case "original":
            options = {
                gridType: 'original',
                globalSize: 100,
                slowSize: 4,
                withInter: true,
                minNeighToBorn: 3,
                maxNeighToBorn: 3,
                minNeighToLive: 2,
                maxNeighToLive: 3,
            };
            break;
        default:
            console.error(`Error on type of grid : ${gridType}`);
            break;
    }
}