<template>
  <div class="table" style="position: absolute; top: 425px">
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <!-- style="width: 60%" -->
      <el-table-column prop="date" label="Date" sortable width="180" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column
        prop="address"
        label="Address"
        :formatter="formatter"
        width="180"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style lang="scss" scoped>
div.table {
  //   width: 100%;
  //   height: 300px;
  //   margin: 30px 0 0 50px;
}
</style>
