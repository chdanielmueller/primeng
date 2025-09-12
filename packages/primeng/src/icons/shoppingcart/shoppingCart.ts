import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="shopping-cart"]',
    standalone: true,
    template: `
        <svg:path
            d="M11.25,18.75c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm5-1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm4.48-9.57l-2,8c-.08,.33-.38,.57-.73,.57H8c-.36,0-.67-.26-.74-.62l-1.89-10.38h-1.37c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h2c.36,0,.67,.26,.74,.62l.43,2.38h12.83c.23,0,.45,.11,.59,.29,.14,.18,.19,.42,.14,.64Zm-1.69,.57H7.44l1.18,6.5h8.79l1.63-6.5Z"
            fill="currentColor"
        />
    `
})
export class ShoppingCartIcon extends BaseIcon {}
