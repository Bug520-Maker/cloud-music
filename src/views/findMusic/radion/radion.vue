<template>
    <div class="radion">
        <lunbo></lunbo>
        <banner :category="cateList" @itemClick="banClick"></banner>
        <pay-fantastic/><!--付费精品-->
        <persional-rec/><!--个性推荐电台-->
        <innovate-sing :innovateSing="innovate"/><!--创作翻唱-->
        <voice-theatre/>  <!--声之剧场-->
        <music-story/>    <!--音乐故事-->
        <emtion-channel/>  <!--情感调频-->
        <music-lover/>      <!--音乐恋人-->
    </div>
</template>

<script>
    import {catrgoryRadio, radionBanner} from "../../../network/radio/radio";
    import banner from "./childCpn/banner"
    import {catelistType} from "../../../network/radio/radio";

    import lunbo from "./lunbo";
    import Lunbo from "./lunbo";
    import PayFantastic from "./payFantastic/PayFantastic";
    import PersionalRec from "./persionalRec/PersionalRec";
    import InnovateSing from "./innovateSing/InnovateSing";
    import VoiceTheatre from "./voiceTheatre/VoiceTheatre";
    import MusicStory from "./MusicStory/MusicStory";
    import EmtionChannel from "./emotionChannel/EmtionChannel";
    import MusicLover from "./musicLover/MusicLover";
    export default {
        name: "radion",
        components:{
            MusicLover,
            EmtionChannel,
            MusicStory,
            VoiceTheatre,
            InnovateSing,
            PersionalRec,
            PayFantastic,
            Lunbo,
            banner
        },
        data()
        {
            return {
                cateList: {},
                innovate:{}
            }

        },
        created() {/*获取电台分类*/
            catrgoryRadio().then(data=>{
                //console.log(data.categories);
                this.cateList=data;
                for(let item of this.cateList.categories)
                {
                    if(item.name==="创作翻唱")
                    {
                        console.log(item);
                        this.innovate=item;
                    }
                }
            })

        },
       methods:{
           banClick(item)
           {
               console.log(item);
               catelistType(item.id).then(data=>{
                   console.log(data);
               })
           }
       }
    }
</script>

<style scoped>
    .radion
    {
        /*background-color: pink;*/
        margin: 25px 0 0 0;
        height: 455px;
        overflow-y: scroll;

    }
    .radion::-webkit-scrollbar
    {
        width: 2px;
    }
</style>