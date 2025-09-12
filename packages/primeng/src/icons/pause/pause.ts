import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="pause"]',
    standalone: true,
    template: `
        <svg:path d="M9,19.75A.76.76,0,0,1,8.25,19V5a.75.75,0,0,1,1.5,0V19A.76.76,0,0,1,9,19.75Z" fill="currentColor" />
        <svg:path d="M15,19.75a.76.76,0,0,1-.75-.75V5a.75.75,0,0,1,1.5,0V19A.76.76,0,0,1,15,19.75Z" fill="currentColor" />
    `
})
export class PauseIcon extends BaseIcon {}
