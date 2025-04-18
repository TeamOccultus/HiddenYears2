import {
  BlockCustomComponent,
  ItemCustomComponent,
  system,
} from "@minecraft/server";

export class CustomItemComponent {
  constructor(
    public name: string,
    public callback: ItemCustomComponent,
  ) {}
}

export class CustomBlockComponent {
  constructor(
    public name: string,
    public callback: BlockCustomComponent,
  ) {}
}

export class Registry {
  private constructor() {}
  /**
   * 注册一个自定义组件
   * @param component 要注册的自定义组件
   * @returns 该自定义组件自身
   */
  static component<T extends CustomBlockComponent | CustomItemComponent>(
    component: T,
  ): T {
    if (component instanceof CustomBlockComponent) {
      system.beforeEvents.startup.subscribe((init) => {
        init.blockComponentRegistry.registerCustomComponent(
          component.name,
          component.callback,
        );
      });
      return component;
    }
    if (component instanceof CustomItemComponent) {
      system.beforeEvents.startup.subscribe((init) => {
        init.itemComponentRegistry.registerCustomComponent(
          component.name,
          component.callback,
        );
        return component;
      });
    }
    throw new Error(
      "Component must be a CustomBlockComponent or CustomItemComponent",
    );
  }
}
