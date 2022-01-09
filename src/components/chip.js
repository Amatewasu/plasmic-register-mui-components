"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
/**
 * Register the MUI Chip component - https://mui.com/components/chips/
 * @param PLASMIC Component loader
 */
function registerMuiChip(PLASMIC) {
    PLASMIC.registerComponent(material_1.Chip, {
        name: 'MuiChip',
        props: {
            label: 'slot',
            disabled: {
                type: 'boolean',
                "default": false
            },
            clickable: {
                type: 'boolean',
                "default": false
            },
            color: {
                type: 'choice',
                options: [
                    'default',
                    'primary',
                    'secondary',
                    'error',
                    'success',
                    'info',
                    'warning',
                ],
                "default": 'default'
            },
            icon: {
                type: 'slot',
                hidePlaceholder: true
            },
            size: {
                type: 'choice',
                options: ['medium', 'small'],
                "default": 'medium'
            },
            variant: {
                type: 'choice',
                options: ['filled', 'outlined'],
                "default": 'filled'
            },
            avatar: {
                type: 'slot',
                hidePlaceholder: true
            }
        }
    });
}
exports["default"] = registerMuiChip;
