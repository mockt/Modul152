import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PicturegalleryComponent} from './picturegallery/picturegallery.component';
import {VideoComponent} from './video/video.component';
import {GifComponent} from './gif/gif.component';

const routes: Routes = [
  {
    path: '',
    component: PicturegalleryComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'gif',
    component: GifComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
