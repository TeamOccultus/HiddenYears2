export type StaffParams = {
  damage: number;
  magic_energy: number;
  families?: string[];
  exclude_families?: string[];
  radius: number;
  particle?: string;
  sound_event?: string;
  staff_preset?: "mutas_staff" | "radiant_touch";
};
