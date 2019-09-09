import {animate, style, transition, trigger} from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 })),
  ])
]);


