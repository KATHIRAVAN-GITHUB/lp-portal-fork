import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsHomeComponent} from "./settings-home/settings-home.component";
import {MachineConfigComponent} from "./machine-config/machine-config.component";

export const routes: Routes = [{path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'settings', component: SettingsHomeComponent},
  {path: 'machine-config', component: MachineConfigComponent},
  {path: '', redirectTo: 'settings', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpRoutingModule {
}
