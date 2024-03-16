// drum player
const keyInput = document.body.addEventListener("keypress", (event) => {
  console.log(event.key);
  event.stopPropagation();
  switch (event.key) {
    case "w":
      let w = new Audio(
        "https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.262257156.925880017.1709197028-1059471570.1706969976"
      );
      w.play();
      break;
    case "a":
      let a = new Audio(
        "https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.100071318.925880017.1709197028-1059471570.1706969976"
      );
      a.play();
      break;
    case "s":
      let s = new Audio(
        "https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.95933460.925880017.1709197028-1059471570.1706969976"
      );
      s.play();
      break;
    case "d":
      let d = new Audio(
        "https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.95933460.925880017.1709197028-1059471570.1706969976"
      );
      d.play();
      break;
    case "j":
      let j = new Audio(
        "https://files.codingninjas.in/snare-28545.mp3?_ga=2.95933460.925880017.1709197028-1059471570.1706969976"
      );
      j.play();
      break;
    case "k":
      let k = new Audio(
        "https://files.codingninjas.in/crash-28546.mp3?_ga=2.95933460.925880017.1709197028-1059471570.1706969976"
      );
      k.play();
      break;
    case "l":
      let l = new Audio(
        "https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.262584196.925880017.1709197028-1059471570.1706969976"
      );
      l.play();
      break;

    default:
      break;
  }
});