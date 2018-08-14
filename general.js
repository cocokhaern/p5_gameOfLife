var options;
var theme;

function loadParametersAndStuff() {
    options = {
        globalSize: 100,
        slowFactor: 1,
        withInterState: false,
        minNeighToBorn: 3,
        maxNeighToBorn: 3,
        minNeighToLive: 2,
        maxNeighToLive: 3,
        neighLimit: 8,
    };

    setGridTypeFromURL();
    initializeDOMparameters();
}

function setGridTypeFromURL() {
    switch (getUrlParameter('type')) {
        case "hexa":
            options.gridType = 'hexa';
            options.minNeighToBorn = 2;
            options.maxNeighToBorn = 4;
            options.minNeighToLive = 2;
            options.maxNeighToLive = 3;
            options.neighLimit = 6;
            break;
        case "original":
            options.gridType = 'original';
            options.minNeighToBorn = 3;
            options.maxNeighToBorn = 3;
            options.minNeighToLive = 2;
            options.maxNeighToLive = 3;
            options.neighLimit = 8;
            break;
        default:
            console.error(`Error on type of grid`);
            break;
    }
};

function initializeDOMparameters() {
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    var minNeighToLiveSlider = document.getElementById('minNeighToLiveSlider');
    var minNeighToLiveOutput = document.getElementById('minNeighToLiveOutput');
    minNeighToLiveSlider.value = options.minNeighToLive;
    minNeighToLiveOutput.innerHTML = minNeighToLiveSlider.value;

    var maxNeighToLiveSlider = document.getElementById('maxNeighToLiveSlider');
    var maxNeighToLiveOutput = document.getElementById('maxNeighToLiveOutput');
    maxNeighToLiveSlider.value = options.maxNeighToLive;
    maxNeighToLiveOutput.innerHTML = maxNeighToLiveSlider.value;

    minNeighToLiveSlider.setAttribute('max', maxNeighToLiveSlider.value);
    maxNeighToLiveSlider.setAttribute('min', minNeighToLiveSlider.value);
    maxNeighToLiveSlider.setAttribute('max', options.neighLimit);

    var minNeighToBornSlider = document.getElementById('minNeighToBornSlider');
    var minNeighToBornOutput = document.getElementById('minNeighToBornOutput');
    minNeighToBornSlider.value = options.minNeighToBorn;
    minNeighToBornOutput.innerHTML = minNeighToBornSlider.value;

    var maxNeighToBornSlider = document.getElementById('maxNeighToBornSlider');
    var maxNeighToBornOutput = document.getElementById('maxNeighToBornOutput');
    maxNeighToBornSlider.value = options.maxNeighToBorn;
    maxNeighToBornOutput.innerHTML = maxNeighToBornSlider.value;

    minNeighToBornSlider.setAttribute('max', maxNeighToBornSlider.value);
    maxNeighToBornSlider.setAttribute('min', minNeighToBornSlider.value);
    maxNeighToBornSlider.setAttribute('max', options.neighLimit);

    var slowFactorSlider = document.getElementById('slowFactorSlider');
    var slowFactorOutput = document.getElementById('slowFactorOutput');
    slowFactorSlider.value = options.slowFactor;
    slowFactorOutput.innerHTML = slowFactorSlider.value;

    var globalSize = document.getElementById('globalSize');
    globalSize.value = options.globalSize;
};

function switchPlayPause() {
    pauseButton.style.display = pauseButton.style.display === 'none' ? 'inline' : 'none';
    playButton.style.display = playButton.style.display === 'none' ? 'inline' : 'none';
};

function setGlobalSize() {
    options.globalSize = globalSize.value;
    start();
};

function switchWithInterState() {
    options.withInterState = !options.withInterState;
};

minNeighToLiveSlider.oninput = function () {
    minNeighToLiveOutput.innerHTML = this.value;
    options.minNeighToLive = this.value;
    maxNeighToLiveSlider.setAttribute('min', this.value);
};

maxNeighToLiveSlider.oninput = function () {
    maxNeighToLiveOutput.innerHTML = this.value;
    options.maxNeighToLive = this.value;
    minNeighToLiveSlider.setAttribute('max', this.value);
};

minNeighToBornSlider.oninput = function () {
    minNeighToBornOutput.innerHTML = this.value;
    options.minNeighToBorn = this.value;
    maxNeighToBornSlider.setAttribute('min', this.value);
};

maxNeighToBornSlider.oninput = function () {
    maxNeighToBornOutput.innerHTML = this.value;
    options.maxNeighToBorn = this.value;
    minNeighToBornSlider.setAttribute('max', this.value);
};

slowFactorSlider.oninput = function () {
    slowFactorOutput.innerHTML = this.value;
    options.slowFactor = this.value;
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};