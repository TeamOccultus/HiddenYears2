export type EggBlockParams = {
   /**
    * 蛋方块从初始状态到最后状态共需经历多少个阶段
    * 
    * 这一数值应该和`starock:growth`方块状态的数值数目保持一致
    * 
    * @example
    * // components
    * "hiddenyears:egg_block": {
    *   "steps": 3
    * }
    * // description
    * "states": {
    *   "starock:growth": [0, 1, 2]
    * }
    */ 
   max_growth: number;
   /**
    * 孵化完成后生成的实体
    */
   spawn_entity: string;
   /**
    * 生成实体时被调用的实体事件
    */
   spawn_event?: string;
   /**
    * 方块收到`minecraft:tick`组件的 onTick 事件时，将生长状态转换为下一状态的概率
    * 
    * 默认为`1.0`
    */
   chance?: number;
   particle?: string
};

