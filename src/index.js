exports.min = function min(array) {

  if (arguments.length === 0 || array.length === 0) {
      return 0
  }


  return Math.min.apply(null, array)


}


exports.max = function max(array) {

  if (arguments.length === 0 || array.length === 0) {
      return 0
  }

  return Math.max.apply(null, array)


}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) {
      return 0
  } else {
      t = 0;
      for (i = 0; i < array.length; i++)
          t += array[i];
      sum = t / array.length;
      return sum;
  }
}
