import { CronJob } from 'cron';

type CronTime = string | Date
type OnTick = () => void

export class CronService {

    static createJob( cronTime: CronTime, onTick: OnTick): CronJob {
        console.log("Server is running...");
        

        const job = new CronJob(
            cronTime, // cronTime
            onTick, // onTick
        );
        job.start();
        return job;
    }



}