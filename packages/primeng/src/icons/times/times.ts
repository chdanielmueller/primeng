import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="times"]',
    standalone: true,
    template: `
        <svg:path d="M13.06,12l4.42-4.42a.75.75,0,1,0-1.06-1.06L12,10.94,7.58,6.52A.75.75,0,0,0,6.52,7.58L10.94,12,6.52,16.42a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0L12,13.06l4.42,4.42a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06Z" fill="currentColor" />
    `
})
export class TimesIcon extends BaseIcon {}
