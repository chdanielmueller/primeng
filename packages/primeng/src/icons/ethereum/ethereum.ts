import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="ethereum"]',
    standalone: true,
    template: ` <svg:path d="M16.7469 12.1594L12 15.2406L7.25 12.1594L12 3.5L16.7469 12.1594ZM12 16.2301L7.25 13.1488L12 20.5L16.75 13.1488L12 16.2301Z" fill="currentColor" /> `
})
export class EthereumIcon extends BaseIcon {}
