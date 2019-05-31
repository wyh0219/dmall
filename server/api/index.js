var express = require('express');
var router = express.Router();
// 登录
const userController = require('./controller/user')
// 轮播图
const bannerController = require('./controller/banner')
// 导航
const menuController = require('./controller/menu')

// 内容
const lifeController = require('./controller/life')
// 检查登录
const checkLogin = require('./middware')

// 分类
const classifyController = require('./controller/classify')

// 获取地址
const addressController = require('./controller/address')

// 添加购物车
const carController = require('./controller/car')

/**
 * 登录接口
 * params {} phone  
 * params {} csode
*/

router.post('/user/login',userController.login);
router.get('/user/info', checkLogin, userController.info);
router.get('/user/msg_code', userController.msg_code);

router.get('/home/banner', bannerController.banner)
router.get('/home/menu', menuController.menu)
router.get('/home/life', lifeController.life)

router.get('/classify/list', classifyController.classify)
router.get('/product', classifyController.product)

router.get('/address', addressController.address)
router.get('/addAddress', addressController.addAddress)
router.get('/editAddress', addressController.editAddress)

router.get('/getCar', checkLogin, carController.getCar)
router.get('/addCar', checkLogin, carController.addCar)
router.get('/changeNum', checkLogin, carController.changeNum)
router.get('/changeActive', checkLogin, carController.changeActive)
router.get('/delete/cart', checkLogin, carController.deleteCart)

module.exports = router;