import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
  private replacer(value: string): string {
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }

  public transform(value: string): string {
    return value.replace(/\w\S*/g, this.replacer);
  }
}
