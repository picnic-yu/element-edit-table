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
                <el-table-column v-for="(v,i) in editTableOption.columns" :key='i' :prop="v.field" :label="v.title" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.isSet">
                            <el-form-item :prop='v.field' v-if='v.type == "select"'>
                                <el-select v-model="editTableOption.sel[v.field]" placeholder="请选择">
                                    <el-option
                                    v-for="item in v.option"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.code">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item :prop='v.field' v-else-if='v.type == "date"'>
                                <el-date-picker
                                    v-model="editTableOption.sel[v.field]"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            
                            <el-form-item :prop='v.field' v-else>
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
        data:Array,
        formRules:Object,
        actionIndex:Number
    },
    data(){
        return{
            editTableOption: {
                sel: null,//选中行   
                columns: [
                   
                ],
                data: [],
            },
            rules: {
                
            },
            ruleForm:{

            },
            insertIndex:null

        }
    },
    watch:{
        
        data(val){
            this.editTableOption.data = [...val];
            this.editTableOption.data.forEach((item, index) => {
                item.index = index;
            });
        },
    },
    mounted(){
        this.editTableOption.data = [...this.data];
        this.editTableOption.columns = [...this.columns];
        this.editTableOption.data.forEach((item, index) => {
            item.index = index;
        });
        this.rules = this.formRules;
    },
    methods: {
    
        handleCurrentChange(row, event, column){
            // console.log(row,event,column)
        },
        keywordDown(index,row){
            if(!row.isSet) return;
            this.pwdChange(row,index)
        },
        handleCreate(){
            this.handlePushItem();
        },
        handleEditRow(row){
            this.editTableOption.data.forEach((item)=>{
                item.isSet = false;
            });
            this.editTableOption.sel = row;
            this.editTableOption.data[row.index].isSet = true;
            console.log('row',row);
            console.log('this.editTableOption.data[row.index]',this.editTableOption.data[row.index]);

        },
        handleDeleteRow(row){
            
            this.$emit('handleDelete',row);
        },
        //新增
        handlePushItem() {
            for (let i of this.editTableOption.data) {
                if (i.isSet) return alert("请先保存当前编辑项");
            }
            let index = this.editTableOption.data.length;
            this.insertIndex = index;
            let j = {}
            this.columns.forEach((item) => {
                j[item.field] = '';
                j['isSet'] = true;
                j['index'] = index;
            });
            this.editTableOption.data.push(j);
            this.editTableOption.sel = JSON.parse(JSON.stringify(j));
        },
        //修改
        pwdChange(row, index, cg) {
            //点击修改 判断是否已经保存所有操作
            // for (let i of this.editTableOption.data) {
            //     if (i.isSet && i.id != row.id) {
            //         console.log(2222222222222222)
            //         // this.$message.warning("请先保存当前编辑项");
            //         return false;
            //     }
            // }
            // 编辑
            if (cg) return row.isSet = true;
            //提交数据
            if (row.isSet) {
                let self = this;
                this.$refs['ruleForm'].validate(valid => {
                    if (valid) {
                        //根据状态dialogStatus判断是新增还是更新
                        let data = JSON.parse(JSON.stringify(this.editTableOption.sel));
                        this.insertIndex = row.index;
                        this.$emit('handleSubmit',row,this.editTableOption.sel);
                        // app.$message({
                        //     type: 'success',
                        //     message: "保存成功!"
                        // });
                        //然后这边重新读取表格数据
                        row.isSet = false;
                        // if(!this.editTableOption.sel.id ){
                        //     this.editTableOption.sel.id=1
                        //     this.editTableOption.data.push(this.editTableOption.sel)
                        //     row.isSet = false;
                        // }else{
                        //     for (let k in data) row[k] = data[k];
                        //     row.isSet = false;
                        // }
                    } else {
                            // alert(222)
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