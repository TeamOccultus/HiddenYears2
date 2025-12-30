export type TrialStoneParams = {
  table: string;
  state: TrialStoneState;
  next_state?: string;
  /**
   * 将试炼之石转换到下一状态所需物品
   */
  key?: string;
  sound_event?: string;
};

export type TrialStoneState = "waiting_for_active" | "active" | "extinguish"
