
module.exports={
    compareNow:function(time){
          let timeNow = Date.now();
          let timeCaculate = timeNow - time
          return timeCaculate
    }
}