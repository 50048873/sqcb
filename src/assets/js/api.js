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

// 风情列表
export let getFqList = () => {
  return $.ajax({
    url: baseUrl + '/hydr-web/dseStFqRealController/getFqList.do'
  })
}
