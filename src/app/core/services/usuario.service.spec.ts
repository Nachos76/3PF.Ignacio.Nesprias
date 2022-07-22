import { TestBed } from '@angular/core/testing';
import { Usuario } from '@app/models/usuario.model';
import { environment } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from 'ng-mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { Roles } from '@app/models/roles.enum';

fdescribe('UsuarioService', () => {
  let service: UsuarioService;
  let httpController: HttpTestingController;
  const mockResp: Usuario[] = [];
  const mockResp2: Usuario= {   id: 2001,
    nombre:"Juan",
    apellido:"Alumno",
    email:"jperez99@gmail.com",
    password:"password1234" ,
    confirmPassword:"password1234",
    rol: Roles.USER,
    estado:1,   //activo
    imagen: "/assets/avatars/av1.png",
    descripcion:"Curioso, fanatico de lo que hago.",
    fechaAlta:'2021-10-06'
};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(HttpClientModule),
        HttpClientTestingModule
      ],
      providers: []
    });
    service = TestBed.inject(UsuarioService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('peticion de usuarios', () => {
    service.obtenerUsuarios().subscribe((usuarios) => {
      expect(usuarios).toEqual(mockResp)
    })
    const req = httpController.expectOne({method: 'GET', url: environment.urlAPI + 'usuarios'});
    req.flush(mockResp)
  });

  it('peticion de usuarios con filtro', () => {
    service.obtenerUsuarios('nacho').subscribe((usuarios) => {
      expect(usuarios).toEqual(mockResp)
    })
    const req = httpController.expectOne({method: 'GET', url: environment.urlAPI + 'usuarios?search=nacho'});
    req.flush(mockResp)
  });

  it('peticion de usuario', () => {
    service.seleccionarUsuarioxId(1).subscribe((usuario) => {
      expect(usuario).toEqual(mockResp2)
    })
    const req = httpController.expectOne({method: 'GET', url: environment.urlAPI + 'usuarios/1'});
    req.flush(mockResp2)
  });

});
