"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
function registerMuiAlert(PLASMIC) {
    PLASMIC.registerComponent(material_1.Alert, {
        name: 'MuiAlert',
        props: {
            children: 'slot',
            action: {
                type: 'slot',
                hidePlaceholder: true
            },
            severity: {
                type: 'choice',
                options: ['error', 'info', 'success', 'warning'],
                "default": 'success'
            },
            closeText: {
                type: 'string',
                "default": 'Close'
            },
            icon: {
                type: 'slot',
                hidePlaceholder: true
            },
            role: {
                type: 'string',
                "default": 'alert'
            },
            sx: {
                type: 'object',
                "default": {}
            },
            variant: {
                type: 'choice',
                options: ['standard', 'filled', 'outlined'],
                "default": 'standard'
            }
        }
    });
}
exports["default"] = registerMuiAlert;
