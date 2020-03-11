import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import {SidebarComponent} from '/home/asm/angular_8_dash/src/app/home/sidebar/sidebar.component';


const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      children: [
        { path:':arg1', component: SidebarComponent },
      //   { path: 'night/image/:userId', component: BuildoneComponent },
      //   { path: 'private/image/:userId', component: PrivateComponent },
      //   { path: 'redirect', component: RedirectComponent },
      //   { path: 'testUI', component:TestUIComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
