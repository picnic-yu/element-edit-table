<template>
    <el-table ref="refElTable"
    class="elx-table"
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
    :lazy="lazy"
    :indent="indent"
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
    :selectOnIndeterminate="selectOnIndeterminate"
    :spanMethod="spanMethod"
    :load="load">
    <slot></slot>
        
        
    </el-table>
</template>
<script>
import PropsStatic from './props'
export default {
    name:"v-table-extends",
    props: {
        config: Object,
        customColumns: Array,
        ...PropsStatic.table
    } 
}
</script>