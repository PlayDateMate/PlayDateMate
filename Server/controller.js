module.exports = {

    //=======events controller=============
    createEvent: (req, res) => {
        // let user_id = 1
        console.log("test", req.body);
        let {event_description, address, event_name, start_date, end_date, age_min, age_max, city, zipcode, privacy} = req.body;
        console.log(req.user);
        req.app.get('db').create_event(event_description, address, event_name, start_date, end_date, age_min, age_max, city, zipcode, privacy). then((response) =>{
            console.log(response);
            res.status(200).send(response)

        }).catch(console.log);
    },

    getEvents: (req, res) => {
        req.app.get('db').get_user_events(req.params.user_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)
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