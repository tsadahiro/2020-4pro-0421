var app = new Vue({
    el: '#app',
    data: {
	message: 'Hello Sadahiro',
	items: [],
    },
    methods:{
	paste(){
	    this.message = this.message +" AIUEO";
	}
    },
    mounted(){ //ロードされたときに呼び出される
	for (i=1; i<=100; i++){
	    this.items.push(i); // 配列itemsにiを追加
	}
    }
})
