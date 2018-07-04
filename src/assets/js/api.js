import $ from 'jquery'
import {baseUrl} from '@/assets/js/config'

export let getRiverRealList = () => {
  return $.ajax({
    url: baseUrl + 'dseStRiverRealController/getRiverRealList.do'
  })
}
