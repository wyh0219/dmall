const db = require('../../mysql')
const fromData = require('../../utils/utils')

const findAddress = () => {
  return new Promise((resolve,reject) => {
    db.query('select * from address', [], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(fromData.data(res))
      }
    })
  })
}
const addAddress = ({user_id, name, phone, location, address, active}) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO address (user_id, name, phone, location, address, active) VALUES (?,?,?,?,?,?)', [user_id, name, phone, location, address, active], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(res)
      }
    })
  })
}
const editAddress = (id) => {
  return new Promise((resolve,reject) => {
    db.query('select * from address where id=?', [id], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(fromData.data(res)[0])
      }
    })
  })
}
module.exports = {
  findAddress,
  addAddress,
  editAddress
}