import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="fast-forward"]',
    standalone: true,
    template: `
        <svg:path
            d="M20,4.25c-.41,0-.75,.34-.75,.75v6.19l-6.72-6.72c-.21-.21-.54-.28-.82-.16-.28,.12-.46,.39-.46,.69v6.19L4.53,4.47c-.21-.21-.54-.28-.82-.16-.28,.12-.46,.39-.46,.69v14c0,.3,.18,.58,.46,.69,.09,.04,.19,.06,.29,.06,.2,0,.39-.08,.53-.22l6.72-6.72v6.19c0,.3,.18,.58,.46,.69,.09,.04,.19,.06,.29,.06,.2,0,.39-.08,.53-.22l6.72-6.72v6.19c0,.41,.34,.75,.75,.75s.75-.34,.75-.75V5c0-.41-.34-.75-.75-.75ZM4.75,17.19V6.81l5.19,5.19-5.19,5.19Zm8,0V6.81l5.19,5.19-5.19,5.19Z"
            fill="currentColor"
        />
    `
})
export class FastForwardIcon extends BaseIcon {}
