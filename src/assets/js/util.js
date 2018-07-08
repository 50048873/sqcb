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
  console.log(JSON.stringify(data, null, 2))
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
    console.log(JSON.stringify(res, null, 2))
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

// 提示
export function hint (text) {
  let content = `<div class="serverErrorTip animated fadeIn">${text}</div>`
  if ($('body > .serverErrorTip').length) return
  let $back = $(content).appendTo('body')
  setTimeout(() => {
    $back.removeClass('fadeIn').addClass('fadeOut')
    $back.on('webkitanimationend animationend', () => {
      $back.remove()
      $back = null
    })
    setTimeout(() => {
      let $serverError = $('.serverErrorTip')
      if ($serverError.length) {
        $serverError.remove()
      }
    }, 3000)
  }, 3000)
  return $back
}

// 服务器错误提示
export function serverErrorTip (err, filename) {
  let content = `<div class="serverErrorTip animated fadeIn"><p>错误状态码：${err.status}</p><p>错误描叙：${err.statusText}</p><p>错误文件：${filename}</p></div>`
  if ($('body > .serverErrorTip').length) return
  let $back = $(content).appendTo('body')
  setTimeout(() => {
    $back.removeClass('fadeIn').addClass('fadeOut')
    $back.on('webkitanimationend animationend', () => {
      $back.remove()
      $back = null
    })
    setTimeout(() => {
      let $serverError = $('.serverErrorTip')
      if ($serverError.length) {
        $serverError.remove()
      }
    }, 3000)
  }, 3000)
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
  second = reg.test(second) ? second.toString() : dd.getSeconds()

  m = m.toString().padStart(2, '0')
  d = d.toString().padStart(2, '0')
  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')
  second = second.toString().padStart(2, '0')

  let divide = utc ? 'T' : ' '
  return `${y}-${m}-${d}${divide}${hour}:${minute}:${second}`
}

// 保留n位小数
export function handleDecimalLength (num, len = 2) {
  if (!isNumber(num)) {
    num = parseFloat(num)
  }
  return num.toFixed(len)
}
