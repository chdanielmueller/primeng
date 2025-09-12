import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sort-alt"]',
    standalone: true,
    template: `
        <svg:path d="M10.5,8.25c-.19,0-.38-.07-.53-.22l-1.97-1.97-1.97,1.97c-.29,.29-.77,.29-1.06,0s-.29-.77,0-1.06l2.5-2.5c.29-.29,.77-.29,1.06,0l2.5,2.5c.29,.29,.29,.77,0,1.06-.15,.15-.34,.22-.53,.22Z" fill="currentColor" />
        <svg:path d="M8,19.75c-.41,0-.75-.34-.75-.75V5c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v14c0,.41-.34,.75-.75,.75Z" fill="currentColor" />
        <svg:path d="M16,19.75c-.19,0-.38-.07-.53-.22l-2.5-2.5c-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0l1.97,1.97,1.97-1.97c.29-.29,.77-.29,1.06,0s.29,.77,0,1.06l-2.5,2.5c-.15,.15-.34,.22-.53,.22Z" fill="currentColor" />
        <svg:path d="M16,19.75c-.41,0-.75-.34-.75-.75V5c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v14c0,.41-.34,.75-.75,.75Z" fill="currentColor" />
    `
})
export class SortAltIcon extends BaseIcon {}
