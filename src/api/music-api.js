

//  这里存放 音乐相关的 api 


/* 榜单api */

import request from '../utils/http.js'

//  输出是对象的榜单列表 ， 因为是异步操作 所以输出一个promise
export function getBillList(type,size=6,offset=0){
    return request
    .get(`/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${size}&type=${type}&offset=${offset}`)
    .then(res=>{
        return {
            ...res,
            list:res.song_list
        }
    })
}

export function geshou(tinguid) {
    return request
        .get(`/v1/restserver/ting/method?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`)
}

// export function getSongInfo(songId){
//     return request
//     .get(``)
//
// }

// 获取歌词
// export function getLrc(lrcLink){
//     return request
//     .get(``)
//
// }