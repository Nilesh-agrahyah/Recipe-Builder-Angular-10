import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertComponent} from '../shared/alert/alert.component'
import {LoadingSpinnerComponent} from '../shared/loading-spinner/loading-spinner.component'
import {TruncatePipe} from '../shared/truncatePipe/truncate.pipe'
import {DropdownDirectiveDirective} from '../directives/dropdown-directive.directive'
@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirectiveDirective,
        TruncatePipe
    ],
    imports: [ CommonModule],

    exports : [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirectiveDirective,
        TruncatePipe,
        CommonModule
    ]    
})

export class SharedModule {

}