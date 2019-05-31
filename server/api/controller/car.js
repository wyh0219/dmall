const carModel = require('../model/car')

const getCar = async (req, res, next) => {
  const user_id = req.userInfo.id
  try {
    const data = await carModel.getCar(user_id)
    const contPrice = await carModel.getCountPrice(user_id)
    res.send({
      code: 0,
      msg: '获取成功',
      data,
      contPrice
    })
  } catch (error) {
    res.send({
      code: 1,
      msg: '获取失败'
    })
  }
}
const addCar = async (req, res, next) => {
  const { type, product_id} = req.query
  const user_id = req.userInfo.id
  if (type === 'add') {
    try {
      await carModel.addCar(user_id, product_id)
      const contPrice = await carModel.getCountPrice(user_id)
      res.send({
        code: 0,
        msg: '添加成功',
        contPrice
      })
    } catch (error) {
      res.send({
        code: 1,
        msg: '添加失败'
      })
    }
  } else {
    try {
      await carModel.reduceCar(user_id, product_id)
      const contPrice = await carModel.getCountPrice(user_id)
      res.send({
        code: 0,
        msg: '添加成功',
        contPrice
      })
    } catch (error) {
      res.send({
        code: 1,
        msg: '添加失败'
      })
    }
  }
}
const changeNum = async (req, res, next) => {
  const {id, num} = req.query
  const user_id = req.userInfo.id
  try {
    await carModel.cartItemNum(id, num)
    const contPrice = await carModel.getCountPrice(user_id)
    res.send({
      code: 0,
      msg: '购物车数量减少',
      contPrice
    })
  } catch (error) {
    res.send({
      code: 1,
      msg: '失败'
    })
  }
}
const changeActive = async (req, res, next) => {
  const {id, active} = req.query
  const user_id = req.userInfo.id
  try {
    await carModel.changeActive(id, active)
    const contPrice = await carModel.getCountPrice(user_id)
    res.send({
      code: 0,
      msg: '已取消',
      contPrice
    })
  } catch (error) {
    res.send({
      code: 1,
      msg: '取消失败'
    })
  }
}
const deleteCart = async (req, res, next) => {
  console.log(req.query.id, 'ssssssssss')
  try {
    await carModel.deleteCart(req.query.id)
    const user_id = req.userInfo.id
    const contPrice = await carModel.getCountPrice(user_id)
    res.send({
      code: 0,
      msg: '删除成功',
      contPrice
    })
  } catch (error) {
    res.send({
      code: 0,
      msg: '删除失败'
    })
  }
}
module.exports = {
  getCar,
  addCar,
  changeNum,
  changeActive,
  deleteCart
}