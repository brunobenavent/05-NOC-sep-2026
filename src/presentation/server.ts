import { CheckService } from '../domain/uses-cases/ckecks/check-service';
import { CronService } from './cron/cron-service';


export class Server {


    static start(){

        
        const interval = 5
        CronService.createJob(`*/${interval} * * * * *`, () =>{
            new CheckService().execute('https:www.google.com');

        });
    }



}