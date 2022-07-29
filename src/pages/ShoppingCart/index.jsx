import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
// 组件里的数据请求 由action 代替
import {
  checkAllGoodsAction,
  checkGoodsAction,
  changeGoodsNumAction,
  getAllGoodsAction
} from './store/actionCreators'
// 模块化管理 css 的一种方式， 把css 全部放到 assets/css
import '@/assets/css/shoppingCart.css'
// 商品选中的图片
import checkedImg from '@/assets/img/shopping_check.png'
import checkNormalImg from '@/assets/img/shopping_checkNormal.png'

function App(props) {
  const { 
    goodsList,
    checkAll, 
    price
  } = props
  const {
    checkGoodsDispatch,
    changeGoodsNumDispatch,
    checkAllGoodsDispatch,
    getAllGoodsDispatch
  } = props
  // console.log(goodsList, checkAll);
  const checkGoods  = (goodsId) => {
    // console.log(goodsId, '-------------')
    checkGoodsDispatch(goodsId)
  }

  const changeGoodNum = (e, status, goodsId) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      status:status,
      sid:goodsId
    }
    changeGoodsNumDispatch(data)
  }

  const checkAllGoods = () => {
    checkAllGoodsDispatch(checkAll)
  }
  
  useEffect(() => {
    if(goodsList == '') {
      getAllGoodsDispatch()
    } 
  }, [])

  return (
    <div className="shoppingCartWrap">
      <div className="shoppingCartWrap_header">
        <div>购物车</div>
      </div>
      <div className="shoppingCartWrap_content">
      {
        goodsList.map((item, index) => (
          <div 
            className="shoppingCartWrap_content_list" 
            key={item.sid}
            onClick={checkGoods.bind(null,item.sid)}
            >
            <div className="shoppingCartWrap_content_check">
            {
              item.check?<img src={checkedImg}/>:<img src={checkNormalImg}/>
            }
            </div>
            <div className="shoppingCartWrap_content_list_imgWrap">
              <img src={item.img} alt="" />
            </div>
            <div className="shoppingCartWrap_content_list_info">
              <div className="shoppingCartWrap_content_list_title">
                {item.title}
              </div>
              <div className="shoppingCartWrap_content_list_subtitle">
                {item.desc}
              </div>
              <div className="shoppingCartWrap_content_list_action">
              {/* html + 数据绑定 = 静态的JSX  */}
              {
                item.nums > 0 && <div style={{display:'flex',
                justifyContent:'center',alignItems:'center'}}>
                  <div className="shoppingCartWrap_content_list_price" >￥{item.price}</div>
                  <div className="shoppingCartWarp_content_list_actionNumChangeButton" 
                  onClick={(e) => changeGoodNum(e, 'reduce', item.sid)}>
                    -
                  </div>
                  <div className="shoppingCartWrap_content_list_actionNumInfo">
                    {item.nums}</div>
                  <div className="shoppingCartWarp_content_list_actionNumChangeButton" 
                  onClick={(e) => changeGoodNum(e, 'add', item.sid)}>+</div>
                  
                </div>
                  
              }
              
              </div>
            </div>
          </div>
        ))
      }
      </div>
      <div className="shoppingCartWrap_footer">
        <div className="shoppingCartWrap_footer_action">
          <div className="shoppingCartWrap_footer_checkAll"
            onClick={() => checkAllGoods()}
          >
          {
            checkAll?<img src={checkedImg} />:<img src={checkNormalImg}/>
          }
          全选
          </div>
          <div className="shoppingCartWrap_footer_mount">
            总计&nbsp;&nbsp;<span>{price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  let price = state.cart.list.reduce((total, item) => 
  total + (item.check ? parseFloat(item.price)*item.nums : 0), 0)
  // console.log(price)
  return {
    goodsList: state.cart.list,
    // 全选？ 状态？ redux 管理 
    // redux  <-  驱动 -> UI
    checkAll: state.cart.list.filter(
      item => item.check).length == state.cart.list.length,
    price: price

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkGoodsDispatch(goodsId) {
      dispatch(checkGoodsAction(goodsId))
    },
    changeGoodsNumDispatch(data) {
      dispatch(changeGoodsNumAction(data))
    },
    checkAllGoodsDispatch(data) {
      dispatch(checkAllGoodsAction(data))
    },
    getAllGoodsDispatch() {
      dispatch(getAllGoodsAction())
    },
    // getSaleInfoDispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App))
