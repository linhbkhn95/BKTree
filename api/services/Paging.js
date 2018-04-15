module.exports ={
    generate_keySearch:function(data){
        var sortSearch = data.sortSearch;
        var dataSort = '';
        //generate chuoi sort
        if (sortSearch != undefined && sortSearch.length > 0) {

            if (sortSearch[0].desc === false) {
                dataSort = sortSearch[0].id + " DESC";
            }
            else {
                dataSort = sortSearch[0].id + " ASC";
            }

        }

    
        var dataSearch = data.keySearch;

        var likeSearch = {};
        //generate ra chuoi like search
        if (dataSearch != undefined && dataSearch.length > 0) {
            dataSearch.forEach(function (item) {

                likeSearch[item.id] = '%' + item.value + '%';
            })
        }   
      
        
        if (dataSort === '') {
            if(!Paging.isEmpty(likeSearch))
              return  keySearch = { where: { like: likeSearch } };
             return  keySearch = {};
            // console.log('keysearch',keySearch);
        }
        else {
            if(!Paging.isEmpty(likeSearch))
               return  keySearch = { where: { like: likeSearch, sort: dataSort } };
               return  keySearch = { where: { sort: dataSort } };
            
        }


    },
     isEmpty : function(obj) {
        return Object.keys(obj).length === 0;
      },
      
    caculate_get:function(){
        
    }
}