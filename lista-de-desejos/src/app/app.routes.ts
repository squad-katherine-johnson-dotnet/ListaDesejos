import { Routes } from '@angular/router';
import { CatalogoProdutos } from './components/catalogo-produtos/catalogo-produtos';
import { FormularioDesejo } from './components/formulario-desejo/formulario-desejo';
import { ListaDesejos } from './components/lista-desejos/lista-desejos';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';

export const routes: Routes = [
  { path: '', component: CatalogoProdutos },
  { path: 'desejos', component: ListaDesejos },
  { path: 'novo-desejo', component: FormularioDesejo },
  { path: 'produto/:id', component: ProdutoDetalhe }
];
