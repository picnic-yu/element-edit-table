<template>
	<v-table-extends :data="tableData3"  ref="multipleTable">
		<el-table-column type="selection" width="55" ></el-table-column>
		<el-table-column type="index" label="序号" width="60"></el-table-column>
		<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></el-table-column>
		<el-table-column prop="date" label="日期"></el-table-column>
		<el-table-column prop="name" label="姓名"></el-table-column>
		 <el-table-column prop="IsAudit"  :formatter="formatterColumn" label="审核状态" ></el-table-column>
		<el-table-column prop="address" label="地址"></el-table-column>
	</v-table-extends>
</template>
<script>
export default {   
	data() {
		return {
      tableData3: [{
        id:'1',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:0,
        sex:'1'
      }, {
        id:'2',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:1,
        sex:'0'
      }, {
        id:'3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:10,
        sex:'-1'
      }]
    }
	},
	mounted() {
	},
	methods: {
		formatSex: function (row, column, cellValue, index) {
			return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
		},
		//状态改成汉字
    formatterColumn(row, column) {
      switch(row.IsAudit){
        case 0:
          return '未通过'
          break
        case 1:
          return '审核通过'
          break
        case 10:
          return '待审核'
          break
        case 9:
          return '草稿'
          break
        default:
          return '未知'
      }
    }
  }
}
</script>
