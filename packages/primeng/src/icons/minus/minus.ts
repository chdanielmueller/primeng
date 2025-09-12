import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="minus"]',
    standalone: true,
    template: ` <svg:path d="M20,13H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" fill="currentColor" /> `
})
export class MinusIcon extends BaseIcon {}
