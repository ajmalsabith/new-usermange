import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sarch'
})
export class SarchPipe implements PipeTransform {

  transform(item:any[],value:string,) {

    let newvalue= value.toLowerCase()

    if (!value || !item) {
      return item
    }else{
      return item.filter((val,ind)=>  val.name.toLowerCase().includes(newvalue) )
    }

    
  }

}
