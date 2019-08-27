import { CronJob } from "./cron-job";
import { BlockJob } from "./block-job";
import { injectable, inject } from "../../container";
import { Application } from "../../contracts/kernel";

/**
 * @export
 * @class Schedule
 */
@injectable()
export class Schedule {
    /**
     * @private
     * @type {Application}
     * @memberof BlockJob
     */
    @inject("app")
    private readonly app: Application;

    /**
     * @returns {CronJob}
     * @memberof Schedule
     */
    public cron(): CronJob {
        return this.app.resolve<CronJob>(CronJob);
    }

    /**
     * @returns {BlockJob}
     * @memberof Schedule
     */
    public block(): BlockJob {
        return this.app.resolve<BlockJob>(BlockJob);
    }
}