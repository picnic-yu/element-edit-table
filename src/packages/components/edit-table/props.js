const PropsStatic = {
    table: {
      data: Array,//显示的数据
      height: [String, Number],//Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式。
      maxHeight: [String, Number],//Table 的最大高度
      stripe: { type: Boolean, default: false },//是否为斑马纹 table
      border: { type: Boolean, default: false },//是否带有纵向边框
      size: String,//Table 的尺寸
      fit: { type: Boolean, default: true },//列的宽度是否自撑开
      showHeader: { type: Boolean, default: true },//是否显示表头
      highlightCurrentRow: { type: Boolean, default: false },//是否要高亮当前行
      currentRowKey: [String, Number],//当前行的 key，只写属性
      rowClassName: [Function, String],//行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
      rowStyle: [Function, Object],//行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
      cellClassName: [Function, String],//单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
      cellStyle: [Function, Object],//单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
      headerRowClassName: [Function, String],//表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className
      headerRowStyle: [Function, Object],//表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
      headerCellClassName: [Function, String],//表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。
      headerCellStyle: [Function, Object],//表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style
      rowKey: [Function, String],//行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function
      emptyText: String,//空数据时显示的文本内容，也可以通过 slot="empty" 设置
      defaultExpandAll: Boolean,//是否默认展开所有行，当 Table 中存在 type="expand" 的 Column 的时候有效
      expandRowKeys: Array,//可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
      defaultSort: Object,//默认的排序列的prop和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
      tooltipEffect: { type: String, default: 'dark' },//tooltip effect 属性
      showSummary: { type: Boolean, default: false },//是否在表尾显示合计行
      sumText: String,//合计行第一列的文本
      summaryMethod: Function,//自定义的合计计算方法
      spanMethod: Function,//合并行或列的计算方法
      tableRef:{ type: String, default: 'editTable' }
      
    },
    tableColumn: {
      index: [Number, Function],
      type: String,
      label: String,
      columnKey: String,
      prop: String,
      width: String,
      minWidth: String,
      fixed: [Boolean, String],
      sortable: [Boolean, String],
      sortMethod: Function,
      sortBy: [String, Array, Function],
      sortOrders: Array,
      resizable: { type: Boolean, default: true },
      formatter: Function,
      showOverflowTooltip: Boolean,
      align: { type: String, default: 'left' },
      headerAlign: String,
      className: { type: String, default: '' },
      labelClassName: String,
      selectable: Function,
      reserveSelection: Boolean,
      filters: Array,
      filterPlacement: String,
      filterMultiple: { type: Boolean, default: true },
      filterMethod: Function,
      filteredValue: Array
    }
  }
  
  export default PropsStatic
  