import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateTransform' })
export class dateTransform implements PipeTransform {
    transform(modifiedon: string) {
        let one_day = 1000 * 60 * 60 * 24;
        let one_hour = 1000 * 60 * 60;
        let one_minute = 1000 * 60;

        let presentTime = new Date();
        presentTime.toISOString();

        let applicantTime = new Date(modifiedon);

        let differenceInTime = presentTime.getTime() - applicantTime.getTime();

        if (Math.round(differenceInTime) < 0) {
            return 0;
        } // if differenceInTime is <0 or negative values it is future
        else {

            if (Math.round(differenceInTime) > one_day) {
                return Math.round(differenceInTime / one_day) + 'd';
            }

            else if (Math.round(differenceInTime) < one_day
                && Math.round(differenceInTime) > one_hour) {
                return Math.round(differenceInTime / one_hour) + 'h';
            }

            else {
                return Math.round(differenceInTime / one_minute) + 'm';
            }

        }
    }
}

// Created Angular Pipe (date-transform) which transforms date string to desired output
// usage: <span class="mainBodyTxt3 GreyLight blockInfo" *ngIf="timeModifiedOn;else elseTemplate">
                        {{ timeModifiedOn | dateTransform }}
                    </span>
                    <ng-template class="mainBodyTxt3 GreyLight blockInfo" #elseTemplate> TBU
                    </ng-template>

// input "2019-12-09T18:30:00.000+0000"
// output : 7d
// output : 6m
