module.exports = {

    //=======patients controller=============
    createEvent: (req, res) => {
            console.log("Hit The server")
            let userId = 1
            console.log("test", req.body);
            const db = app.get('db')
            let {event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy} = req.body;
            // console.log(req.user);
            db.create_event([event_description, address, event_name, start_date, end_date, age_min, age_max, city, zipcode, privacy])
            .then(response =>{
                res.send(response)
            })
    },
    
    cancelEvent: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
    dbInstance.delete_event([params.id])
    .then( () => res.status(200).send() )   
    .catch( () => res.status(500).send() );   
    },

}