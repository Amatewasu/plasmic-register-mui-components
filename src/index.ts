import { PlasmicComponentLoader } from '@plasmicapp/loader-react';
import registerMuiAlert from './components/alert';
import registerMuiButton from './components/button';
import registerMuiButtonGroup from './components/button-group';
import registerMuiChip from './components/chip';

export function registerAllMuiComponents(PLASMIC: PlasmicComponentLoader){
  registerMuiButton(PLASMIC);
  registerMuiButtonGroup(PLASMIC);
  registerMuiChip(PLASMIC);
  registerMuiAlert(PLASMIC);
}