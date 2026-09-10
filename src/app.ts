import { Server } from './presentation/server'



( async()=>{
    await main()
})()



 async function main(){
    console.log("Starting server...")
    Server.start()

}