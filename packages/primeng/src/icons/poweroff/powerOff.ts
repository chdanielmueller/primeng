import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="power-off"]',
    standalone: true,
    template: `
        <svg:path d="M12,21A9,9,0,0,1,5.64,5.64a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06A7.5,7.5,0,1,0,17.3,17.3a7.48,7.48,0,0,0,0-10.6.75.75,0,0,1,0-1.06.74.74,0,0,1,1.06,0A9,9,0,0,1,12,21Z" fill="currentColor" />
        <svg:path d="M12,12.75a.76.76,0,0,1-.75-.75V4a.75.75,0,0,1,1.5,0v8A.76.76,0,0,1,12,12.75Z" fill="currentColor" />
    `
})
export class PowerOffIcon extends BaseIcon {}
