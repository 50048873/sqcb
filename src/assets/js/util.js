import $ from 'jquery'

let toString = Object.prototype.toString

export function isArray (arr) {
  return toString.call(arr) === '[object Array]'
}

export function isObject (obj) {
  return toString.call(obj) === '[object Object]'
}

export function isString (str) {
  return toString.call(str) === '[object String]'
}

export function isNumber (num) {
  return toString.call(num) === '[object Number]'
}

// 按数组对象里的日期格式化成标准
export function standardDate (data, key) {
  data = data.slice()
  if (isArray(data) && data.length) {
    let res = []
    res.push(data[0])
    data.reduce((prev, cur, index) => {
      let obj = Object.assign({}, cur)
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
            if (isString(curD) && curD.indexOf(' ') > -1) {
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

export function getDataByKey (data, key, isString = true) { // data: Array; key: String
  let arr = []
  if (isArray(data) && data.length) {
    data.forEach((item) => {
      let val = isString ? item[key] : parseFloat(item[key])
      arr.push(val)
    })
    return arr
  }
  return data
}

// 全局loading
let loadingImg = require('@/assets/img/loading.gif')
export let loading = {
  $loading: [],
  show () {
    let content = `<div class="n-loading">
                      <img width="24" height="24" src="${loadingImg}">
                      <span class="desc">请求中...</span>
                  </div>`
    this.$loading.push($(content).appendTo('body'))
  },
  remove () {
    if (!this.$loading.length) return
    let len = this.$loading.length
    for (let i = 0; i < len; i++) {
      this.$loading[i].remove()
    }
  }
}

// 获取指定日期
/*
  * addDayCount: 增减天数（Number）
  * hour: 小时（Number）
  * minute: 分（Number）
  * second: 秒（Number）
  * utc: 是否是UTC格式（Boolean）
*/
export function getDateStr (addDayCount, hour, minute, second, utc) {
  let dd = new Date()
  dd.setDate(dd.getDate() + addDayCount) // 获取AddDayCount天后的日期
  let y = dd.getFullYear()
  let m = (dd.getMonth() + 1)
  let d = dd.getDate()
  let reg = /^\d+$/
  hour = reg.test(hour) ? hour.toString() : dd.getHours()
  minute = reg.test(minute) ? minute.toString() : dd.getMinutes()

  m = m.toString().padStart(2, '0')
  d = d.toString().padStart(2, '0')
  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')

  let divide = utc ? 'T' : ' '

  if (second === null || second === undefined || second === false || second === '') {
    return `${y}-${m}-${d}${divide}${hour}:${minute}`
  } else {
    second = reg.test(second) ? second.toString() : dd.getSeconds()
    second = second.toString().padStart(2, '0')
    return `${y}-${m}-${d}${divide}${hour}:${minute}:${second}`
  }
}

// 保留n位小数
export function handleDecimalLength (num, len) {
  if (!/^\d+$/.test(len)) {
    len = 2
  }
  if (!isNumber(num)) {
    num = parseFloat(num)
  }
  return num.toFixed(len)
}

// 返回服务器错误信息html字符串
export function getServerErrorMessageAsHtml (err, filename) {
  return `<div style="text-align:left"><p>错误状态码：${err.status}</p><p>错误描叙：${err.statusText}</p><p>错误来源：${filename}</p></div>`
}

// 转换风情等级
export function convertWindDrection (deg) {
  deg = parseInt(deg)
  let direction
  if ((deg >= 350 && deg <= 360) || (deg >= 0 && deg <= 10)) {
    direction = '正北'
  } else if (deg >= 80 && deg <= 100) {
    direction = '正东'
  } else if (deg >= 170 && deg <= 190) {
    direction = '正南'
  } else if (deg >= 260 && deg <= 280) {
    direction = '正西'
  } else {
    if (deg > 10 && deg < 80) {
      direction = '东北'
    } else if (deg > 100 && deg < 170) {
      direction = '东南'
    } else if (deg > 190 && deg < 260) {
      direction = '西南'
    } else if (deg > 280 && deg < 350) {
      direction = '西北'
    }
  }
  return direction
}

// 补充起止日期的空数据
export function padEmptyData ({startTime, endTime, intervalTime = 60 * 60 * 1000, data}) {
  startTime = new Date(startTime) * 1
  endTime = new Date(endTime) * 1
  let diff = endTime - startTime
  let count = parseInt(diff / intervalTime)
  let i = 0
  let j = 0
  let res = []
  while (i <= count) {
    let currentTime = startTime + intervalTime * i
    if (currentTime === (data[j] && new Date(data[j].time.replace(/:\d{2}/, ':00')) * 1)) {
      res.push(parseFloat(data[j].value))
      j++
    } else {
      res.push(null)
    }
    i++
  }
  return res
}
