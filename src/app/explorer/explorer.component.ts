import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FolderNode {
  name: string;
  children?: FolderNode[];
}


@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [MatCardModule, MatTreeModule, MatButtonModule, MatIconModule, CdkTreeModule],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ExplorerComponent {
  treeControl = new NestedTreeControl<FolderNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FolderNode>();

  expandedNodes = new Set<FolderNode>(); // Armazena os nós que estão expandidos

  constructor() {
    this.dataSource.data = EXAMPLE_DATA;
  }

  hasChild = (_: number, node: FolderNode) => !!node.children && node.children.length > 0;

  // Verifica se o nó está expandido
  isExpanded(node: FolderNode): boolean {
    return this.expandedNodes.has(node);
  }

  // Alterna o estado expandido do nó
  toggleNode(node: FolderNode): void {
    if (this.isExpanded(node)) {
      this.expandedNodes.delete(node); // Remove o nó da lista de expandidos
    } else {
      this.expandedNodes.add(node); // Adiciona o nó à lista de expandidos
    }
  }
}

const EXAMPLE_DATA: FolderNode[] = [
  {
    name: 'Projects',
    children: [{name: 'Project 1'}, {name: 'Project 2'}, {name: 'Project 3'}],
  },
  {
    name: 'Content',
    children: [
      {
        name: 'Content 1',
        children: [{name: 'archive 1'}, {name: 'archive 2'}],
      },
      {
        name: 'Content 2',
        children: [{name: 'archive 1'}, {name: 'archive 2'}],
      },
    ],
  },
];
