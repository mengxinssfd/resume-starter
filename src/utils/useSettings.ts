import { useContext } from 'react';
import { SettingContext } from '@/context';
import { presetSettings } from '@/settings.preset';
import type { Settings } from '@/interfaces';

export function useSettings(): Settings;
export function useSettings<K extends keyof Settings>(key: K): Settings[K];
export function useSettings<K extends keyof Settings>(
  key?: K,
): Settings | Settings[K] {
  const _settings = useContext(SettingContext);
  const settings = Object.assign({}, presetSettings, _settings);
  if (key) return Object.assign({}, presetSettings[key], settings[key]);
  return settings;
}
