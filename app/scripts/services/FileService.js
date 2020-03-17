var FileService=function(){
    this.downloadFile=(data,language)=>
    {
        var fileName=language+'.json';
        var jsonData = '';
			jsonData = angular.toJson(data.translator,2);
			var blob = new Blob([jsonData], { type:"application/json;charset=utf-8;" });			
			var downloadLink = angular.element('<a></a>');
                        downloadLink.attr('href',window.URL.createObjectURL(blob));
                        downloadLink.attr('download', fileName);
			downloadLink[0].click();
    }
}

module.exports=FileService;