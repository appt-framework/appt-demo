export default {   
   database: { 
      uri: 'mongodb://localhost:27017/sample',
      options: {
         useNewUrlParser: true,
         debug: false
      }
   },
   server: {
      port: 3000
   },
   auth: { 
      secret: '87gbi2ep0f138bf1b' 
   }
}