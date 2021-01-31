<!--歌单收藏者-->
<template>
  <div class="subscribers"><!--userId-->
      <ul>
        <li v-for="(item,index) in collector" :key="index">
          <msg-list>
            <div slot="imgContainer" class="img-container">
              <img v-lazy="item.avatarUrl+'?param=91y91'" />
            </div>
            <div slot="state" class="state">
              {{item.nickname}}
            </div>
          </msg-list>
        </li>
      </ul>
  </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
export default {
  name: "Subscribers",
  components: {MsgList},
  props:{
    collector:{
      type:Array,
      default()
      {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .subscribers
  {
    padding: 0 30px 0 0;
    margin: 20px 0 0 0;
  }
  .subscribers ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .subscribers ul li
  {
    width: 377px;
    position: relative;
    margin: 0 0 15px 0;
  }
  .img-container img {
    width: 91px;
    border-radius: 50%;
  }
  .state
  {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 101px;
    font-size: 14px;
  }
</style>