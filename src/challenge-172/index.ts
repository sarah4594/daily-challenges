export const findAll = (list: number[], n: number) => {
  const repeated: number[] = []
  let idx = list.indexOf(n)
  console.log(idx)
  while (idx != -1) {
    repeated.push(idx)
    idx = list.indexOf(n, idx + 1)
  }
  return repeated
}
