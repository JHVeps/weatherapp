export const apiKey = "";

//Function to modify Day.Icon value so that it is always a two digit number
export const fixValue = (num) => {
  const stringNum = num + "";
  const stringLen = stringNum.length;

  if (stringLen === 1) {
    return "0" + stringNum; // 4 -> 04
  } else {
    return stringNum; // 17 -> 17
  }
};
