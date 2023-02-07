export function isNull(val) {
  return val === null ? '-' : val
}
export function chooseFilter(val) {
  const typeMap = {
    0: '否',
    1: '是'
  }
  return typeMap[val]
}
