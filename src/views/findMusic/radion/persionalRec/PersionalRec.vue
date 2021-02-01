<!--个性电台推荐-->
<template>
    <div class="per-rec">
        <radio-cpn :list=" recRadioList" title-text="电台个性推荐" :is-show="false"/>
    </div>
</template>

<script>
    import RecommendCpn from "../../../../components/content/recommendCpn/RecommendCpn";
    import {PersionalizedRec} from "../../../../network/radio/radio";
    import RadioCpn from "../../../../components/content/RadioCpn/RadioCpn";
    export default {
        name: "PersionalRec",
        components: {RadioCpn, RecommendCpn},
        data()
        {
            return {
                recRadioList:[]
            }
        },
        created() {
            PersionalizedRec().then(res=>{
                //console.log(res.data);
                this.recRadioList=res.data;
            })
        }
    }
</script>

<style scoped>
</style>