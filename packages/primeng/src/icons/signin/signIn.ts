import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sign-in"]',
    standalone: true,
    template: `
        <svg:path d="M18,20.75H15a.75.75,0,0,1,0-1.5h3a1.16,1.16,0,0,0,1.25-1V5.78a1.16,1.16,0,0,0-1.25-1H15a.75.75,0,0,1,0-1.5h3a2.64,2.64,0,0,1,2.75,2.53V18.22A2.64,2.64,0,0,1,18,20.75Z" fill="currentColor" />
        <svg:path d="M11,16.75a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L13.94,12,10.47,8.53a.75.75,0,0,1,1.06-1.06l4,4a.75.75,0,0,1,0,1.06l-4,4A.74.74,0,0,1,11,16.75Z" fill="currentColor" />
        <svg:path d="M15,12.75H4a.75.75,0,0,1,0-1.5H15a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class SignInIcon extends BaseIcon {}
