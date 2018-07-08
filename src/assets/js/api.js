import $ from 'jquery'
import {baseUrl} from '@/assets/js/config'

// 水情列表
export let getRiverRealList = () => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStRiverRealController/getRiverRealList.do'
  })
}

// 水情详情
export let getRiveDetailData = (params) => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStRiverRealController/getRiveDetailData.do',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(params)
  })
}

// 雨情列表
export let getPptnRealList = () => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStPptnRealController/getPptnRealList.do'
  })
}

// 雨情详情
export let getPptnDetailData = (params) => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStPptnRealController/getPptnDetailData.do',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(params)
  })
}

//  预警详细
export let getAllWarnListByStcd = (params) => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStPptnRealController/getAllWarnListByStcd.do',
    data: params
  })
}

// 获取所有的预警信息
export let getAllWarnList = (params) => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStPptnRealController/getAllWarnList.do'
  })
}

// 风情列表
export let getFqList = () => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStFqRealController/getFqList.do'
  })
}

// 风情详情
export let getDseStFqRList = (params) => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStFqRController/getDseStFqRList.do',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(params)
  })
}
