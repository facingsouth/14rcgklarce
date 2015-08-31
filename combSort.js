var combSort = function(arr){

  // Your code here.
  var gap = arr.length;
  var shrink = 1.3;
  var swapped, tmp;

  while (gap !== 1 || swapped) {
    // shrink gap
    gap = Math.floor(gap/shrink);
    if (gap < 1) { gap = 1 ;}

    // reset swapped flag
    swapped = false;

    // inner loop
    for (var i=0; i+gap<arr.length; i+=gap) {
      if (arr[i] > arr[i+gap]) {
        // swap two element
        tmp = arr[i];
        arr[i] = arr[i+gap];
        arr[i+gap] = tmp;

        // set swapped flag to true
        swapped = true;
      }
    }
  }

};
