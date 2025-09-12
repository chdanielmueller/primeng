import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="server"]',
    standalone: true,
    template: `
        <svg:path
            d="M20.5,8.5v-3a1,1,0,0,0-1-1H4.5a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1,1,1,0,0,0-1,1v3a1,1,0,0,0,1,1,1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h15a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1,1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1A1,1,0,0,0,20.5,8.5Zm-1,10H4.5v-3h15Zm0-5H4.5v-3h15Zm0-5H4.5v-3h15Z"
            fill="currentColor"
        />
    `
})
export class ServerIcon extends BaseIcon {}
