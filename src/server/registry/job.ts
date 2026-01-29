import { JobCenter, JobServer } from "@occultus/api";
import { traveler } from "../job/traveler";
import { CommandPermissionLevel } from "@minecraft/server";
import { warrior } from "../job/beginner/warrior";
import { archer } from "../job/beginner/archer";
import { pastor } from "../job/beginner/pastor";
import { wizard } from "../job/beginner/wizard";
import { amnestyPastor } from "../job/advanced/amnestyPastor";
import { arcaneWizard } from "../job/advanced/arcaneWizard";
import { assassin } from "../job/advanced/assassin";
import { berserker } from "../job/advanced/berserker";
import { conjureWizard } from "../job/advanced/conjureWizard";
import { magicArcher } from "../job/advanced/magicArcher";
import { orisonPastor } from "../job/advanced/orisonPastor";
import { swordman } from "../job/advanced/swordman";

export const jobServer = new JobServer();
export const jobCenter = new JobCenter("hiddenyears:job_center", jobServer);

export function registryJob() {
  jobServer.addJob(traveler);
  jobServer.addJob(warrior);
  jobServer.addJob(archer);
  jobServer.addJob(pastor);
  jobServer.addJob(wizard);
  jobServer.addJob(amnestyPastor);
  jobServer.addJob(arcaneWizard);
  jobServer.addJob(assassin);
  jobServer.addJob(berserker);
  jobServer.addJob(conjureWizard);
  jobServer.addJob(magicArcher);
  jobServer.addJob(orisonPastor);
  jobServer.addJob(swordman);
  jobCenter.addTrigger(null, {
    name: "hiddenyears:job",
    description: " %command.job.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  });
}
