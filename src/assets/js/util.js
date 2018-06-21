let toString = Object.prototype.toString

export function isArray (arr) {
  return toString.call(arr) === '[object Array]'
}

export function isString (str) {
  return toString.call(str) === '[object String]'
}

// 按数组对象里的日期格式化成标准
export function standardDate (data, key) {
  if (isArray(data) && data.length) {
    data.forEach((item) => {
      let index = item[key].indexOf(':')
      if (index > -1) {
        item[key] = item[key].substr(0, index)
      }
    })
    let res = []
    res.push(Object.assign({}, data[0]))
    data.reduce((prev, cur, index) => {
      let obj = {}
      obj.value = cur[key]
      if (isString(prev[key]) && prev[key].indexOf('-')) {
        let prevArr = prev[key].split('-')
        let curArr = cur[key].split('-')
        let prevY = prevArr[0]
        let prevM = prevArr[1]
        let prevD = prevArr[2]
        let curY = curArr[0]
        let curM = curArr[1]
        let curD = curArr[2]
        if (curY === prevY) {
          if (curD) {
            obj[key] = `${curM}-${curD}`
          } else {
            obj[key] = curM
          }
          if (curM === prevM) {
            obj[key] = curD
            if (curD.indexOf(' ') > -1) {
              let _curD = curD.split(' ')
              let _prevD = prevD.split(' ')
              if (_curD[0] === _prevD[0]) {
                obj[key] = curD.split(' ')[1]
              }
            }
          }
        } else {
          obj[key] = cur[key]
        }
      } else {
        obj[key] = cur[key]
      }
      res.push(obj)
      return cur
    })
    return res
  }
  return data
}

export function getDataByKey (data, key) { // data: Array; key: String
  let arr = []
  if (isArray(data) && data.length) {
    data.forEach((item) => {
      let val = item[key]
      if (key === 'y') {
        val = parseFloat(val)
      }
      arr.push(val)
    })
    return arr
  }
  return data
}
