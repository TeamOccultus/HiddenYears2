export type TrialStoneParams = {
  table: string;
  state: TrialStoneState;
  next_state?: string;
  /**
   * 将试炼之石由`active`状态转换为`extinguish`状态所需的物品
   */
  key?: string;
  sound_event?: string;
};

export type TrialStoneState = "waiting_for_active" | "active" | "extinguish";
