<template>
    <div class="my-radio">
      <div v-if="this.$store.state.loginType===1">
        <h3>我的电台</h3>
        <h4>我订阅的电台({{userDj.count}})</h4>
        <ul>
          <li v-for="(item,index) in userDj.djRadios">
            <list-info is-flex="flex">
              <div slot="imgContainer" class="user-dj-img" @click="djRouter(item)">
                <img :src="item.picUrl" />
              </div>
              <div slot="state" class="user-dj-state">
                {{item.name}}
              </div>
              <div slot="creator" class="user-dj-creator">
                by {{item.dj.nickname}}
              </div>
              <div slot="time" class="user-dj-program">
                节目{{item.programCount}}
              </div>
            </list-info>
          </li>
        </ul>
      </div>
      <div class="ask-to-login" v-if="this.$store.state.loginType===0">
        <img src="../../../assets/img/video-mv/mymusic.png" />
      </div>
    </div>
</template>

<script>
    import {userRadio} from "@/network/myMusic/myRadio/myRadio";
    import ListInfo from "@/components/common/ListInfo/ListInfo";

    export default {
        name: "MyRadio",
      components: {ListInfo},
      data()
        {
          return {
            userDj:[]
          }
        },
      created() {
          if(this.$store.state.loginType===1)
          {
            userRadio(this.$store.state.userMsg.profile.userId).then(data=>{
              //console.log(data);
              this.userDj=data;
            })
          }
      },
      methods:{
        djRouter(item)
        {
          //console.log(item);
          this.$router.push({
            path:'/djradioMsg',
            query:{
              anchorId:item.id
            }
          })
        }
      }
    }
</script>

<style scoped>
  .my-radio
  {
    height:535px;
    overflow-y: auto;
  }
  .my-radio::-webkit-scrollbar
  {
    width: 2px;
  }
  .my-radio .user-dj-img img{
    width:65px;
    border-radius: 5px;
  }
  h3{
    margin: 20px 0 20px 30px;
  }
  h4{
    margin: 0 0 20px 30px;
  }
  .my-radio ul li{
    padding: 3px 0 0 30px;
  }
  .my-radio ul li:hover{
    background-color: #f4f4f4;
  }
  .user-dj-state{
    font-size: 14px;
    width: 400px;
  }
  .user-dj-creator{
    width: 200px;
  }
  .user-dj-program
  {
    font-size: 12px;
    color: #9b9b9b;
  }
</style>