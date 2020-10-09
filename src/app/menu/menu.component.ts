
/*usar a anaotacao do component necessario importatr do pacote cor do angular
a anotacao espera receber um objeto JSON que e usado para especificar as caracteristicas do component */
import{Component} from '@angular/core';
@Component({
    /*e ultilizado para especificar o nome elemento que sera usado na pagina HTML */
    selector:"app-menu",
    // atributo templateUrl referencia o codigo html na pasta
    templateUrl:'./menu.component.html',
   //referencia o arquivo css na pasta para ser aplicado
    styleUrls:['./menu.component.css']
})

/*classe do component */
export class MenuComponent{

    showSubList(idElement: string) {
        document.getElementById(idElement).classList.add("show")
    }

    hideSubList(idElement: string) {
        document.getElementById(idElement).classList.remove("show")
    }
}