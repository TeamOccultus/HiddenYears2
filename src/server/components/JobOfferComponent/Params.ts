export type JobSchema = {
  job_type: JobType;
  remove_old?: boolean
};

export type JobType = "traveler" | "none"