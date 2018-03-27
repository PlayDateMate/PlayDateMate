module.exports = {

    //=======patients controller=============
    createEvent: (req, res) => {
        let userId = 1
        console.log("test", req.body);
        let {event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy} = req.body;
        console.log(req.user);
        req.app.get('db').create_event(event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy, userId). then((response) =>{
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