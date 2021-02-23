export default{
    songUrl:`https://music.163.com/song/media/outer/url?id=29567193.mp3`,
    albumImgUrl:'',/*专辑URL*/
    //当前播放歌曲信息
    currentSong:{
        name:'我们的时光',
        id: 29567193,
        al:{
            id:3048030,
            name:"吉姆餐厅",
            picUrl: "https://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg"
        },
        alia:[],
        ar:[
            {name:'我们的时光',id:29567193}
        ],
        dt:270746
    },
    //当前歌曲在列表中的索引
    currentSongIndex:0,
    //歌词
    lyricList:[],
    //某一行歌词
    lyric:'',
    //用户播放模式 随机播放(0) 顺序播放(1) 单曲循环(2)
    playMode:0,
    //用户播放列表
    playList:[
        {
            name: "我们的时光",
            id: 29567193,
            ar: [
                {
                    id: 6731,
                    name: "赵雷",
                    alias: []
                }
            ],
            alia: [],
            al: {
                id: 3048030,
                name: "吉姆餐厅",
                picUrl: "https://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
            },
            dt: 270746,
        }
    ],
}