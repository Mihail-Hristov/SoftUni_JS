function solve(steps, footprint, speed) {
    const distance = steps * footprint;

    const restCount = Math.floor(distance / 500);
    const breakInSec = restCount * 60;

    const speedInSecAndM = (speed * 1000) / 3600;
    let time = distance / speedInSecAndM;

    time += breakInSec;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");

    const minutes = Math.floor(time / 60).toFixed(0).padStart(2, "0");

    time = time % 60;

    const sec = time.toFixed(0).padStart(2, "0");

    let result = `${hours}:${minutes}:${sec}`

    return result;
}

console.log(solve(2564, 0.70, 5.5));