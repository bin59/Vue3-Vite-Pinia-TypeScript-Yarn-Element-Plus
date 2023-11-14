export default function CompleteDeepClone(target: any, map = new WeakMap()) {
  // 基本数据类型，直接返回
  if (typeof target !== 'object' || target === null) return target
  // 函数 正则 日期 ES6新对象,执行构造题，返回新的对象
  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(target)
  // map标记每一个出现过的属性，避免循环引用
  if (map.get(target)) return map.get(target)
  map.set(target, true)
  const cloneTarget: any = Array.isArray(target) ? [] : {}
  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = CompleteDeepClone(target[prop], map)
    }
  }
  return cloneTarget
}
