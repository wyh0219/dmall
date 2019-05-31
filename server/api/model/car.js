const db = require('../../mysql')
const fromData = require('../../utils/utils')

const getCar = (user_id) => {
  return new Promise((resolve, reject) => {
    const spl = 'select cart.*, product.name, product.price from cart left join product on cart.product_id=product.id where user_id=?'
    db.query(spl, [user_id], (error, res)=> {
      if (error) {
        console.log(error)
        reject()
      } else {
        resolve(fromData.data(res))
      }
    })
  })
}

const addCar = async (user_id, product_id) => {
  const cartItems = await findCartProduct(user_id, product_id)
  if (cartItems.length >= 1) {
    return cartItemNum(cartItems[0].id, cartItems[0].num + 1)
  } else {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO cart (user_id, product_id, num) VALUES (?, ?, ?)', [user_id, product_id, 1], (error, res) => {
        if (error) {
          reject()
        } else {
          resolve(res)
        }
      })
    })
  }
}
const reduceCar = async (user_id, product_id) => {
  const cartItems = await findCartProduct(user_id, product_id)
  if (cartItems.length >= 1) {
    return cartItemNum(cartItems[0].id, cartItems[0].num - 1)
  } else {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO cart (user_id, product_id, num) VALUES (?, ?, ?)', [user_id, product_id, 1], (error, res) => {
        if (error) {
          reject()
        } else {
          resolve(res)
        }
      })
    })
  }
}
const cartItemNum = (id, num) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE cart SET num=? WHERE id=?'
    db.query(sql, [num, id], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(res)
      }
    })
  })
}
const findCartProduct = (user_id, product_id) => {
  return new Promise((resolve, reject) => {
    db.query('select * from cart where user_id=? and product_id=?', [user_id, product_id], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(fromData.data(res))
      }
    })
  })
}
const getCountPrice = async (user_id) => {
  const cartList = await getCar(user_id)
  let contPrice = 0
  cartList.forEach(item => {
    if (item.active == 1) {
      contPrice += item.num * item.price
    }
  })
  return contPrice
}
const changeActive = (id, active) => {
  new Promise((resolve, reject) => {
    const sql = 'UPDATE cart SET active=? WHERE id=?'
    db.query(sql, [active, id], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(res)
      }
    })
  })
}
const deleteCart = (id) => {
  console.log(id)
  new Promise((resolve, reject) => {
    const sql = 'delete from cart where product_id=?'
    db.query(sql, [id], (error, res) => {
      if (error) {
        console.log(error)
        reject()
      } else {
        resolve(res)
      }
    })
  })
}
module.exports = {
  getCar,
  addCar,
  reduceCar,
  cartItemNum,
  getCountPrice,
  changeActive,
  deleteCart
}