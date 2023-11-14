<template>
  <main>
    <div class="touxiang">
      <el-image
        :preview-src-list="[touxiang]"
        :src="touxiang"
        fit="cover"
        hide-on-click-modal
      />
    </div>

    <div>个人中心{{ $FormatDate2('2022:12:10') }}</div>
    <div>个人中心{{ FormatDate('2022:12:10') }}</div>

    <div style="width: 200px; margin: 20px">
      <span> 原文</span>
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
        style="width: 200px"
      />
      <span>关键字</span>
      <el-input v-model="target" placeholder="Please input" @change="change" />
    </div>

    <div class="contenet flex">
      <pre>
                　 ＿＿
        　　　　　／＞　　フ
        　　　　　|  　_　 _ l
        　 　　　／  ミ＿xノ
        　　 　 /　　　 　 |
        　　　 /　 ヽ　　 ﾉ
        　 　 │　　|　|　|
        　／￣|　　 |　|　|
        　| (￣ヽ＿_ヽ_)__)
        　＼二つ
     </pre
      >

      <pre>
                "面试官：熟悉哪种语言?"
                "应聘者：Java。"
                "面试官：知道什么叫类么?"
                "应聘者：我这人实在，工作努力，不知道什么叫累"
                "面试官：知道什么是包?"
                "应聘者：我这人实在,平常不带包,也不用公司准备了"
                "面试官：知道什么是接口吗?"
                "应聘者：我这个人工作认真,从来不找借口偷懒"
                "面试官：知道什么是继承么"
                "应聘者：我是孤儿没什么可以继承的"
                "面试官:知道什么叫对象么？"
                "应聘者:知道，不过我工作努力，上进心强，暂时还没有打算找对象。"
                "面试官：知道多态么？"
                "应聘者：知道，我很保守的,我认为让心爱的女人为了自已一时的快乐去堕胎是不道德的行为！请问这和Java有什么关系？"
                "面试官：用过 apache 的东西吗"
                "应聘者：我修过车子"
                "面试官：tomcat了解么"
                "应聘者：小时看过,现在也喜欢看"
                "面试官：了解webwork吗"
                "应聘者：不了解。我一直专注于本职工作，对外部的没有时间涉猎。"
                "面试官:了解jakarta的哪些项目？"
                "应聘者:不了解，我只去那儿旅游过。"
                "面试官:用过bea的weblogic吗？"
                "应聘者:没，只喝过蜂蜜。"
                "面试官:了解SUN的创始人吗？"
                "应聘者:不知道，不过我爆喜欢队中的纳什"
                "面试官：用过spring么？"
                "应聘者：没用过，发过。"
                "面试官：知道 Hibernate吗"
                "应聘者：知道，动物冬天经常 Hibernate,但我从来不冬眠"
                "面试官：知道css吗?"
                "应聘者：cs出加强版了？"
                "面试官：OCR用作过没？"
                "应聘者：我从不玩魔兽"
                "面试官：W3C标准常用什么地方"
                "应聘者：Lost Tample"
                "面试官：知道REST么？"
                "应聘者：我很勤奋，只知道干活，不知道 "
  </pre
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
// 通过inject获取挂载在全局的globalFunc方法
const FormatDate: any = inject('FormatDate')
const touxiang = '/src/assets/picture/img1.jpg'

const textarea = ref('')
const target = ref('')
function change(e: string) {
  searchStrIndexOf(textarea.value, target.value)
}
/**
 * str { String } 完整字符串
 * tatget { String } 目标对象，要查找的字符串
 */
function searchStrIndexOf(str: string, target: string) {
  let index = str.indexOf(target)
  let sum = 0
  while (index > -1) {
    index = str.indexOf(target, index + 1)
    sum++
  }
  console.log(target, '出现次数:', sum)

  return sum
}
</script>
<style>
/*
 点击预览图片的时候，图片受到_reset.scss里面
    img {
      width: 100%;
    }
    的影响，让宽度为100了，图片会变形
    需要重新设置.el-image-viewer__canvas img的width
    而且在：  style lang="scss" scoped 中写不生效，必须在这里面写
*/
.el-image-viewer__canvas img {
  width: auto;
}
</style>
<style lang="scss" scoped>
main {
  overflow-y: scroll;
  .touxiang {
    width: 200px;
    height: 200px;

    overflow: hidden;
    .el-image {
      width: 400px;
      display: block;
      min-height: 150px;
    }
  }
}
</style>
