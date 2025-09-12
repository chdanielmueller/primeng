import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chart-line"]',
    standalone: true,
    template: `
        <svg:path d="M4.5,20.25a.76.76,0,0,1-.75-.75V4.5a.75.75,0,0,1,1.5,0v15A.76.76,0,0,1,4.5,20.25Z" fill="currentColor" />
        <svg:path d="M19.5,20.25H4.5a.75.75,0,0,1,0-1.5h15a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M14,14.75a.74.74,0,0,1-.53-.22L11,12.06,8.53,14.53a.75.75,0,0,1-1.06-1.06l3-3a.75.75,0,0,1,1.06,0L14,12.94l3.47-3.47a.75.75,0,0,1,1.06,1.06l-4,4A.74.74,0,0,1,14,14.75Z" fill="currentColor" />
        <svg:path d="M18.5,13.84a.76.76,0,0,1-.75-.75V10.25H15a.75.75,0,0,1,0-1.5h3.5a.76.76,0,0,1,.75.75v3.59A.76.76,0,0,1,18.5,13.84Z" fill="currentColor" />
    `
})
export class ChartLineIcon extends BaseIcon {}
