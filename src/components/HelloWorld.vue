<template>
<div>
  <v-table :columns='columns' :data='data' @handleDelete='handleDelete'></v-table>
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
      columns:[
        { 
          field: "type", 
          title: "远程类型", 
          width: 120,
          type:'select',
          option:[
            {
              code:'1',
              value:'公司'
            },
            {
              code:'2',
              value:'住宅'
            }
          ] 
        },
        { field: "addport", title: "连接地址", width: 150,type:'date' },
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
    handleDelete(row){
      console.log(row);
      console.log(this.data)
    },
		
  }
}
</script>
