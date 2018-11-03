export default {   
   database: { 
      uri: 'mongodb://localhost:27017/sample',
      options: {
         useNewUrlParser: true,
         debug: false
      }
   },
   server: {
      port: 3001,
      options: {
         bodyParser: {
            json: {
                limit: '10mb', 
                type: 'application/json'
            }, 
            urlencoded: {
                limit: '10mb', 
                extended: true
            }
        },
        cors: [{
            route: "/*",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization, Content-Type, Origin, Accept, X-Requested-With, Origin, Cache-Control, X-File-Name",
                "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS, DELETE"
            }
        }]
      }
   },
   auth: { 
      secret: '87gbi2ep0f138bf1b' 
   }
}