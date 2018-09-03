/*
  Given a list of numbers and a number k, 
  return whether any two numbers from the 
  list add up to k.
*/

function addsUp(list, k) {
  const prev = {};
  for (let n of list) {
    if (prev[k - n]) return true;
    prev[n] = true;
  }
  return false;
}
