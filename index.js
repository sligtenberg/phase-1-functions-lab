function distanceFromHqInBlocks(currentBlock) {
    return Math.abs(currentBlock - 42);
}

function distanceFromHqInFeet(currentBlock) {
    return 264 * distanceFromHqInBlocks(currentBlock);
}

function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(start - destination);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) return 'cannot travel that far';
    else if (distance <= 400) return 0;
    else if (distance <= 2000) return (distance - 400) * 0.02;
    else return 25;
}