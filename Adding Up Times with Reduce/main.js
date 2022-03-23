// The HTML document contains an unordered list with multiple list items,
// each with a data-time which reflect a time in minutes and seconds.
// Our goal is to take all of these times and calculate the total in hours, minutes, and seconds.

// My Solution
const list = document.querySelectorAll('.videos li');

const splittedList = Array.from(list).map(item => {
    const splitted = item.dataset.time.split(':');
    return [Number(splitted[0]), Number(splitted[1])];
})

const timeInSeconds = splittedList.reduce((acc, item) => {
    const seconds = (item[0] * 60) + item[1];
    return acc + seconds;
}, 0)

const secondsToTime = seconds => {
    const totalHours = Math.floor(seconds / 3600);
    const totalMinutes = Math.floor((seconds % 3600) / 60);
    const totalSeconds = totalMinutes % 60;
    return `Total Time: ${totalHours} Hours, ${totalMinutes} Minutes and ${totalSeconds} Seconds.`;
}

console.log(secondsToTime(timeInSeconds));

// Wes's Solution
// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// const seconds = timeNodes
//     .map(node => node.dataset.time)
//     .map(timeCode => {
//         const [mins, secs] = timeCode.split(':').map(parseFloat);
//         return (mins * 60) + secs;
//      })
//      .reduce((total, vidSeconds) => total + vidSeconds);

// let secondsLeft = seconds;
// const hours = Math.floor(secondsLeft / 3600);
// secondsLeft = secondsLeft % 3600;
// const mins = Math.floor(secondsLeft / 60);
// secondsLeft = secondsLeft % 60;

// console.log(hours, mins, secondsLeft);
