import instance from "./requese.js"

export var getAllINfo = (params) => {
  return instance.get("/api/getlunbo",{params})
}

export var getCmtList = (params) => {
  return instance.get("/api/getcomments/" + params.id + "?pageindex=" + params.pageindex)
}

export var getnewList = (params) => {
  return instance.get("/api/getnewslist", { params })
}

export var getAllnews = (params) => {
  return instance.get("/api/getnew/"+params)
}

export var getPics = (params) => {
  return instance.get("/api/getgoods", { params })
}

export var getPhotoInfo = (params) => {
  return instance.get("/api/getimageInfo/"+params)
}

export var getpics = (params) => {
  return instance.get("/api/getthumimages/"+params)
}

export var addList = (params,msg) => {
  return instance.post("/api/postcomment/"+params,{ content: msg })
}

export var getAllPhoto = (params) => {
  return instance.get("/api/getimgcategory",{params})
}

export var getPhotoList = (params) => {
  return instance.get("/api/getimages/"+params)
}

export var getSwiperList = (params) => {
  return instance.get("/api/getthumimages/"+params)
}

export var getGoodsInfo = (params) => {
  return instance.get("/api/goods/getinfo/"+params)
}

export var getGoodsDetail = (params) => {
  return instance.get("/api/goods/getdesc/"+params)
}

export var getAllCar = (params) => {
  return instance.get("/api/goods/getshopcarlist/"+params)
}




