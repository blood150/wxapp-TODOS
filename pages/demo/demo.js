Page({
	data:{
		search:'',
		todos:[
			{name:'learning html',selected:false},
			{name:'learning css',selected:true},
			{name:'learning javascript',selected:false}
		],
		leftCount:2,
		allSelected:false
	},
	changHandle(e){
		this.setData({search:e.detail.value})
	},
	addtoHandle(){
		if (!this.data.search) return
		var todos=this.data.todos
		todos.push({
			name:this.data.search,
			selected:false
		})
		this.setData({todos:todos,search:'',leftCount:this.data.leftCount+1})
	},
	toggleHandle(e){
		// console.log(e.currentTarget)
		var item=this.data.todos[e.currentTarget.dataset.index]
		item.selected=!item.selected
		var leftCount=this.data.leftCount+(item.selected?-1:+1)
		this.setData({todos:this.data.todos,leftCount:leftCount})
	},
	removeHandle(e){
		var todos=this.data.todos
		todos.splice(e.currentTarget.dataset.index,1)
		var leftCount=this.data.leftCount-(todos.selected?0:1)
		this.setData({todos:todos,leftCount:leftCount})
	},
	toggleAllHandle(){
		this.data.allSelected=!this.data.allSelected
		var todos=this.data.todos
		todos.forEach(item=>{
			item.selected=this.data.allSelected
		})
		var leftCount=this.data.allSelected?0:this.data.todos.length
		this.setData({todos:todos,leftCount:leftCount})
	},
	clearHandle(){
		var todos=[]
		this.data.todos.forEach(item=>{
			if (!item.selected) {
				todos.push(item)
			}			
		})
		this.setData({todos:todos})
	}
})