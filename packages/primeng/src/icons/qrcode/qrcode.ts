import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="qrcode"]',
    standalone: true,
    template: `
        <svg:path d="M12.38,3.88v7h7v-7Zm5.5,5.5h-4v-4h4Z" fill="currentColor" />
        <svg:path d="M3.88,10.88h7v-7h-7Zm1.5-5.5h4v4h-4Z" fill="currentColor" />
        <svg:path d="M3.88,19.38h7v-7h-7Zm1.5-5.5h4v4h-4Z" fill="currentColor" />
    `
})
export class QrcodeIcon extends BaseIcon {}
