<!--评论组件-->
<template>
   <div class="comment">
     <ul>
       <li v-for="(item,index) in comments">
         <div class="img-container">
           <img v-lazy="item.user.avatarUrl+'?param=40y40'" />
         </div>
         <!--用户评论-->
         <ul class="comment-msg">
           <li class="user-comment" :style="{width:commentsWidth}">
             <span>{{item.user.nickname}}: </span>
             <span>{{item.content}}</span>
           </li>

           <li v-show="item.beReplied.length!==0">
             <!--评论回复-->
             <ul class="user-reply">
                <li v-for="(i,index) in item.beReplied" :style="{width: commentsWidth}">
                  <span>{{i.user.nickname}}: </span>
                  <span>{{i.content}}</span>
                </li>
              </ul>

           </li>
           <li class="user-thumbs-up" :style="{width:commentsWidth}">
             <span>举报</span>
             <div>
               <span>
                 <i class="iconfont icon-zanpress"></i>
               </span>
               <span>
                 <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
               </span>
               <span>
                 <i class="iconfont icon-pinglunbeifen"></i>
               </span>
             </div>
           </li>
         </ul>
       </li>
     </ul>
   </div>
</template>

<script>
export default {
  name: "Comment",
  props:{
    comments:{
      type:Array,
      default()
      {
        return []
      }
    },
    commentsWidth:{
        type:String,
        default:'680px'
    }
  }
}
</script>

<style scoped>
  .comment > ul> li
  {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .comment > ul> li .img-container img
  {
    width: 40px;
    border-radius: 50%;
  }
  .user-comment
  {
    font-size: 12px;
    line-height: 20px;
  }
  .user-comment span:nth-child(1)
  {
    color: #5091ca;
  }
  /*用户回复*/
  .user-reply
  {
    margin: 10px 0;
    line-height: 10px;
  }
  .user-reply > li span
  {
    font-size: 12px;
  }
  .user-reply > li span:nth-child(1)
  {
    color:#5091ca ;
  }
  /*用户评论，点赞，关注*/
  .user-thumbs-up
  {
    display: flex;
    line-height: 25px;
    justify-content: flex-end;
  }
  .user-thumbs-up>span
  {
    margin: 0 10px 0 0px;/*500*/
    font-size: 12px;
  }
  .user-thumbs-up >div span
  {
    border-left: 1px solid #dfcfe7;
    padding: 0 10px;
    height: 12px;
    display: inline-block;
    line-height: 12px;
  }
  .user-thumbs-up >div span i
  {
    color: #666666;
    font-size: 12px;
  }
  .user-thumbs-up >div span:nth-child(1) i
  {
    font-size: 20px;
  }
  .img-container
  {
    margin: 0 15px 0 0;
  }
  .user-reply li
  {
    background-color: #f4f4f4;
    line-height: 30px;
    padding: 0 10px;
  }
</style>