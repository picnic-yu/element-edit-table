<template>
    <el-table :ref="tableRef"
    class="elx-table"
    @row-click='handleRowClick'
    @select='select'
    @select-all='selectAll'
    @selection-change='selectionChange'
    @cell-mouse-enter='cellMouseEnter'
    @cell-mouse-leave='cellMouseLeave'
    @cell-click='cellClick'
    @cell-dblclick='cellDblclick'
    @row-contextmenu='rowContextmenu'
    @row-dblclick='rowDblclick'
    @header-click='headerClick'
    @sort-change='sortChange'
    @filter-change='filterChange'
    @current-change='currentChange'
    @header-dragend='headerDragend'
    @expand-change='expandChange'
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
        ...PropsStatic.table,
        insertIndex:Number
    },
    watch:{
        insertIndex(val){
            this.activeIndex = val;
            this.setCurrentRow();
        },
        data(val){

        }
    },
    data(){
        return {
            activeIndex:0,
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
        // window.removeEventListener('keydown');
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
            this.isClickRow = true;
            this.clickRowItem = this.data[this.activeIndex];
            this.$refs[this.tableRef].setCurrentRow(this.data[this.activeIndex])
        },
        // select-all 当用户手动勾选全选 Checkbox 时触发的事件
        selectAll(selection){
            this.$emit('select-all',selection);
        },
        // 当用户手动勾选数据行的 Checkbox 时触发的事件
        select(selection, row){
            this.$emit('select',selection, row);
        },
        // selection-change	当选择项发生变化时会触发该事件	selection
        selectionChange(selection){
            this.$emit('selection-change',selection);
        },
        // cell-mouse-enter	当单元格 hover 进入时会触发该事件	row, column, cell, event
        cellMouseEnter(row, column, cell, event){
            this.$emit('cell-mouse-enter',row,column,cell,event);
        },
        // cell-mouse-leave	当单元格 hover 退出时会触发该事件	row, column, cell, event
        cellMouseLeave(row,column,cell,event){
            this.$emit('cell-mouse-leave',row, column, cell, event);
        },
        // cell-click	当某个单元格被点击时会触发该事件	row, column, cell, event
        cellClick(row, column, cell, event){
            this.$emit('cell-click',row, column, cell, event);
        },
        // cell-dblclick	当某个单元格被双击击时会触发该事件	row, column, cell, event
        cellDblclick(row, column, cell, event){
            this.$emit('cell-dblclick',row, column, cell, event);
        },

        // 点击某一行
        handleRowClick(row, event, column){
            this.isClickRow = true;
            this.clickRowItem = row;
            // this.clickIndex = 
            this.$emit('row-click',row, event, column);
        },
        // row-contextmenu	当某一行被鼠标右键点击时会触发该事件	row, event
        rowContextmenu(row, event){
            this.$emit('row-contextmenu', row, event);
        },
        // row-dblclick	当某一行被双击时会触发该事件	row, event
        rowDblclick(row, event){
            this.$emit('row-dblclick', row, event);
        },
        // header-click	当某一列的表头被点击时会触发该事件	column, event
        headerClick(column, event){
            this.$emit('header-click', column, event);
        },
        // sort-change	当表格的排序条件发生变化的时候会触发该事件	{ column, prop, order }
        sortChange(column, prop, order){
            this.$emit('sort-change', column, prop, order);
        },
        /**
         * filter-change	
        当表格的筛选条件发生变化的时候会触发该事件，
        参数的值是一个对象，对象的 key 是 column 的 columnKey，
        对应的 value 为用户选择的筛选条件的数组。	filters
         */
        filterChange(filters){
            this.$emit('filter-change', filters);
        },
        /**
         * current-change	当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性	currentRow, oldCurrentRow */
        currentChange(currentRow,oldCurrentRow){
            this.$emit('current-change',currentRow,oldCurrentRow)
        },
        /**
         * header-dragend	当拖动表头改变了列的宽度的时候会触发该事件	newWidth, oldWidth, column, event */
        headerDragend(newWidth, oldWidth, column,event){
            this.$emit('header-dragend',newWidth, oldWidth, column, event);
        },
        // expand-change	当用户对某一行展开或者关闭的时候会触发该事件	row, expandedRows
        expandChange(row, expandedRows){
            this.$emit('expand-change', row, expandedRows);
        },
        down() {
            this.$emit('keywordDown',this.activeIndex,this.data[this.activeIndex]);
            if(this.data[this.activeIndex].isSet) return;
            this.activeIndex < this.len
                ? this.activeIndex++
                : (this.activeIndex = 0)
            
            this.setCurrentRow()
        },
        up() {
            this.$emit('keywordDown',this.activeIndex,this.data[this.activeIndex]);
            this.activeIndex > 0
                ? this.activeIndex--
                : (this.activeIndex = this.len)
            this.setCurrentRow()
        }
    }
}
</script>