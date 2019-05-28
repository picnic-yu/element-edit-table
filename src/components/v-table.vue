<template>
    <div>
        <el-form label-position="right" status-icon :rules="rules" :model="editTableOption.sel" ref="ruleForm">
            
        
            <v-table-extends  
            :data="editTableOption.data" 
            border style="width: 100%" 
            table-ref='multipleTable1' 
            @keywordDown='keywordDown' 
            @handleDeleteRow='handleDeleteRow' 
            @handleEditRow='handleEditRow' 
            @handleCreate='handleCreate'   
            ref="multipleTable" 
            :insertIndex='insertIndex'
            @row-click="handleCurrentChange" 
            highlight-current-row>
                <el-table-column type="index"></el-table-column>
                <el-table-column v-for="(v,i) in editTableOption.columns" :key='i' :prop="v.field" :label="v.title" :width="v.width">
                    <template slot-scope="scope">
                        <span v-if="scope.row.isSet">
                            <el-form-item :prop='v.field' >
                                <el-input  v-model="editTableOption.sel[v.field]" :maxlength=50></el-input>
                            </el-form-item>

                            <!-- <el-input  placeholder="请输入内容" v-model="editTableOption.sel[v.field]">
                            </el-input> -->
                        </span>
                        <span v-else>{{scope.row[v.field]}}</span>
                    </template>
                </el-table-column>
            </v-table-extends>
        </el-form>
    </div>
</template>
<script>

export default {
    props:{
        columns:Array,
        data:Array
    },
    data(){
        return{
            editTableOption: {
                sel: null,//选中行   
                columns: [
                    { field: "type", title: "远程类型", width: 120 },
                    { field: "addport", title: "连接地址", width: 150 },
                    { field: "user", title: "登录用户", width: 120 },
                    { field: "pwd", title: "登录密码", width: 220 },
                    { field: "info", title: "其他信息" }
                ],
                data: [],
            },
            rules: {
                user: [
                    { required: true, message: '证据模板名称不能为空', trigger: 'blur' }
                ]
            },
            ruleForm:{

            },
            insertIndex:null

        }
    },
    mounted(){
        this.editTableOption.data = [...this.data];
        this.editTableOption.columns = [...this.columns];
        this.editTableOption.data.forEach((item, index) => {
            item.index = index;
        });
        
    },
    methods: {
        //读取表格数据
        readMasterUser() {
            //根据实际情况，自己改下啊 
            this.editTableOption.data.map(i => {
                // i.id = generateId.get();//模拟后台插入成功后有了id
                i.isSet=false;//给后台返回数据添加`isSet`标识
                return i;
            });
        },
        handleCurrentChange(row, event, column){
            console.log(row,event,column)
        },
        keywordDown(index,row){
            if(!row.isSet) return;
            this.pwdChange(row,index,true)
        },
        handleCreate(){
            this.addMasterUser();
        },
        handleEditRow(row){
            
            // console.log(this.tableData3)
            // this.editTableOption.data[row.index].isSet = true;
            console.log(row,'row')
            this.pwdChange(row,row.index)
            // this.pwdChange(row,index,true)
        },
        handleDeleteRow(row){
            console.log(row)
        },
        //添加账号
        addMasterUser() {
            for (let i of this.editTableOption.data) {
                if (i.isSet) return alert("请先保存当前编辑项");
            }
            let index = this.editTableOption.data.length;
            this.insertIndex = index;
            let j = {}
            this.columns.forEach((item) => {
                j[item.field] = '';
                j['isSet'] = true;
            });
            // let j = {  "type": "", "addport": "", "user": "", "pwd": "", "info": "", "isSet": true, "_temporary": true,index };
            this.editTableOption.data.push(j);
            
            this.editTableOption.sel = JSON.parse(JSON.stringify(j));
        },
        //修改
        pwdChange(row, index, cg) {
            //点击修改 判断是否已经保存所有操作
            for (let i of this.editTableOption.data) {
                if (i.isSet && i.id != row.id) {
                    // this.$message.warning("请先保存当前编辑项");
                    return false;
                }
            }
            // console.log(row)
            // //是否是取消操作
            // if (!cg) {
            //     if (!this.editTableOption.sel.id) this.editTableOption.data.splice(index, 1);
            //     return row.isSet = !row.isSet;
            // }
            //提交数据
            if (row.isSet) {
                let self = this;
                this.$refs['ruleForm'].validate(valid => {
                    if (valid) {
                        //根据状态dialogStatus判断是新增还是更新
                        let data = JSON.parse(JSON.stringify(self.editTableOption.sel));
                        for (let k in data) row[k] = data[k];
                        // app.$message({
                        //     type: 'success',
                        //     message: "保存成功!"
                        // });
                        //然后这边重新读取表格数据
                        self.readMasterUser();
                        row.isSet = false;
                    } else {
                            alert(222)
                            return false;
                    }
                });

            } else {
                this.editTableOption.sel = JSON.parse(JSON.stringify(row));
                // row.isSet = true;
            }
        }
    }
}
</script>