

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

export function getsearch(searchWord){
    return request
    .get(`/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${searchWord}`)

}

// 歌曲详情lyrics
export function getSongDetails(songid){
    return request
    .get(`/v1/restserver/ting?method=baidu.ting.song.play&songid=${songid}`)
}


// 歌词详情
export function getLyrics(lrclink){
    return request
        .get(`/music/data/song/lrc?lrc_link=${lrclink}`)
}

export function getSinger(tinguid) {
    const url=`/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=${tinguid}`;
    return request.get(url)
}