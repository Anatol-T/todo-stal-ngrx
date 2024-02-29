import { ApplicationConfig, NgModule, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todosReducer } from './store/todos/todos.reducer';
import { TodosEffects } from './store/todos/todos.effects';
import {  HttpClientModule } from '@angular/common/http';
import { credentialsInterceptorProvider } from './interceptors/credential.interceptor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [
    CommonModule,
    NgModule,
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideStore({ todos: todosReducer }),
    provideEffects([TodosEffects]),
    credentialsInterceptorProvider
  ],
};
