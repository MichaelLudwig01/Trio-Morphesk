import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalenderComponent } from './calender/calender.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', component:HomeComponent, data: { animation: 'isHome'}},
  { path: 'calender', component:CalenderComponent, data: { animation: 'isMiddle'}},
  { path: 'gallery', component:GalleryComponent, data: { animation: 'isBottom'}},
  { path: 'contact', component:ContactComponent, data: { animation: 'isTop'}},
  { path: 'bio', component:BioComponent},
  { path: 'legal', component:LegalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
