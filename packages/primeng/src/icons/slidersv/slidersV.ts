import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sliders-v"]',
    standalone: true,
    template: `
        <svg:path d="M16.5,19.75a.76.76,0,0,1-.75-.75V12a.75.75,0,0,1,1.5,0v7A.76.76,0,0,1,16.5,19.75Z" fill="currentColor" />
        <svg:path d="M16.5,10.75a.76.76,0,0,1-.75-.75V5a.75.75,0,0,1,1.5,0v5A.76.76,0,0,1,16.5,10.75Z" fill="currentColor" />
        <svg:path d="M18,10.75H15a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M7.5,19.75A.76.76,0,0,1,6.75,19V12a.75.75,0,0,1,1.5,0v7A.76.76,0,0,1,7.5,19.75Z" fill="currentColor" />
        <svg:path d="M7.5,10.75A.76.76,0,0,1,6.75,10V5a.75.75,0,0,1,1.5,0v5A.76.76,0,0,1,7.5,10.75Z" fill="currentColor" />
        <svg:path d="M9,10.75H6a.75.75,0,0,1,0-1.5H9a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M12,19.75a.76.76,0,0,1-.75-.75V16a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,12,19.75Z" fill="currentColor" />
        <svg:path d="M12,14.75a.76.76,0,0,1-.75-.75V5a.75.75,0,0,1,1.5,0v9A.76.76,0,0,1,12,14.75Z" fill="currentColor" />
        <svg:path d="M13.5,14.75h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class SlidersVIcon extends BaseIcon {}
