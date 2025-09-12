import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="play"]',
    standalone: true,
    template: ` <svg:path d="M8.5,19.75a.75.75,0,0,1-.29-.06A.74.74,0,0,1,7.75,19V5A.75.75,0,0,1,9,4.47l7,7a.75.75,0,0,1,0,1.06l-7,7A.77.77,0,0,1,8.5,19.75ZM9.25,6.81V17.19L14.44,12Z" fill="currentColor" /> `
})
export class PlayIcon extends BaseIcon {}
