//Custom pipe to transform any character to a space.
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export  class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character,' ');
    }
}