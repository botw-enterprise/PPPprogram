import {Component, Input, OnInit} from "@angular/core";
import {Doc} from "./upload.component";
import {BotwMaterialFormIoService} from "../../../../../libs/botw-material-form-io/src/lib/botw-material-form-io.service";

@Component({
    selector: 'botw-ppp-upload-handler',
    templateUrl: 'upload-handler.component.html',
    styleUrls: [
        'upload-handler.component.scss'
    ]
})

export class UploadHandlerComponent implements OnInit {

    @Input() documents: Array<Doc>;

    @Input() partyId: string;

    @Input() formId: string

    question3 = false;

    question4 = false;

    constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
    }

    ngOnInit(): void {
        this.botwMaterialFormIoService.partyData.get(this.partyId).get(this.formId).controls['qid26'].valueChanges.subscribe((res) => {
            this.question3 = (res === 'yes');
        });

        this.botwMaterialFormIoService.partyData.get(this.partyId).get(this.formId).controls['qid27'].valueChanges.subscribe((res) => {
            this.question4 = (res === 'yes');
        })
    }

}
