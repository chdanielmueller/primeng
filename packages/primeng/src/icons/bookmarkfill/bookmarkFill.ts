import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="bookmark-fill"]',
    standalone: true,
    template: ` <svg:path d="M15.75,3.25H8.25A2.75,2.75,0,0,0,5.5,6V20a.75.75,0,0,0,1.18.62L12,16.91l5.32,3.71a.75.75,0,0,0,.43.13.85.85,0,0,0,.35-.08.77.77,0,0,0,.4-.67V6A2.75,2.75,0,0,0,15.75,3.25Z" fill="currentColor" /> `
})
export class BookmarkFillIcon extends BaseIcon {}
