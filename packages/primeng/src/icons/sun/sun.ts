import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sun"]',
    standalone: true,
    template: `
        <svg:path d="M12,17.75A5.75,5.75,0,1,1,17.75,12,5.76,5.76,0,0,1,12,17.75Zm0-10A4.25,4.25,0,1,0,16.25,12,4.26,4.26,0,0,0,12,7.75Z" fill="currentColor" />
        <svg:path d="M12,5a.76.76,0,0,1-.75-.75V2.75a.75.75,0,0,1,1.5,0v1.5A.76.76,0,0,1,12,5Z" fill="currentColor" />
        <svg:path d="M12,22a.76.76,0,0,1-.75-.75v-1.5a.75.75,0,0,1,1.5,0v1.5A.76.76,0,0,1,12,22Z" fill="currentColor" />
        <svg:path d="M21.25,12.75h-1.5a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M4.25,12.75H2.75a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M6.5,7.25A.74.74,0,0,1,6,7L4.91,6A.75.75,0,1,1,6,4.91L7,6A.75.75,0,0,1,7,7,.74.74,0,0,1,6.5,7.25Z" fill="currentColor" />
        <svg:path d="M18.56,19.31a.74.74,0,0,1-.53-.22L17,18A.75.75,0,0,1,18,17L19.09,18a.75.75,0,0,1,0,1.06A.74.74,0,0,1,18.56,19.31Z" fill="currentColor" />
        <svg:path d="M17.5,7.25A.74.74,0,0,1,17,7,.75.75,0,0,1,17,6L18,4.91A.75.75,0,1,1,19.09,6L18,7A.74.74,0,0,1,17.5,7.25Z" fill="currentColor" />
        <svg:path d="M5.44,19.31a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L6,17A.75.75,0,0,1,7,18L6,19.09A.74.74,0,0,1,5.44,19.31Z" fill="currentColor" />
    `
})
export class SunIcon extends BaseIcon {}
