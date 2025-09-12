import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chart-bar"]',
    standalone: true,
    template: `
        <svg:path d="M4.5,20.25a.76.76,0,0,1-.75-.75V4.5a.75.75,0,0,1,1.5,0v15A.76.76,0,0,1,4.5,20.25Z" fill="currentColor" />
        <svg:path d="M19.5,20.25H4.5a.75.75,0,0,1,0-1.5h15a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M8,16.75A.76.76,0,0,1,7.25,16V12a.75.75,0,0,1,1.5,0v4A.76.76,0,0,1,8,16.75Z" fill="currentColor" />
        <svg:path d="M11.5,16.75a.76.76,0,0,1-.75-.75V8a.75.75,0,0,1,1.5,0v8A.76.76,0,0,1,11.5,16.75Z" fill="currentColor" />
        <svg:path d="M15,16.75a.76.76,0,0,1-.75-.75V12a.75.75,0,0,1,1.5,0v4A.76.76,0,0,1,15,16.75Z" fill="currentColor" />
        <svg:path d="M18.5,16.75a.76.76,0,0,1-.75-.75V8a.75.75,0,0,1,1.5,0v8A.76.76,0,0,1,18.5,16.75Z" fill="currentColor" />
    `
})
export class ChartBarIcon extends BaseIcon {}
