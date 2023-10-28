// export function groupBy(arr, key) {
//   return arr.reduce((acc, item) => {
//     const group = item[key]
//     acc[group] = acc[group] || []
//     acc[group].push(item)
//     return acc
//   }, {})
// }

// 统一封装，并参数归一化
export function groupBy(arr: any[], keyOrFn: string | (() => any)) {
  const isString = typeof keyOrFn === 'string'
  const generateKey = isString ? (item: any) => item[keyOrFn as string] : keyOrFn as (() => any)
  return arr.reduce((acc, item) => {
    const group = generateKey(item)
    acc[group] = acc[group] || []
    acc[group].push(item)
    return acc
  }, {})
}
