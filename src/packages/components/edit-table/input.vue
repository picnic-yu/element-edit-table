<template>
    <div>
        <el-input   v-model='inputValue' />
    </div>
</template>
<script>
export default {
    name:'v-input',
    data(){
        return{
            inputValue:''
        }
    },
    props:{
        data:Object
    },
    beforeMount(){
        this.data.sel = this.data.row;
        this.inputValue = this.data.sel[this.data.column.property]
        console.log(this.data);
        // this.data.column.propertys= this.data.column.property;
    }
}
</script>