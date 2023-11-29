import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarRecursoComponent } from './components/eliminar-recurso/eliminar-recurso.component';
import { EditRecursoComponent } from './components/edit-recurso/edit-recurso.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados/listar-empleados.component';
import { RegistroComponent } from './registro/registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent},
  {path: 'listar-empleados', component: ListarEmpleadosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editar-empleado/:id', component: RegistroComponent},
  { path: 'listar-recurso', component: ListarRecursoComponent },
  { path: 'crear-recurso', component: CrearRecursoComponent},
  { path: 'editar-recurso/:id', component: CrearRecursoComponent},
  { path: 'eliminar-recurso/:id', component: EliminarRecursoComponent},
  { path: 'edit-recurso/:id', component: EditRecursoComponent},
  {path: 'asignacion', component: AsignacionComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
