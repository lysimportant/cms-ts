const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  propsList: [
    { label: '菜单名称', prop: 'name' },
    { label: '级别', prop: 'type', width: '100px' },
    { label: '菜单URL', prop: 'url' },
    { label: '菜单icon', prop: 'icon' },
    { label: '排序', prop: 'sort', width: '100px' },
    { label: '权限', prop: 'permission' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '100px' }
  ],
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}

export default contentConfig
