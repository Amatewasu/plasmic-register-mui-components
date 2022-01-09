import { PlasmicComponentLoader } from "@plasmicapp/loader-react";
import {
  ButtonGroup as MuiButtonGroup,
} from '@mui/material';

function registerMuiButtonGroup(PLASMIC: PlasmicComponentLoader){
  PLASMIC.registerComponent(MuiButtonGroup, {
    name: 'MuiButtonGroup',
    props: {
      children: 'slot',
      color: {
        type: 'choice',
        options: [
          'inherit',
          'primary',
          'secondary',
          'error',
          'success',
          'info',
          'warning',
        ],
        default: 'inherit',
      },
      disabled: {
        type: 'boolean',
        default: false,
      },
      disableElevation: {
        type: 'boolean',
        default: false,
      },
      disableFocusRipple: {
        type: 'boolean',
        default: false,
      },
      disableRipple: {
        type: 'boolean',
        default: false,
      },
      fullWidth: {
        type: 'boolean',
        default: false,
      },
      orientation: {
        type: 'choice',
        options: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      size: {
        type: 'choice',
        options: ['medium', 'small'],
        default: 'medium',
      },
      variant: {
        type: 'choice',
        options: ['contained', 'outlined', 'text'],
        default: 'outlined',
      },
    },
  });
}

export default registerMuiButtonGroup;