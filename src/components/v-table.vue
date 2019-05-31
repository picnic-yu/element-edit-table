<template>
    <div>
        <el-form label-position="right" status-icon :rules="rules" :model="editTableOption.sel" ref="ruleForm">
            <v-table-extends  
            :data="editTableOption.data" 
            border style="width: 100%" 
            table-ref='multipleTable1' 
            @keywordDown='keywordDown' 
            @handleDeleteRow='handleDeleteRow'
            @handleEnter='handleEnter' 
            @handleEditRow='handleEditRow' 
            @handleCreate='handleCreate'
            @row-dblclick='rowDblclick'   
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
        
        
    },
    mounted(){
        this.editTableOption.columns = [...this.columns];
        this.editTableOption.data.forEach((item, index) => {
            item.index = index;
        });
        this.rules = this.formRules;
    },
    methods: {
        // 点击一行
        handleCurrentChange(row, event, column){
            if(row.isSet) return;
            this.pwdChange(this.editTableOption.data[this.insertIndex],this.insertIndex);
        },
        keywordDown(index,row){
            if(!row.isSet) return;
            this.pwdChange(row,index);

        },
        handleCreate(){
            if(this.editTableOption.data){
                for (let i of this.editTableOption.data) {
                    if (i.isSet) return;
                }
            }
            this.handlePushItem();
        },
        rowDblclick(row, event){
            this.handleEditRow(row);
        },
        handleEditRow(row){
            for (let i of this.editTableOption.data) {
                if (i.isSet) return;
            }
            this.editTableOption.data.forEach((item)=>{
                item.isSet = false;
            });
            this.editTableOption.sel = row;
            this.editTableOption.data[row.index].isSet = true;
        },
        // 回车
        handleEnter(row){
            for (let i of this.editTableOption.data) {
                if (i.isSet) return;
            }
            alert('您按了回车')
        },
        handleDeleteRow(row){
            for (let i of this.editTableOption.data) {
                if (i.isSet) return;
            }
            this.editTableOption.data.splice(row.index,1);
        },
        //新增
        handlePushItem() {
            let index = this.editTableOption.data.length;
            this.insertIndex = index;
            let j = {};
            this.columns.forEach((item) => {
                j[item.field] = '';
                j['isSet'] = true;
                j['index'] = index;
            });
            this.editTableOption.data.push(j);
            this.editTableOption.sel = JSON.parse(JSON.stringify(j));
            setTimeout(()=>{
                var inputs= document.getElementsByClassName("el-form-item__content");
                inputs[0].querySelector('input').focus();
            },1)
        },
        //修改
        pwdChange(row, index, cg) {
            if (cg) return row.isSet = true;
            //提交数据
            if (row.isSet) {
                let self = this;
                this.$refs['ruleForm'].validate(valid => {
                    if (valid) {
                        //根据状态dialogStatus判断是新增还是更新
                        let data = JSON.parse(JSON.stringify(this.editTableOption.sel));
                        this.insertIndex = row.index;
                   
                        for (let k in data) row[k] = data[k];
                        row.isSet = false;
                    } else {
                            setTimeout(()=>{
                                var isError= document.getElementsByClassName("is-error");
                                isError[0].querySelector('input').focus();
                            },1)
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