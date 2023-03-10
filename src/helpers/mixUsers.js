export const mixUsers = (array) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) { // 0 to n -1, exclusive because the last item doesn't need swapping
    let j = Math.floor(Math.random() *  (len-(i+1)))+(i+1); // i+1 to len, exclusive
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};