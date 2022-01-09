"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
function registerMuiButton(PLASMIC) {
    PLASMIC.registerComponent(material_1.Button, {
        name: 'MuiButton',
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
                "default": 'inherit'
            },
            disabled: {
                type: 'boolean',
                "default": false
            },
            disableElevation: {
                type: 'boolean',
                "default": false
            },
            disableFocusRipple: {
                type: 'boolean',
                "default": false
            },
            disableRipple: {
                type: 'boolean',
                "default": false
            },
            fullWidth: {
                type: 'boolean',
                "default": false
            },
            href: {
                type: 'string'
            },
            size: {
                type: 'choice',
                options: ['medium', 'small'],
                "default": 'medium'
            },
            startIcon: {
                type: 'slot',
                hidePlaceholder: true
            },
            variant: {
                type: 'choice',
                options: ['contained', 'outlined', 'text'],
                "default": 'contained'
            }
        }
    });
}
exports["default"] = registerMuiButton;
