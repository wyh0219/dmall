const db = require('../../mysql')
const fromData = require('../../utils/utils')

const findClassify = () => {
  return new Promise((resolve, reject) => {
    db.query('select * from category', [], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(fromData.data(res))
      }
    })
  })
}

const selectProduct = (options) => {
  const {
    page,
    pageSize,
    categoryId,
    ...rest
  } = options
  return new Promise((resolve, reject) => {
    let sql = 'select * from product '

    if (categoryId) {
      sql += ` WHERE categoryId in (${categoryId.toString()}) `
    }
    if (Object.keys(rest).length >= 1) {
      for (let key in rest) {
        sql += `ORDER BY ${key} ${rest[key] == 0 ? 'ASC ' : 'DESC '}`
      }
    }

    sql += ` LIMIT ${pageSize * (page -1)}, ${pageSize}`
    
    console.log(sql)
    db.query(sql, [], (error, res) => {
      if (error) {
        reject(error)
      } else {
        resolve(fromData.data(res))
      }
    })
  })
}

module.exports = {
  findClassify,
  selectProduct
}