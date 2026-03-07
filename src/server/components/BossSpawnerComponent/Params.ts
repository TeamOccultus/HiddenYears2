/**
 * BOSS 生成参数
 */
export type BossSpawnerParams = {
  /**
   * 将要生成的 BOSS
   */
  boss: string;
  /**
   * 召唤 BOSS 成功后，方块将要转换的形态
   */
  transform_to: string;
  /**
   * 召唤 BOSS 需要的钥匙
   */
  key: "none" | string;
  /**
   * 召唤 BOSS 时的过场动画，目前为硬编码
   */
  cutscene?: "king_of_ruby" | "mutas_wrath" | "pharaohs_ghost"
  /**
   * 召唤 BOSS 时的客户端事件
   */
  client_events: {
    /**
     * 召唤 BOSS 成功后，客户端播放的音效
     */
    sound_event?: string;
    /**
     * 召唤 BOSS 成功后，客户端显示的标题
     */
    title?: string;
    /**
     * 召唤 BOSS 成功后，客户端显示的副标题
     */
    subtitle?: string;
  };
  fade?: {
    fade_in: number;
    fade_out: number;
    hold: number;
  };
};
