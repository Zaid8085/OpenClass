import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatMenuTrigger, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuCardDialogComponent } from '../../dialogs/menu-card-dialog/menu-card-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  closeResult: string;
  dropdown = 4;
  readonly ages: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  minAge = 0;
  maxAge = 18;
  isChildren = false;
  isOpen = false;
  child1: boolean; child2 : boolean ; child3: boolean;
  usr1: any;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  text: string;

  // private _transformer = (node: FoodNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  // }

  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //     node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //     this._transformer, node => node.level, node => node.expandable, node => node.children);

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  constructor(private modalService: NgbModal, private dialog: MatDialog) {
    // this.dataSource.data = TREE_DATA;
  }
  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close(e, content) {
    console.log(e)
    e('close')
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    })
  }

  radioChecked(val) {
    if (val === 3)
      this.isChildren = true;
    else
      this.isChildren = false;
  }

  openCard(e) {
    this.isOpen = !this.isOpen;
    e.preventDefault();
    console.log(e)
    let text;
    this.text = window.getSelection().toString();
    // this.trigger.openMenu()
    setTimeout(() => {
      console.log(document.getElementsByClassName('cdk-overlay-container')[0])
      document.getElementsByClassName('cdk-overlay-container')[0].setAttribute('style', `position: absolute; left: ${e.x}px; top: ${e.y}px;`);
    }, 50);
  }

  openChild(n: number) {
    console.log(n)
    if(n === 1) this.child1 = true, this.child2 = false, this.child3 = false;
    else if (n === 2) this.child2 = true, this.child1 = false, this.child3 = false;
    else if (n === 3) this.child3 = true, this.child1 = false, this.child2 = false;
    else if (n === 11) this.usr1 = this.text, this.isOpen = false, this.child3 = false, this.child1 = false, this.child2 = false;
  }

}

// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [
//       {name: 'Apple'},
//       {name: 'Banana'},
//       {name: 'Fruit loops'},
//     ]
//   }, {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [
//           {name: 'Broccoli'},
//           {name: 'Brussels sprouts'},
//         ]
//       }, {
//         name: 'Orange',
//         children: [
//           {name: 'Pumpkins'},
//           {name: 'Carrots'},
//         ]
//       },
//     ]
//   },
// ];

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }