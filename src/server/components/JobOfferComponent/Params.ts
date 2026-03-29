export type JobParams = {
  job_type: JobType;
  /**
   * @deprecated 该参数功能残缺，请使用`hiddenyears:job_recovery`组件实现
   */
  remove_old?: boolean;
};

export type JobType = "traveler" | "none";
