import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="caret-left"]',
    standalone: true,
    template: ` <svg:path d="M16,18.75a.74.74,0,0,1-.45-.15l-8-6a.75.75,0,0,1,0-1.2l8-6a.75.75,0,0,1,.79-.07.76.76,0,0,1,.41.67V18a.76.76,0,0,1-.41.67A.84.84,0,0,1,16,18.75ZM9.25,12l6,4.5v-9Z" fill="currentColor" /> `
})
export class CaretLeftIcon extends BaseIcon {}
