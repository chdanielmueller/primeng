import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sliders-h"]',
    standalone: true,
    template: `
        <svg:path d="M19,8.25H12a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M10,8.25H5a.75.75,0,0,1,0-1.5h5a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M10,9.75A.76.76,0,0,1,9.25,9V6a.75.75,0,0,1,1.5,0V9A.76.76,0,0,1,10,9.75Z" fill="currentColor" />
        <svg:path d="M19,17.25H12a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M10,17.25H5a.75.75,0,0,1,0-1.5h5a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M10,18.75A.76.76,0,0,1,9.25,18V15a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,10,18.75Z" fill="currentColor" />
        <svg:path d="M19,12.75H16a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M14,12.75H5a.75.75,0,0,1,0-1.5h9a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M14,14.25a.76.76,0,0,1-.75-.75v-3a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,14,14.25Z" fill="currentColor" />
    `
})
export class SlidersHIcon extends BaseIcon {}
