export default function sum(val) {
  let ret = 0;
  for (let i = 1; i <= val; ++i) {
    ret += i;
  }
  return ret;
}
