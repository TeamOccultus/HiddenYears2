export type TrapComponentParams = {
  damage: [number, number] | number;
  families?: string[];
  max_energy: number;
  charge_step: number;
  charge_item: string;
  runtime_identifier?: string;
};
