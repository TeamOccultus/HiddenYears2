import { TextProvider } from "@occultus/api";

export type BossSpawnerParams = {
  boss: string;
  transform_to: string;
  key: "none" | string;
  client_events: {
    sound_event?: string;
    title?: TextProvider;
    subtitle?: TextProvider;
  };
  fade?: {
    fadeIn: number;
    fadeOut: number;
    hold: number;
  }
};
