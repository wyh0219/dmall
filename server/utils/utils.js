const data = (arr) => {
  return arr.map(item => {
    return {...item}
  })
}
const arrayToTree = (arr) => {
  const data = []
  const obj = {}
  arr.forEach(item => {
    obj[item.categoryId] = item
  })
  for (let key in obj) {
    var parent = obj[obj[key].parentId]
    if (parent) {
      if (parent.children) {
        parent.children.push(obj[key])
      } else {
        parent.children = [obj[key]]
      }
    } else {
      data.push(obj[key])
    }
  }
  return data
}

const getChildId = (arr, id) => {
  let ids = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (item.categoryId == id) {
      if (item.children) {
        item.children.forEach(childItem => {
          ids = ids.concat(getChildId(item.children, childItem.categoryId))
        })
      } else {
        ids.push(item.categoryId)
        break
      }
    } else if (item.children) {
      ids = ids.concat(getChildId(item.children, id))
    }
  }
  return ids
}
module.exports = {
  data,
  arrayToTree,
  getChildId
}