function digitsManipulations(n) {
  const digits = ("" + n).split("");
  let mult = 1;
  let add = 0;
  for (let i = 0; i < digits.length; i++) {
    mult = mult * digits[i];
    add = add + parseInt(digits[i]);
  }
  return mult - add;
}
console.log(digitsManipulations(413));
