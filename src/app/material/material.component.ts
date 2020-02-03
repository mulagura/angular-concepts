import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {



  // overlay
  overlay: boolean = false;
  x: any = null;;
  y: any = null;

  tableData: Object = {};

  table_JSON_data;
  table_data: Array<any> = [];
  table_data_without_UNIT: Array<any> = [];
  table_data_with_UNIT: Array<any> = [];
  table_header: Array<string> = [];

  candidateIdList:Array<string> = [];

  dataSource;
  displayedColumns;

  selectedIndex: number;
  selectedColumn: string;
  enableChip: boolean = false;


  constructor(private appService: AppService) { }


  ngOnInit() {


    //tabledata transform
    this.appService.getTableData()
      .subscribe(
        (data) => {
          if (data) {

            this.table_JSON_data = data;
            console.log(this.table_JSON_data);

            let table_JSON_dataLength = this.table_JSON_data.length;
            let keys = Object.keys(this.table_JSON_data[0]);
            this.table_header = keys;
            let each_row_obj_without_UNIT = {};
            let each_row_obj_with_UNIT = {};

            for (let i = 0; i < table_JSON_dataLength; i++) {

              each_row_obj_without_UNIT[i] = {};
              each_row_obj_with_UNIT[i] = {};

              for (let j = 0; j < keys.length; j++) {

                if (keys[j] !== 'unit') {
                  each_row_obj_without_UNIT[i][keys[j]] = this.table_JSON_data[i][keys[j]].count;
                }

                if (keys[j] === 'unit') {
                  each_row_obj_with_UNIT[i][keys[j]] = this.table_JSON_data[i][keys[j]];
                }

              }

              let toPush = Object.assign(each_row_obj_with_UNIT[i], each_row_obj_without_UNIT[i]);
              this.table_data.push(toPush)

            }


            this.tableData = { 'ELEMENT_DATA': this.table_data, 'headers': this.table_header };

            this.dataSource = this.table_data;
            this.displayedColumns = this.table_header;


          }
        }
      )

  }

  // click method to show candidates
  showCandidates(index: number, columnName: string, unit: object) {
    let unitName;
    if (event) {
      event.stopPropagation();
    }
    this.selectedIndex = index;
    this.selectedColumn = columnName;

    if (columnName === this.selectedColumn && index === this.selectedIndex) {
      this.enableChip = true;
      if (this.enableChip) {

        for (let unitKey in unit) {
          if (unitKey === 'unit') {
            unitName = unit[unitKey];
          }
        }
      }
    }

    let table_JSON_dataLength = this.table_JSON_data.length;

    for (let i = 0; i < table_JSON_dataLength; i++) {

      for(let eachObjRow in this.table_JSON_data[i]){
 
        if( this.table_JSON_data[i][eachObjRow] === unitName ){

          let thatObj = this.table_JSON_data[i];

          for(let unitRow in thatObj){

            if(unitRow === columnName){

              let candidateList = []; 

              candidateList.push(
                thatObj[unitRow].id
              )

              this.candidateIdList = candidateList;
              
            }
            
          }
          
        }
        
      }





    }

    console.log(index, columnName, unitName);
    console.log(this.candidateIdList);
    

    // event emitter to pass data; passing index and respective column 

    // this.valueToParent.emit({ index: index, column: columnName });


  }

  // show value and chip methods
  removeChip(index: number, columnName: string, el) {
    if (event) {
      event.stopPropagation();
    }

    if (index === this.selectedIndex && columnName === this.selectedColumn) {
      this.enableChip = false;
    }
  }


  // on mouse on leave
  onHover(el) {
    console.log('clinet x', el.clientX, 'clinet y', el.clientY);
    console.log('page x', el.pageX, 'page y', el.pageY);

    this.x = el.clientX;
    this.y = el.clientY;

    this.overlay = !this.overlay;


  }

  onLeave(el) {
    // console.log(el.);
    this.overlay = !this.overlay;

    this.x = null;
    this.y = null;

  }

  styleObj() {

    if (this.x && this.y) {
      return {
        position: 'fixed',
        left: this.x + 'px',
        top: this.y + 'px'
      }

    }

    return {}
  }




}
