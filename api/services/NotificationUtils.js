module.exports = {
   
    //thông báo những người comment bài đăng đến ng đăng bài và ng comment bài
    notifiPostUser_Comment:async function(postId,data,req){
        let post = await Post.findOne({id:postId});
        let datanotifi ={
            userId:req.session.user.id,
            url_ref:'/post.notifi.'+postId,
            text:' đã bình luận bài đăng '+post.title+ ' của',
            type:'comment',
            time:Date.now(),
            data:data,
            incognito:req.session.user.incognito
             }
        let notifi = await Notification.create(datanotifi);
         notifi.user_notifi = req.session.user;

         let listIdPostRef = []
         listIdPostRef[0] = req.session.user.id;
         if(post.userId_wall)
             listIdPostRef[1] = post.userId_wall;
         let listUserComment= await Comment.find({postId,groupBy:'userId_comment',userId_comment:{'!':listIdPostRef}}).sum();
         if(post.userId_post!=req.session.user.id)
             listUserComment.push({userId_comment:post.userId_post})
         if(post.userId_wall)
              listUserComment.push({userId_comment:post.userId_wall});
          listUserComment.forEach(user => {
            //tăng sô thông báo tưng user
            User.findOne({id:user.userId_comment}).exec((err,user)=>{
                if(!user.number_notifi)
                    user.number_notifi = 1;
               else
                   user.number_notifi +=1;
                user.save({});
            })
            //tạo thông báo
            Ref_notification_user.create({notificationId:notifi.id,userId:user.userId_comment,readNotifi:false,status:true}).exec({})

            //đồng bộ thông báo điến các user
            sails.sockets.broadcast('NotificationUser',"notifi_user"+user.userId_comment,notifi,req);

         });
    },
    notifiPostUser_Like:function(postId,req){

    },
    notifi_userTree:function(data,req){
        Subscribe_tree.find({room_id: data.room_id}).exec((err,list)=>{
            list.forEach(user => {
                sails.sockets.broadcast('Subscribe_Tree','User:'+user.username, data, req);
                console.log('notifi',user.username)
            })
            
        })
    },
    postToFriend: async function(post,req){
        let listfriend = await Friends.find({ or:[ {userId_one:req.session.user.id,status:1},{userId_two:req.session.user.id,status:1}   ]});
        if(post.userWall){
            let datanotifi ={
                userId:req.session.user.id,
                url_ref:'/post.notifi.'+post.id,
                text: 'Đã đăng lên tường của bạn',
                type:'friend',
                time:Date.now(),
                data:post
                 }
                 let notifi = await Notification.create( datanotifi)
                 notifi.user_notifi = req.session.user;
                 User.findOne({id:post.userWall.id}).exec((err,user)=>{
                    if(!user.number_notifi)
                        user.number_notifi = 1;
                   else
                       user.number_notifi +=1;
                    user.save({});
                })
                Ref_notification_user.create({notificationId:notifi.id,userId:post.userWall.id,readNotifi:false,status:true}).exec({})
                sails.sockets.broadcast('NotificationUser',"notifi_user"+post.userWall.id,notifi,req);


                
        }
        for(var i = 0;i<listfriend.length;i++){
             
            let userIdPatner = listfriend[i].userId_one==req.session.user.id?listfriend[i].userId_two:listfriend[i].userId_one

            
            sails.sockets.broadcast('Subscribe_Status',"post"+userIdPatner,post,req);

       }
    },
    notifiAccessFriend:async function(statusFriend,userFriend,req){
        // let post = await Post.findOne({id:postId});
        let datanotifi ={
            userId:req.session.user.id,
            url_ref:'',
            text: statusFriend==0?' đã yêu gửi yêu cầu kết bạn đến ':" đã đồng ý kết bạn với ",
            type:'friend',
            time:Date.now(),
            data:userFriend
             }
        let notifi = await Notification.create(datanotifi)
         notifi.user_notifi = req.session.user;
         User.findOne({id:userFriend.id}).exec((err,user)=>{
            if(!user.number_notifi)
                user.number_notifi = 1;
           else
               user.number_notifi +=1;
            user.save({});
            });

            Ref_notification_user.create({notificationId:notifi.id,userId:userFriend.id,readNotifi:false,status:true}).exec({})
            sails.sockets.broadcast('NotificationUser',"notifi_user"+userFriend.id,notifi,req);

    },
    like: "like"

}
