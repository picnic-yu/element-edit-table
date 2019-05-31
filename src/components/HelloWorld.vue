<template>
<div>
  <v-table  :formRules='formRules' :columns='columns'></v-table>
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
          // type:'select',
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
        { field: "addport", title: "连接地址", width: 150 },
        { field: "user", title: "登录用户", width: 120 },
        { field: "pwd", title: "登录密码", width: 220 },
        { field: "info", title: "其他信息" }
      ],
      data:[],
      formRules:{
        user:[
          { required: true, message: '登录用户不能为空', trigger: 'blur' }
        ],
        addport:[
          { required: true, message: '连接地址不能为空', trigger: 'blur' }
        ]
      },
    }
	},
	mounted() {
	},
	methods: {
    
  }
}
</script>
