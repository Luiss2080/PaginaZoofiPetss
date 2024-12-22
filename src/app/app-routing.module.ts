import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosDisponiblesComponent } from './pages/servicios-disponibles/servicios-disponibles.component';
import { CatalogoProductosComponent } from './pages/catalogo-productos/catalogo-productos.component';
import { PlanesDeSaludComponent } from './pages/planes-de-salud/planes-de-salud.component';
import { ConsejosZoofiPetsComponent } from './pages/consejos-zoofi-pets/consejos-zoofi-pets.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';




const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "ServiciosDisponibles", component: ServiciosDisponiblesComponent},
  {path: "CatalogoProductos", component: CatalogoProductosComponent},
  {path: "PlanesDeSalud", component: PlanesDeSaludComponent},
  {path: "ConsejosZoofiPets", component: ConsejosZoofiPetsComponent},
  {path: "SobreNosotros", component: SobreNosotrosComponent},
  {path: "Contactenos", component: ContactenosComponent},
  {path: "Novedades", component: NovedadesComponent},
  {path: "**", component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
