import { NgModule } from '@angular/core';
import { PrettyUploadComponent } from './pretty-upload.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../../src/environments/environment';

@NgModule({
  imports: [
    PrettyUploadComponent,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [PrettyUploadComponent],
  exports: [PrettyUploadComponent]
})
export class PrettyUploadModule { }
