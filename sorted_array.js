const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

function compare(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }

  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  if (typeof a === "string") {
    return -1;
  } else {
    return 1;
  }
}

const sortedArray = array.sort(compare);

console.log(sortedArray);
