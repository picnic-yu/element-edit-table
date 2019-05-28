<template>
<div>
  <!-- <v-table-extends :data="tableData3" table-ref='multipleTable1' @keywordDown='keywordDown' @handleDeleteRow='handleDeleteRow' @handleEditRow='handleEditRow' @handleCreate='handleCreate'   ref="multipleTable" highlight-current-row>
		<v-table-column type="selection" width="55" ></v-table-column>
		<v-table-column type="index" label="序号" width="60"></v-table-column>
		<v-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></v-table-column>
		<v-table-column prop="date" label="日期"></v-table-column>
		<v-table-column prop="name" label="姓名"></v-table-column>
		<v-table-column prop="IsAudit" :isEdit= 'checkoutStatue'  :formatter="formatterColumn" label="审核状态" ></v-table-column>
		<v-table-column prop="address" label="地址"></v-table-column>
	</v-table-extends> -->
  <!-- <v-table-extends :data="tableData3" table-ref='multipleTable2' ref="multipleTable" highlight-current-row>
		<v-table-column type="selection" width="55" ></v-table-column>
		<v-table-column type="index" label="序号" width="60"></v-table-column>
		<v-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></v-table-column>
		<v-table-column prop="date" label="日期"></v-table-column>
		<v-table-column prop="name" label="姓名"></v-table-column>
		 <v-table-column prop="IsAudit"  :formatter="formatterColumn" label="审核状态" ></v-table-column>
		<v-table-column prop="address" label="地址"></v-table-column>
	</v-table-extends> -->
  <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
  <v-table :columns='columns' :data='data'></v-table>
</div>
	
</template>
<script>
import VTable from './v-table';
export default { 
  components:{
    VTable
  },  
	data() {
		return {
      checkoutStatue:true,
      input:'',
      tableData3: [{
        id:'1',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:0,
        sex:'1',
        isEdit:false,
      }, {
        id:'2',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:1,
        isEdit:false,
        sex:'0'
      }, {
        id:'3',
        isEdit:true,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:10,
        sex:'-1'
      }],
      columns:[
        { field: "type", title: "远程类型", width: 120 },
        { field: "addport", title: "连接地址", width: 150 },
        { field: "user", title: "登录用户", width: 120 },
        { field: "pwd", title: "登录密码", width: 220 },
        { field: "info", title: "其他信息" }
      ],
      data:[]
    }
	},
	mounted() {
	},
	methods: {
		formatSex: function (row, column, cellValue, index) {
			return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },

    keywordDown(index,row){
      console.log(index,row)
    },
    handleCreate(){
      console.log(22222222)
    },
    handleEditRow(row){
      console.log(row,'row')
      console.log(this.tableData3)
    },
    handleDeleteRow(row){
      console.log(row)
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
