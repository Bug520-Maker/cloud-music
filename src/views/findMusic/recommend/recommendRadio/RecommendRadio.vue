<template>
    <div class="rec-radio">
        <recommend-cpn>
            <div slot="title">
                主播电台 >
            </div>
            <div slot="list">
                <ul>
                    <li v-for="(item,index) in radios" :key="item">

                    </li>
                </ul>
            </div>
        </recommend-cpn>
    </div>
</template>

<script>
    import RecommendCpn from "../../../../components/content/recommendCpn/RecommendCpn";
    import {recRadio, PersonalizedRec, Rec, catrgoryRadio} from "../../../../network/radio/radio";
    export default {
        name: "RecommendRadio",
        data()
        {
          return {
              radios:[]
          }
        },
        components: {
            RecommendCpn
        },
        created() {
           /* recRadio().then(data=>{
                console.log(data);
            })*/
            /*PersonalizedRec().then(data=>{
                console.log(data);
            })*/
           /* Rec().then(data=>{
                console.log(data);
            })*/
            catrgoryRadio().then(data=>{
               // console.log(data);
            })
        }
    }
</script>

<style scoped>

</style>