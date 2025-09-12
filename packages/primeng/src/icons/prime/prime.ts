import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="prime"]',
    standalone: true,
    template: ` <svg:path d="M14.5,6.31,13.53,4H12.18v7H13l5.25-2L19,6Z" fill="currentColor" /> `
})
export class PrimeIcon extends BaseIcon {}
