<script lang="ts" setup>
// Echarts 为init（dom元素后的类型）
// EChartsOption 为 option 的类型
import { ECharts, EChartsOption, init } from 'echarts'
import { onMounted } from 'vue'

onMounted(() => {
  const charEle = document.getElementById('char') as HTMLElement
  const charEch: ECharts = init(charEle)
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 11230, 2214, 111218, 135, 147, 2160],
        type: 'line',
      },
    ],
  }
  charEch.setOption(option)
})
</script>
<template>
  <div id="char" style="width: 600px; height: 600px"></div>
</template>

<style scoped></style>
