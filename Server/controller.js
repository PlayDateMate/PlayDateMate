module.exports = {

    //=======patients controller=============
    createEvent: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log("test", req.body);
        let {userId, event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy} = req.body;
        console.log(req.user);
        dbInstance.create_event(userId, event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy). then((response) =>{
            console.log(response);
            res.status(200).send('Event Created')

        }).catch(console.log);
    },
    
    cancelEvent: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
    dbInstance.delete_event([params.id])
    .then( () => res.status(200).send() )   
    .catch( () => res.status(500).send() );   
    },

}