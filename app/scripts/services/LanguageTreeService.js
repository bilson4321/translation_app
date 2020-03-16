"use strict"
var LanguageTreeService=function(){
    
    const Node=function(value)
    {   
        this.name=value;
        this.data={english:"",japanese:""}
        this.children=[];
    }
    this.root=new Node("translator");

    this.add=(value, toNodeData="translator")=>{
        
        var node=new Node(value);
        var parent=(typeof toNodeData !== 'undefined')? this.search(toNodeData):null;
        console.log("this is parent",parent)
        if(parent)
        {
            parent.children.push(node);
        }
        else{
            if(!this.root){
                this.root=node;
            }else{
                console.log('Root node is already assigned');
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
            if(node.name==value)
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
            string += node.name.toString() + ' ';
            if(node === newline && queue.length) {
              queue.push(newline);
            }
            for(var i = 0; i < node.children.length; i++) {
              queue.push(node.children[i]);
            }
          }
          console.log(string.slice(0, -2).trim());
    }
    this.treeFirstLevel=()=>{
        if(!this.root) {
            console.log('No root node found');
            return null;
          }
       var array=[];
       
       if(this.root.children.length===0)
       {
           return null;
       }
       else
       {
           for(var child of this.root.children){
               array.push(child.name);
           } 
       }
  
       return array;
    }
}

module.exports=LanguageTreeService;