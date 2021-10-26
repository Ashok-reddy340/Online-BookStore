import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'src/app/admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from 'src/app/shopbook/shopbook.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'shop', component: ShopbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
