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

export function registryJob() {
  const server = new JobServer();
  server.addJob(traveler);
  server.addJob(warrior);
  server.addJob(archer);
  server.addJob(pastor);
  server.addJob(wizard);
  server.addJob(amnestyPastor);
  server.addJob(arcaneWizard);
  server.addJob(assassin);
  server.addJob(berserker);
  server.addJob(conjureWizard);
  server.addJob(magicArcher);
  server.addJob(orisonPastor);
  server.addJob(swordman);
  const center = new JobCenter("hiddenyears:job_center", server);
  center.addTrigger(null, {
    name: "hiddenyears:job",
    description: " %command.job.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false,
  });
}
