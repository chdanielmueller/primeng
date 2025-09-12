import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="twitch"]',
    standalone: true,
    template: `
        <svg:path
            d="M11.706 7.144H12.874V10.568H11.706M14.916 7.144H16.084V10.568H14.916M7.91599 4L5 6.856V17.144H8.49592V20L11.4201 17.144H13.748L19 12V4M17.832 11.432L15.5041 13.712H13.168L11.126 15.712V13.712H8.49592V5.144H17.832V11.432Z"
            fill="currentColor"
        />
    `
})
export class TwitchIcon extends BaseIcon {}
