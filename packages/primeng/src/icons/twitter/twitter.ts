import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="twitter"]',
    standalone: true,
    template: `
        <svg:path
            d="M11.0248 0.65625H13.1725L8.48153 6.03014L14 13.3438H9.68014L6.29422 8.90923L2.4246 13.3438H0.273794L5.29031 7.59473L0 0.65625H4.42938L7.48674 4.70954L11.0248 0.65625ZM10.2703 12.0567H11.4598L3.7814 1.8762H2.50369L10.2703 12.0567Z"
            fill="currentColor"
        />
    `
})
export class TwitterIcon extends BaseIcon {}
