function sortTable() {
  //get the parent table for convenience
  let table = document.getElementById("content-table");

  //1. get all rows
  let rowsCollection = table.querySelectorAll("tr");

  //2. convert to array
  let rows = Array.from(rowsCollection)
   // .slice(1); //첫번째 타이틀 행 제외 시키고 두번째 부터 적용

  //3. shuffle
  shuffleArray(rows);

  //4. add back to the DOM
  for (const row of rows) {
    table.appendChild(row);
  }
}


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
