/**
 * 商品模块
 */
import axios from 'axios'

let goods = {}

/**
 * 获取商品列表
 */
goods.findGoodsList = (params, callback) => {
  axios.get('http://localhost:8090/haoback_service/goods/page', {params: params}).then((res) => {
    let data = res.data.datas.data
    !!callback && callback(data)
  })
  .catch((error) => {
    console.log(error)
  })
}

/**
 * 获取商品分类
 */
goods.findGoodsType = (callback) => {
  axios.get('http://localhost:8090/haoback_service/goods/goods_type').then((res) => {
    let data = res.data.datas.data
    !!callback && callback(data)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export default goods
