<!--付费精品-->
<template>
    <recommend-cpn>
        <div slot="title">
            付费精品 >
        </div>
        <div slot="list" class="list">
            <ul>
                <li v-for="(item,index) in radioMsg" :key="index">
                    <div class="msg-detail">
                        <img v-lazy="item.picUrl+'?param=135y135'" />
                        <div>
                            <p>{{item.name}}</p>
                            <p class="text-nowrap">{{radioMsg[index].rcmdText}}</p>
                            <p>￥{{radioMsg[index].feeInfo.price/100}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </recommend-cpn>
</template>

<script>
    import RecommendCpn from "../../../../components/content/recommendCpn/RecommendCpn";
    import {PayFan, RadioMsg} from "../../../../network/radio/radio";
    export default {
        name: "PayFantastic",
        components: {RecommendCpn},
        data()
        {
          return {
              payList:[],
              radioMsg:[],
          }
        },
        created() {
            PayFan().then(res=>{
               // console.log(res.data.list.slice(0,4));
                this.payList=res.data.list.slice(0,4);
                for(let i in this.payList)
                {
                    RadioMsg(this.payList[i].id).then(res=>{
                        //console.log(res.data);
                        this.radioMsg.push(res.data);
                    })
                }
                //console.log(this.radioMsg)
            })

        }
    }
</script>

<style scoped>
     .list ul
     {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
     }
     .list ul li
     {
         margin: 0 0px 20px 0 ;
     }
     .list ul li img
     {
         width: 135px;
         border-radius: 8px;
     }
    .msg-detail
    {
        display: flex;
    }
     .msg-detail div
     {
         margin: 0 0 0 20px;
     }
     .msg-detail div p:nth-of-type(1)
     {
         font-size: 14px;
         font-weight: bold;
         margin: 15px 0;
     }
     .msg-detail div p:nth-of-type(2)
     {
         font-size: 13px;
         color: rgb(159, 159, 159);
         width: 200px;
         margin: 0 10px 0 0;
     }
     .msg-detail div p:nth-of-type(3)
     {
         color: rgb(236, 65, 65);
     }
</style>