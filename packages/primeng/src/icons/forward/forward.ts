import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="forward"]',
    standalone: true,
    template: `
        <svg:path
            d="M20.51,11.45l-7.47-7c-.22-.2-.54-.26-.81-.14-.27,.12-.45,.39-.45,.69v6.27L4.51,4.45c-.22-.2-.54-.26-.81-.14-.27,.12-.45,.39-.45,.69v14c0,.3,.18,.57,.45,.69,.1,.04,.2,.06,.3,.06,.19,0,.37-.07,.51-.2l7.27-6.82v6.27c0,.3,.18,.57,.45,.69,.1,.04,.2,.06,.3,.06,.19,0,.37-.07,.51-.2l7.47-7c.15-.14,.24-.34,.24-.55s-.09-.41-.24-.55Zm-15.76,5.82V6.73l5.62,5.27-5.62,5.27Zm8.53,0V6.73l5.62,5.27-5.62,5.27Z"
            fill="currentColor"
        />
    `
})
export class ForwardIcon extends BaseIcon {}
