import { presetSettings } from '@/settings.preset';
import type { Settings } from '@/interfaces';
import { useSettings } from './useSettings';

export function usePanelSetting<K extends keyof Settings['panels']>(
  key: K,
): (typeof presetSettings)['panels'][K] {
  const panels = useSettings('panels');
  const presetPanels = presetSettings.panels;
  return Object.assign({}, presetPanels[key], panels[key]);
}
