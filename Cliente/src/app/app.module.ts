import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { EliminarRecursoComponent } from './components/eliminar-recurso/eliminar-recurso.component';
import { EditRecursoComponent } from './components/edit-recurso/edit-recurso.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component'
import { BusquedaPorEmpeladoComponent } from './components/asignacion/busqueda-por-empelado/busqueda-por-empelado.component';
import { BusquedaPorRecursoComponent } from './components/asignacion/busqueda-por-recurso/busqueda-por-recurso.component';
import { AsignarComponent } from './components/asignacion/asignar/asignar.component';
import { ModalFallaComponent } from './components/asignacion/modal-falla/modal-falla.component';
import { DatePipe } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados/listar-empleados.component';
import { EmpleadofilterPipe } from './pipes/empleadofilter.pipe';
import { RegistroComponent } from './registro/registro/registro.component';





@NgModule({
  declarations: [
    AppComponent,
    CrearRecursoComponent,
    ListarRecursoComponent,
    FilterPipe,
    EliminarRecursoComponent,
    EditRecursoComponent,
    AsignacionComponent,
    BusquedaPorEmpeladoComponent,
    BusquedaPorRecursoComponent,
    AsignarComponent,
    ModalFallaComponent,
    InicioComponent,
    ListarEmpleadosComponent,
    EmpleadofilterPipe,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
