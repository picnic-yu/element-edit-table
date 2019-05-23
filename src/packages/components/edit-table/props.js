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
      index: [Number, Function],//如果设置了 type=index，可以通过传递 index 属性来自定义索引
      type: String,//对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮
      label: String,//显示的标题
      columnKey: String,//column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件
      prop: String,//对应列内容的字段名，也可以使用 property 属性
      width: String,//对应列的宽度
      minWidth: String,//对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
      fixed: [Boolean, String],//列是否固定在左侧或者右侧，true 表示固定在左侧
      renderHeader:Function,// render-header	列标题 Label 区域渲染使用的 Function	Function(h, { column, $index })
      sortable: [Boolean, String],//对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
      sortMethod: Function,//对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致
      sortBy: [String, Array, Function],//指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推。
      resizable: { type: Boolean, default: true },//对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
      formatter: Function,//用来格式化内容
      showOverflowTooltip: { type: Boolean, default: false },//当内容过长被隐藏时显示 tooltip
      align: { type: String, default: 'left' },//对齐方式
      headerAlign: String,//表头对齐方式，若不设置该项，则使用表格的对齐方式
      className: { type: String, default: '' },//列的 className
      labelClassName: String,//当前列标题的自定义类名
      selectable: Function,//仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
      reserveSelection: { type: Boolean, default: false },//仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。
      filters: Array,//数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。
      filterPlacement: String,//过滤弹出框的定位
      filterMultiple: { type: Boolean, default: true },//数据过滤的选项是否多选
      filterMethod: Function,//数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
      filteredValue: Array,//选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
      isEdit:{ type: Boolean, default: false },
    }
  }
  
  export default PropsStatic
  