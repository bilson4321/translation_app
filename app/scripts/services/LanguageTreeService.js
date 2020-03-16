"use strict"
var LanguageTreeService=function(){
    
    const Node=function(value)
    {   
        this.data=value;
        // this.parent=null;
        this.children=[];
    }
    this.root=new Node("category");

    this.add=(value, toNodeData="category")=>{
        
        var node=new Node(value);
        console.log(node);
        var parent=(typeof toNodeData !== 'undefined')? this.search(toNodeData):null;
        if(parent)
        {
            parent.children.push(node);
        }
        else{
            if(!this.root){
                this.root=node;
            }else{
                return 'Root node is already assigned';
            }
        }
    }
    this.contains=(value)=>{
        return this.search(value)?true:false;
    }
    this.search=(value)=>{
        let queue=[this.root];
        while(queue.length){
            var node=queue.shift();
            if(node.data==value)
            {
                return node;
            }
            for(var i=0;i<node.children.length;i++)
            {
                queue.push(node.children[i]);
            }
        }
        return null;
    }
    this.printTree=()=>{
        if(!this.root) {
            return console.log('No root node found');
          }
          var newline = new Node('|');
          var queue = [this.root, newline];
          var string = '';
          while(queue.length) {
            var node = queue.shift();
            string += node.data.toString() + ' ';
            if(node === newline && queue.length) {
              queue.push(newline);
            }
            for(var i = 0; i < node.children.length; i++) {
              queue.push(node.children[i]);
            }
          }
          console.log(string.slice(0, -2).trim());
    }
}

module.exports=LanguageTreeService;