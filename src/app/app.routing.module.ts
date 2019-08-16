import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'create', component: PostsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


@NgModule({

})
export class AppRoutingModule {

}