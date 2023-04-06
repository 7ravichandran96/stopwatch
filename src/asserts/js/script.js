(() => {
    let hr2 = document.getElementById("hr2");
    let hr1 = document.getElementById("hr1");

    let min2 = document.getElementById("min2");
    let min1 = document.getElementById("min1");

    let sec2 = document.getElementById("sec2");
    let sec1 = document.getElementById("sec1");

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");

    let interval;
    let isRunning = false;

    reset.addEventListener("click", () => {
        // Reset all values to 0
        hr2.innerHTML = hr1.innerHTML = min2.innerHTML = min1.innerHTML = sec2.innerHTML = sec1.innerHTML = 0;
        // console.log(hr2.innerHTML, hr1.innerHTML, min2.innerHTML, min1.innerHTML, sec2.innerHTML, sec1.innerHTML)
    });

    start.addEventListener("click", () => {
        // Check if stopwatch is already running
        if (isRunning == true) {
            return isRunning;
        } else {
            interval = setInterval(stopWatch, 1000);
            isRunning = true;
        }
    });

    function stopWatch() {

        let hrs2 = hr2.innerHTML;
        let hrs1 = hr1.innerHTML;

        let mins2 = min2.innerHTML;
        let mins1 = min1.innerHTML;

        let secs2 = sec2.innerHTML;
        let secs1 = sec1.innerHTML;

        if (secs1 < 9) {
            secs1++;
        } else if (secs1 >= 9 && secs2 < 5) {
            secs1 = 0;
            secs2++;
        } else if (secs1 >= 9 && secs2 >= 5 && mins1 < 9) {
            secs1 = secs2 = 0;
            mins1++;
        } else if (secs1 >= 9 && secs2 >= 5 && mins1 >= 9 && mins2 < 5) {
            secs1 = secs2 = mins1 = 0;
            mins2++;
        } else if (secs1 >= 9 && secs2 >= 5 && mins1 >= 9 && mins2 >= 5 && hrs1 < 9) {
            secs1 = secs2 = mins1 = mins2 = 0;
            hrs1++;
        } else if (secs1 >= 9 && secs2 >= 5 && mins1 >= 9 && mins2 >= 5 && hrs1 >= 9 && hrs2 < 5) {
            secs1 = secs2 = mins1 = mins2 = hrs1 = 0;
            hrs2++;
        } else if (secs1 >= 9 && secs2 >= 5 && mins1 >= 9 && mins2 >= 5 && hrs1 >= 9 && hrs2 >= 5) {
            clearInterval(interval);
            isRunning = false;
        }

        // Update the stopwatch display
        sec1.innerHTML = secs1;
        sec2.innerHTML = secs2;
        min1.innerHTML = mins1;
        min2.innerHTML = mins2;
        hr1.innerHTML = hrs1;
        hr2.innerHTML = hrs2;

        // console.log(hrs2, hrs1, mins2, mins1, secs2, secs1);
    }

    stop.addEventListener("click", () => {
        clearInterval(interval);
        isRunning = false;
        console.log();
    });
})();
