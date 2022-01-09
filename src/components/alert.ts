import { PlasmicComponentLoader } from "@plasmicapp/loader-react";
import {
  Alert as MuiAlert,
} from '@mui/material';

function registerMuiAlert(PLASMIC: PlasmicComponentLoader){
  PLASMIC.registerComponent(MuiAlert, {
    name: 'MuiAlert',
    props: {
      children: 'slot',
      action: {
        type: 'slot',
        hidePlaceholder: true,
      },
      severity: {
        type: 'choice',
        options: ['error', 'info', 'success', 'warning'],
        default: 'success',
      },
      closeText: {
        type: 'string',
        default: 'Close',
      },
      icon: {
        type: 'slot',
        hidePlaceholder: true,
      },
      role: {
        type: 'string',
        default: 'alert',
      },
      sx: {
        type: 'object',
        default: {},
      },
      variant: {
        type: 'choice',
        options: ['standard', 'filled', 'outlined'],
        default: 'standard',
      },
    },
  });
}

export default registerMuiAlert;