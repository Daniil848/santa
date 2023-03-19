const mixUsers = (array) => {
  const arr = [...array];
  const len = array.length;
  for (let i = 0; i < len - 1; i++) { // 0 to n -1, exclusive because the last item doesn't need swapping
    let j = Math.floor(Math.random() * (len-(i+1)))+(i+1); // i+1 to len, exclusive
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export default mixUsers;