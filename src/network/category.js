import {request} from "./request";
export function getCategory(){
  let url="/category";
  return request({
    url
  });

}

export function getSubCategory(maitKey){
  let url="/subcategory"
  return request({
    url,
    params:{
      maitKey
    }
  })
}
