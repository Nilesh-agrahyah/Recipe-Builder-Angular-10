import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertComponent} from '../shared/alert/alert.component'
import {LoadingSpinnerComponent} from '../shared/loading-spinner/loading-spinner.component'
import {DropdownDirectiveDirective} from '../directives/dropdown-directive.directive'
@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirectiveDirective
    ],
    imports: [ CommonModule],

    exports : [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirectiveDirective,
        CommonModule
    ]    
})

export class SharedModule {

}