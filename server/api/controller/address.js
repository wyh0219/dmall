const addressModel = require('../model/address')

const address = async (req, res, next) => {
  try {
    const data = await addressModel.findAddress()
    res.json({
      code: 0,
      msg: '成功',
      data
    })
  } catch (error) {
    res.json({
      code: 1,
      msg: '失败'
    })
  }
}

const addAddress = async (req, res, next) => {
  try {
    const data = await addressModel.addAddress(req.query)
    res.send({
      code: 0,
      msg: '添加成功'
    })
  } catch (error) {
    res.send({
      code: 1,
      msg: '添加失败'
    })
  }
}

const editAddress = async (req, res, next) => {
  const {id} = req.query
  const data = await addressModel.editAddress(id)
  res.send({
    code: 0,
    msg: '成功',
    data
  })
}

module.exports = {
  address,
  addAddress,
  editAddress
}