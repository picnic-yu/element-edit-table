<template>
    <el-table-column 
        :index='index'
        :type='type'
        :label='label'
        :columnKey='columnKey'
        :prop='prop'
        :width='width'
        :minWidth='minWidth'
        :fixed="fixed"
        :renderHeader='renderHeader'
        :sortable='sortable'
        :sortMethod='sortMethod'
        :sortBy='sortBy'
        :resizable='resizable'
        :formatter='formatter'
        :showOverflowTooltip='showOverflowTooltip'
        :align='align'
        :headerAlign='headerAlign'
        :className='className'
        :labelClassName='labelClassName'
        :selectable='selectable'
        :reserveSelection='reserveSelection'
        :filters='filters'
        :filterPlacement='filterPlacement'
        :filterMultiple='filterMultiple'
        :filterMethod='filterMethod'
        :filteredValue='filteredValue'
    >
    </el-table-column>
</template>
<script>
import PropsStatic from './props'
export default {
    name:'v-table-column',
    data(){
        return {

        }
    },
    props: {
        ...PropsStatic.tableColumn
    },
    methods:{

    }
}
</script>