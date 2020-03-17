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
    
    this.tree=()=>{
        if(!this.root) {
            console.log('No root node found');
            return null;
          }
        return this.root;
    }
    this.languageJson=(language="japanese")=>{
        if(!this.root) {
            console.log('No root node found');
            return null;
          }
        var json={};
        
          function extractor(node,language)
          {
            let temp={};
            if(node.children.length===0)
                temp[node.name]=node.data[language];
            else
            {
                var temp2={};
                for(var c of node.children)
                {
                    let temp3=extractor(c,language);
                    Object.assign(temp2,temp3);
                }
                temp[node.name]= temp2;
            }
            return temp;
          }
        
        json=extractor(this.root,language);
        return json;
    }
}

module.exports=LanguageTreeService;