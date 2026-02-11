import { RawMessage } from "@minecraft/server";

export function getJobDescription(jobName: string): RawMessage {
  return {
    rawtext: [
      { translate: `job.${jobName}.desc` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.0` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.1` },
      { text: "\n\n" },
      { translate: `job.${jobName}.skill.2`}
    ]
  };
}
