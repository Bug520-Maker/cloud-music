<!--用户详情页-->
<template>
  <div class="user-detail">
    <details-page>
      <div slot="imgContainer" class="user-img">
        <img :src="userData.profile.avatarUrl" />
      </div>
      <div slot="title">
        {{userData.profile.nickname}}
      </div>
      <div slot="creator" class="user-creator">
        <div class="level"><!--用户等级-->
          Lv{{userData.level}}
        </div>
        <div class="btn-control"><!--发私信，关注-->
          <div>
            <i class="iconfont icon-e-mailletterenvelopepostmail"> </i>
             发私信</div>
          <div>
            <i class="iconfont icon-jia"> </i>
             关注
          </div>
          <div><span>...</span></div>
        </div>
      </div>
      <div slot="controlBtn"><!--动态，关注，粉丝-->
        <ul class="follows">
          <li><!--动态-->
            <div>{{userData.profile.eventCount}}</div>
            <div>动态</div>
          </li>
          <li><!--关注-->
            <div>{{userData.profile.newFollows}}</div>
            <div>关注</div>
          </li>
          <li><!--粉丝-->
            <div>{{userData.profile.followeds}}</div>
            <div>粉丝</div>
          </li>
        </ul>
      </div>
      <div slot="targetMsg">
        个人介绍: {{userData.profile.signature}}
      </div>
    </details-page>
    <user-column :userId="userId" v-if="userId!==0"/>
    <user-radio  :userId="userId" v-if="userId!==0"/>
    <user-playlist :userId="userId" v-if="userId!==0"/>
    <user-collect :userId="userId" v-if="userId!==0"/>
  </div>
</template>

<script>
import {userDetail} from "@/network/user/user";
import DetailsPage from "@/components/common/detailsPage/DetailsPage";
import UserColumn from "@/components/content/userDetail/userColumn/UserColumn";
import UserRadio from "@/components/content/userDetail/userRadio/UserRadio";
import UserPlaylist from "@/components/content/userDetail/userPlaylist/UserPlaylist";
import UserCollect from "@/components/content/userDetail/userCollect/UserCollect";

export default {
  name: "UserDetail",
  data()
  {
    return {
      userData: {
        profile:{
          avatarUrl:''
        }
      },
      userId:0
    }
  },
  components: {UserCollect, UserPlaylist, UserRadio, UserColumn, DetailsPage},
  created() {
    userDetail(this.$route.query.userId).then(data=>{
      this.userId=this.$route.query.userId;
      //console.log(data);
      this.userData=data
    })
  }
}
</script>

<style scoped>
  .user-detail
  {
    overflow-y: auto;
    height: 535px;
  }
  .user-detail::-webkit-scrollbar
  {
    width: 2px;
  }
  .user-img img
  {
    border-radius: 50%;
  }
  .user-creator
  {
    justify-content: space-between;
    width: 560px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
  /*设置等级样式*/
  .level
  {
    padding:1px 10px;
    font-size: 12px;
    color:#333333;
    background-color: #f0f0f0;
    border-radius: 15px;
    height: 15px;
    margin-top: 7px;
  }
  /*设置发私信，关注等样式*/
  .btn-control div
  {
    border:1px solid #d8d8d8;
    border-radius: 15px;
    font-size:14px;
    padding:5px 15px;
    margin:0 7px 0 0;
  }
  .btn-control div i
  {
    margin:0 5px 0 0 ;
  }
  .btn-control div:nth-of-type(3)
  {
    text-align: center;
    width: 30px;
    height:30px;
    border-radius: 50%;
    padding: 0;
    font-size: 26px;
    line-height: 15px;
  }
  /*设置动态，关注，粉丝样式*/
  .follows
  {
    display: flex;
    margin: 15px 0 0 0;
  }
  .follows li
  {
    padding: 0 30px;
  }
  .follows li:nth-of-type(2)
  {
    border-left:1px solid #e6e6e6 ;
    border-right:1px solid #e6e6e6 ;
  }
  .follows li div:nth-child(1)
  {
    font-size: 20px;
    padding: 0 0 0 7px;
  }
</style>