import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="step-forward"]',
    standalone: true,
    template: `
        <svg:path d="M8,19.75a.75.75,0,0,1-.29-.06A.74.74,0,0,1,7.25,19V5a.74.74,0,0,1,.46-.69.75.75,0,0,1,.82.16l7,7a.75.75,0,0,1,0,1.06l-7,7A.77.77,0,0,1,8,19.75ZM8.75,6.81V17.19L13.94,12Z" fill="currentColor" />
        <svg:path d="M16,19.75a.76.76,0,0,1-.75-.75V5a.75.75,0,0,1,1.5,0V19A.76.76,0,0,1,16,19.75Z" fill="currentColor" />
    `
})
export class StepForwardIcon extends BaseIcon {}
