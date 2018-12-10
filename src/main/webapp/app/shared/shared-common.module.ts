import { NgModule } from '@angular/core';

import { KuaiGouApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [KuaiGouApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [KuaiGouApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KuaiGouApplicationSharedCommonModule {}
