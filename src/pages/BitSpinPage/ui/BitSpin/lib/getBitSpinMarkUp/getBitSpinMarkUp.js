export const getBitSpinMarkUp = (spin) => {
  const marks = [];
  if (spin[0] === spin[1] && spin[1] === spin[2]) {
    marks.push(0, 1, 2);
  }
  if (spin[3] === spin[4] && spin[4] === spin[5]) {
    marks.push(3,4,5);
  }
  if (spin[6] === spin[7] && spin[7] === spin[8]) {
    marks.push(6,7,8);
  }
  if (spin[0] === spin[3] && spin[3] === spin[6]) {
    marks.push(0,3,6)
  }
  if (spin[1] === spin[4] && spin[4] === spin[7]) {
    marks.push(1,4,7)
  }
  if (spin[2] === spin[5] && spin[5] === spin[8]) {
    marks.push(2,5,8)
  }
  if (spin[0] === spin[4] && spin[4] === spin[8]) {
    marks.push(0,4,8)
  }
  if (spin[2] === spin[4] && spin[4] === spin[6]) {
    marks.push(2,4,6)
  }
  return marks;
};
