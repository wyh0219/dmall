const classifyModel = require('../model/classify')
const fromData = require('../../utils/utils')

const classify = async (req, res, next) => {
  try {
    const classifyList = await classifyModel.findClassify()
    const newArray = fromData.arrayToTree(classifyList)
    res.send({
      code: 0,
      data: newArray
    })
  } catch (error) {
    
  }
}

const product = async (req, res, next) => {
  const {
    page = 1,
    pageSize = 10,
    categoryId,
    ...rest
  } = req.query
  let ids = ''

  if (categoryId) {
    const classifyList = await classifyModel.findClassify()
    const newArray = fromData.arrayToTree(classifyList)
    ids = fromData.getChildId(newArray, categoryId)
  }

  const data = await classifyModel.selectProduct({
    page,
    pageSize,
    categoryId: ids,
    ...rest
  })
  
  res.send({
    code: 0,
    msg: '成功',
    data
  })
}

module.exports = {
  classify,
  product
}