<template>
    <el-table :ref="tableRef"
    class="elx-table"
    @row-click='handleRowClick'
    :data="data"
    :height="height"
    :maxHeight="maxHeight"
    :stripe="stripe"
    :border="border"
    :size="size"
    :fit="fit"
    :showHeader="showHeader"
    :highlightCurrentRow="highlightCurrentRow"
    :currentRowKey="currentRowKey"
    :rowClassName="rowClassName"
    :rowStyle="rowStyle"
    :cellClassName="cellClassName"
    :cellStyle="cellStyle"
    :headerRowClassName="headerRowClassName"
    :headerRowStyle="headerRowStyle"
    :headerCellClassName="headerCellClassName"
    :headerCellStyle="headerCellStyle"
    :rowKey="rowKey"
    :emptyText="emptyText"
    :defaultExpandAll="defaultExpandAll"
    :expandRowKeys="expandRowKeys"
    :defaultSort="defaultSort"
    :tooltipEffect="tooltipEffect"
    :showSummary="showSummary"
    :sumText="sumText"
    :spanMethod="spanMethod">
    <slot></slot>
        
        
    </el-table>
</template>
<script>
import PropsStatic from './props'
export default {
    name:"v-table-extends",
    props: {
        ...PropsStatic.table
    },
    data(){
        return {
            activeIndex:-1,
            clickRowItem:{},
            isClickRow:false
        }
    },
    computed: {
        len() {
            return this.data.length - 1
        },
        throttleHandleKey() {
            return this.throttle(this.handleKey)
        }
    },
    mounted() {
        window.addEventListener("keydown", this.throttleHandleKey);
    }, 
    destroyed(){
        window.removeEventListener('keydown');
    },
    methods:{
        handleKey(e) {
            e.keyCode === 40 && this.down();
            e.keyCode === 38 && this.up();
            // Q 81
            // i  新增 73
            e.keyCode === 73 && this.handleCreate();
            // u 修改  85
            e.keyCode === 85 && this.handleEditRow();
            // d delete 68
            e.keyCode === 68 && this.handleDeleteRow();
        },
        // 快捷键新增事件  
        handleCreate(){
            this.$emit('handleCreate')
        },
        // 快捷键编辑
        handleEditRow(){
            let row = this.clickRowItem;
            if(this.isClickRow){
                this.$emit('handleEditRow',row)
            }
        },
        handleDeleteRow(){
            let row = this.clickRowItem;
            if(this.isClickRow){
                this.$emit('handleDeleteRow',row)
            }
        },
        throttle(fn, timeout = 100) {
            let flag = true
            return function(e) {
                if (!flag) return false
                fn(e)
                flag = false
                setTimeout(() => (flag = true), timeout)
            }
        },
        setCurrentRow () {
            this.$refs[this.tableRef].setCurrentRow(this.data[this.activeIndex])
        },
        // 点击某一行
        handleRowClick(row, event, column){
            this.isClickRow = true;
            this.clickRowItem = row;
            this.$emit('row-click',row, event, column);
        },
        down() {
            this.activeIndex < this.len
                ? this.activeIndex++
                : (this.activeIndex = 0)
            this.setCurrentRow()
        },
        up() {
            this.activeIndex > 0
                ? this.activeIndex--
                : (this.activeIndex = this.len)
            this.setCurrentRow()
        }
    }
}
</script>