import { TextProvider } from "@occultus/api";

export type BossSpawnerParams = {
  boss: string;
  transform_to: string;
  key: "none" | string;
  client_events: {
    sound_event?: string;
    title?: string;
    subtitle?: string;
  };
  fade?: {
    fade_in: number;
    fade_out: number;
    hold: number;
  }
};
