var options = {
    globalSize: 100,
    slowSize: 1,
    withInter: true,
    minNeighToBorn: 3,
    maxNeighToBorn: 3,
    minNeighToLive: 2,
    maxNeighToLive: 3,
}

var theme;

setGridTypeFromURL();

function setGridTypeFromURL() {
    switch (getUrlParameter('type')) {
        case "hexa":
            options.gridType = 'hexa';
            options.minNeighToBorn = 2;
            options.maxNeighToBorn = 4;
            options.minNeighToLive = 2;
            options.maxNeighToLive = 3;
            break;
        case "original":
            options.gridType = 'original';
            options.minNeighToBorn = 3;
            options.maxNeighToBorn = 3;
            options.minNeighToLive = 2;
            options.maxNeighToLive = 3;
            break;
        default:
            console.error(`Error on type of grid`);
            break;
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}