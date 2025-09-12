import { booleanAttribute, ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { cn } from '@primeuix/utils';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseIconStyle } from './style/baseiconstyle';

@Component({
    template: ` <ng-content></ng-content> `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [BaseIconStyle],
    host: {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        '[class]': 'getClassNames()'
    }
})
export class BaseIcon extends BaseComponent {
    @Input({ transform: booleanAttribute }) spin: boolean = false;

    _componentStyle = inject(BaseIconStyle);

    getClassNames() {
        return cn('p-icon', {
            'p-icon-spin': this.spin
        });
    }
}
