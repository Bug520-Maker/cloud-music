<template>
    <div>
        <p class="rec-title" @click="excClick()">
          独家放送
          <i class="iconfont icon-arrow-right1"></i>
        </p>
        <div class="broadcast">
            <ul>
                <li v-for="(item,index) in broadcastList" :key="index">
                    <img :src="item.sPicUrl+'?param=240y135'"  @click="mvClick(index)" />
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mvurl} from "@/network/vision/mv/mvList";
    import {broadcast} from "@/network/recommend/broadcast";

    export default {
        name: "ExclusiveBroadcast",
        data()
        {
            return {
                broadcastList: [],/*独家推送*/
            }
        },
        created() {
            broadcast().then(data => {
                //console.log(data.result)
                this.broadcastList = data.result;
            })
        },
        methods:{
            /*独家放送title*/
            excClick()
            {
                this.$router.push('/solePlay');
            },
            /*独家放送*/
            mvClick(index)
            {
                mvurl(this.broadcastList[index].id).then(res=>{
                    //console.log(res.data.url);
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url,
                            mvId:this.broadcastList[index].id
                        }
                    })
                })
            },
        }
    }
</script>

<style scoped>
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    /**************独家放送***********************/
    .broadcast ul
    {
        display: flex;
    }
    .broadcast ul li
    {
        flex: 1;
    }
    .broadcast ul li p
    {
        font-size: 14px;
    }
    .broadcast ul li img
    {
        border-radius:5px ;
        border: 1px solid rgba(153,153,153,.4);
        width: 240px;
    }
</style>