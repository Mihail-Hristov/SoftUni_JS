function createAssemblyLine() {

    const result = {};

    result.hasClima = (myObj) => {
        myObj.temp = 21;
        myObj.tempSettings = 21;
        myObj.adjustTemp = () => {
            if (myObj.temp < myObj.tempSettings) {
                myObj.temp += 1;
            } else if (myObj.temp > myObj.tempSettings) {
                myObj.temp -= 1;
            }
        }
    }

    result.hasAudio = (myObj) => {
        myObj.currentTrack = {
            name: null,
            artist: null,
        }
        myObj.nowPlaying = () => {
            if (myObj.currentTrack.name != null && myObj.currentTrack.artist != null) {
                console.log(`Now playing '${myObj.currentTrack.name}' by ${myObj.currentTrack.artist}`)
            }
        }
    }

    result.hasParktronic = (myObj) => {
        myObj.checkDistance = (distance) => {
            let result = '';
            if (distance < 0.1) {
                result = 'Beep! Beep! Beep!'
            } else if (distance < 0.25) {
                result = 'Beep! Beep!'
            } else if (distance < 0.5) {
                result = 'Beep!'
            }
            console.log(result);
        }
    }

    return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
name: 'Never Gonna Give You Up',
artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);


