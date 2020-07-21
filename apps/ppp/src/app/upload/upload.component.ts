import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UploadDialogComponent} from "./upload-dialog.component";
import * as uuid from 'uuid';

export interface Doc {
  fileId?: string;
  name?: string;
  fileName?: string;
  fileType?: string;
  processStatus?: STATUS;
  description?: string;
  source?: any;
  outPut?: string;
  errorMessage?: string;
  docReference?: number;
  size?: string;
}

export enum STATUS {
  INITIATED = 'Initiated',
  SUCCESS = 'Done',
  FAILED = 'Failed'
}

@Component({
  selector: 'botw-covid-upload',
  templateUrl: 'upload.component.html',
  styleUrls: [
    'upload.component.scss'
  ]
})

export class UploadComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  @Input() public documents: Array<Doc>;

  @Input() docRelation: number;

  dataSource: MatTableDataSource<Doc> = new MatTableDataSource<Doc>();

  stats = STATUS;

  errorMessage: string = "";

  smallScreen: boolean = false;

  constructor(private dialog: MatDialog, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.smallScreen = window.innerWidth < 768;
  }

  onFileSelected(fileUpload: any) {
    let file = fileUpload.target.files;
    for(let i = 0; i < file.length; i++) {
      if (file[i] && file[i].size <= 51230000) {
        this.getBaseEncodedFile(file[i]).then((res: string) => {
          let doc: Doc = {
            source: res.split(',')[1],
            fileName: file[i].name,
            fileType: res.split(',')[0],
            fileId: uuid.v4(),
            size: file[i].size,
            docReference: this.docRelation
          }
          this.documents.push(doc);
          this.cdRef.detectChanges();
        }).catch(() => {
          console.error('Failed to get base64 data')
        })
      } else {
        this.errorMessage = 'Could not upload requested file. File size can not be more than 5MB';
      }
    }
  }

  getBaseEncodedFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  viewPdf(element: any) {
    console.log(element);
  }

  edit(fileId: string) {
    const doc = this.documents.find((doc: Doc) => doc.fileId === fileId)
    let uploadDialog = this.dialog.open(UploadDialogComponent, {
      data: doc
    });
    uploadDialog.afterClosed().subscribe(() => {
      if(doc.processStatus === STATUS.INITIATED) {
        this.documents.push(doc);
        this.dataSource = new MatTableDataSource<Doc>(this.documents);
      }
    })
  }

  delete(fileId: string) {
    this.documents.splice(this.documents.findIndex((doc: Doc) => doc.fileId === fileId), 1);
    this.dataSource = new MatTableDataSource<Doc>(this.documents);
  }
}
