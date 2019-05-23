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
        
        <template v-slot="scope" v-if='type !=="index" && type!=="selection"' >
            <div v-if='scope.row.isEdit && type !=="index" && type!=="selection"'>
              
                <el-input   v-model='scope.row[scope.column.property]' />
                <slot v-bind='getScope(scope)'></slot>
            </div>
            <div v-else>
              
                {{scope.row[scope.column.property]}}
            </div>
        </template>
    </el-table-column>
</template>
<script>
import PropsStatic from './props'
export default {
    name:'v-table-column',
    data(){
        return {
            test:''
        }
    },
    props: {
        ...PropsStatic.tableColumn
    },
    methods:{
        handleTestClick(scope){
            console.log(scope)
        },
        getScope (scope) {
            console.log(scope)
            return {
                row: scope.row,
                column: scope.column,
                store: scope.store,
                $index: scope.$index,
                $render: this.renderOpts,
                _self: scope._self,
                _row: scope.row
            }
        },
    }
}
</script>