import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="car"]',
    standalone: true,
    template: `
        <svg:path
            d="M19.78,9.44l-1.84-5A1.75,1.75,0,0,0,16.3,3.25H7.7A1.75,1.75,0,0,0,6.06,4.4l-1.84,5a1.76,1.76,0,0,0-1,1.56v4.5A1.73,1.73,0,0,0,4,16.94S4,17,4,17v2a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V17.25H17V19a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V17s0,0,0-.06a1.73,1.73,0,0,0,.76-1.44V11A1.76,1.76,0,0,0,19.78,9.44Zm-.53,6.06a.25.25,0,0,1-.25.25H5a.25.25,0,0,1-.25-.25V11A.25.25,0,0,1,5,10.75H19a.25.25,0,0,1,.25.25ZM7.47,4.91a.25.25,0,0,1,.23-.16h8.6a.25.25,0,0,1,.23.16l1.4,3.84H6.07Z"
            fill="currentColor"
        />
    `
})
export class CarIcon extends BaseIcon {}
