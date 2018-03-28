module.exports ={
    
    getUserFriends:(req, res, next)=>{
        let {user_id} = req.body;
        const dbInstance = req.app.get('db');

        dbInstance.get_users_friends([user_id])
        .then(response=>{res.status(200).send(response)})
        .catch(()=>{res.status(500).send("NOPE!")})
    }
}