import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="upload"]',
    standalone: true,
    template: `
        <svg:path d="M18.22,20.75H5.78A2.64,2.64,0,0,1,3.25,18V15a.75.75,0,0,1,1.5,0v3a1.16,1.16,0,0,0,1,1.25H18.22a1.16,1.16,0,0,0,1-1.25V15a.75.75,0,0,1,1.5,0v3A2.64,2.64,0,0,1,18.22,20.75Z" fill="currentColor" />
        <svg:path d="M16,8.75a.74.74,0,0,1-.53-.22L12,5.06,8.53,8.53A.75.75,0,0,1,7.47,7.47l4-4a.75.75,0,0,1,1.06,0l4,4a.75.75,0,0,1,0,1.06A.74.74,0,0,1,16,8.75Z" fill="currentColor" />
        <svg:path d="M12,15.75a.76.76,0,0,1-.75-.75V4a.75.75,0,0,1,1.5,0V15A.76.76,0,0,1,12,15.75Z" fill="currentColor" />
    `
})
export class UploadIcon extends BaseIcon {}
