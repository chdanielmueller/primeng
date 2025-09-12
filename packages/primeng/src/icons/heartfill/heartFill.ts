import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="heart-fill"]',
    standalone: true,
    template: ` <svg:path d="M19.3,5.71h0a4.92,4.92,0,0,0-3.51-1.46h0a4.92,4.92,0,0,0-3.51,1.46L12,6l-.28-.28a4.95,4.95,0,0,0-7,0,5,5,0,0,0,0,7l6.77,6.79a.75.75,0,0,0,1.06,0l6.77-6.79A5,5,0,0,0,19.3,5.71Z" fill="currentColor" /> `
})
export class HeartFillIcon extends BaseIcon {}
