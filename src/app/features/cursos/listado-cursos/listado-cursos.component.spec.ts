import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { MaterialModule } from '@app/modules/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { MockModule } from 'ng-mocks';
import { CursosRoutingModule } from '../cursos-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListadoCursosComponent } from './listado-cursos.component';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ListadoCursosComponent', () => {
  let component: ListadoCursosComponent;
  let fixture: ComponentFixture<ListadoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCursosComponent ],
      imports: [
        RouterTestingModule,
        MockModule(CommonModule),
        MockModule(CursosRoutingModule),
        MockModule(ReactiveFormsModule) ,
        MockModule(MaterialModule),
        MockModule(SharedModule),
        MockModule(HttpClientModule),
        MockModule(AppRoutingModule),
        MockModule(BrowserAnimationsModule),
        MockModule(AuthModule),
        MockModule(LayoutModule),
        HttpClientTestingModule
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
