import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sign-out"]',
    standalone: true,
    template: `
        <svg:path d="M9,20.75H6a2.64,2.64,0,0,1-2.75-2.53V5.78A2.64,2.64,0,0,1,6,3.25H9a.75.75,0,0,1,0,1.5H6a1.16,1.16,0,0,0-1.25,1V18.22a1.16,1.16,0,0,0,1.25,1H9a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M16,16.75a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L18.94,12,15.47,8.53a.75.75,0,1,1,1.06-1.06l4,4a.75.75,0,0,1,0,1.06l-4,4A.74.74,0,0,1,16,16.75Z" fill="currentColor" />
        <svg:path d="M20,12.75H9a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class SignOutIcon extends BaseIcon {}
