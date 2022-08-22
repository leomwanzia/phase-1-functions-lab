// Code your solution in this file!
let scuberHQ = 42;
const distanceFromHqInBlocks = function (pickupLocation) {
    if (pickupLocation >= scuberHQ) {
        return pickupLocation - scuberHQ;
    }else {
        return scuberHQ - pickupLocation;
    }
};

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInfeet(location) {
    if (distanceFromHqInBlocks >=43){
    return distanceFromHqInBlocks(location) * 264;
    }
}

distanceFromHqInfeet(43);

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }else {
        return (start - destination) * 264;
    }
}

distanceFromHqInfeet(43, 48);


function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }else if (distance < 2000) {
        return (distance - 400) * 0.02;
    }else if (distance >= 2000 && distance < 2500) {
        return 25;
    }else if (distance >= 2500) {
        return "cannot travel that far";
    }
}

calculatesFarePrice(34, 24);

calculatesFarePrice(50, 58);

calculatesFarePrice(43, 44);
