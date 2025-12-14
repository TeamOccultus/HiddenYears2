import { JobCenter, JobServer } from "@occultus/api";
import { traveler } from "../job/traveler";
import { CommandPermissionLevel } from "@minecraft/server";

export function registryJob() {
  const server = new JobServer();
  server.addJob(traveler);
  const center = new JobCenter("hiddenyears:job_center", server);
  center.addTrigger(null, {
    name: "hiddenyears:job",
    description: " %command.job.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false,
  });
}
