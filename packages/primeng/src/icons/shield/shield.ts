import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="shield"]',
    standalone: true,
    template: `
        <svg:path
            d="M12,20.75a.87.87,0,0,1-.28-.05A14.27,14.27,0,0,1,3.29,6.43a.74.74,0,0,1,.61-.69,27.12,27.12,0,0,0,7.79-2.42.75.75,0,0,1,.62,0A27.12,27.12,0,0,0,20.1,5.74a.74.74,0,0,1,.61.69A14.27,14.27,0,0,1,12.28,20.7.87.87,0,0,1,12,20.75ZM4.76,7.11A12.47,12.47,0,0,0,12,19.18,12.47,12.47,0,0,0,19.24,7.11,27.56,27.56,0,0,1,12,4.82,27.56,27.56,0,0,1,4.76,7.11Z"
            fill="currentColor"
        />
    `
})
export class ShieldIcon extends BaseIcon {}
