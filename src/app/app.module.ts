import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// todo-app-angular/src/app/app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// todo-app-angular/src/app/app.module.ts
import { StoreModule } from '@ngrx/store';
import { todos } from './redux/reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
