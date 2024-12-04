import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-available',
  templateUrl: './list-available.component.html',
  styleUrls: ['./list-available.component.scss']
})
export class ListAvailableComponent implements OnInit {
  display = "none";
  displayNumeros = 'none';

  constructor(private loadingService: LoadingService, private toastr: ToastrService) {

  }

  allButtons: number[] = Array.from({ length: 60000 }, (_, i) => i + 1);
  buttons1 = this.allButtons.slice(0, 10000);
  buttons2 = this.allButtons.slice(10000, 20000);
  buttons3 = this.allButtons.slice(20000, 30000);
  buttons4 = this.allButtons.slice(30000, 40000);
  buttons5 = this.allButtons.slice(40000, 50000);
  buttons6 = this.allButtons.slice(50000, 60000);
  selectedNumbers: string[] = [];
  cardNumerosSeleccionados: string = '';
  arrayNumerosSelect = [2, 4, 6, 8, 10, 20, 30, 40, 50, 100];
  numerosDisponibles: string[] = [];
  numerosVendidos: string[] = [];
  opcionSeleccionada: number = 0;
  cardNumerosSuerte: string = '';
  displayGifImage: string = 'none';
  displaytextSuerte: string = 'auto';
  displayModalPago: string = 'auto';
  displayLoading: string = '';
  nombreSorteo: string = 'CFMOTO 450 SRS 2024';
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  numeroUsuario: string = '';
  fileApartados: string = "assets/vendidos/vendidos.txt";

  ngOnInit(): void {
    this.numerosDisponibles = this.allButtons.map(String);

    this.getVendidos();

  }

  getVendidos() {
    fetch(this.fileApartados)
      .then((res) => res.text())
      .then((text) => {
        if (text.length > 0) {
          this.numerosVendidos = text.split(',');
          setTimeout(() => {
            this.setVendidos();
            this.displayLoading = 'none';
            this.displayNumeros = '';
          }, 4000);
        }
      })
      .catch((e) => console.error(e));
  }

  setApartados() {


    //codigo para descargar archivos
    // const text = this.selectedNumbers.join(',');
    // const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    // saveAs(blob, this.fileApartados);
  }

  setVendidos() {
    if (this.numerosVendidos.length > 0) {
      for (let i = 0; i < this.numerosVendidos.length; i++) {
        (<HTMLInputElement>document.getElementById(this.numerosVendidos[i])).disabled = true;
        (<HTMLInputElement>document.getElementById(this.numerosVendidos[i])).style.backgroundColor = 'gray';
        (<HTMLInputElement>document.getElementById(this.numerosVendidos[i])).style.pointerEvents = 'none';
      }
    }
  }

  toggleSelection(buttonNumber: string) {
    const index = this.selectedNumbers.indexOf(buttonNumber);

    if (index === -1) {
      // Si el número no está en el arreglo, lo agregamos
      this.selectedNumbers.push(buttonNumber);
      (<HTMLInputElement>document.getElementById(buttonNumber)).disabled = true;
      (<HTMLInputElement>document.getElementById(buttonNumber)).style.backgroundColor = 'green';
    } else {
      // Si ya está en el arreglo, lo quitamos
      this.selectedNumbers.splice(index, 1);
      (<HTMLInputElement>document.getElementById(buttonNumber)).disabled = false;
      (<HTMLInputElement>document.getElementById(buttonNumber)).style.backgroundColor = '';
    }
    this.cardNumerosSeleccionados = this.selectedNumbers.join(', ');
  }

  validaPares() {
    if (this.selectedNumbers.length == 0) {
      this.toastr.error('Debes seleccionar al menos 2 boletos', 'Por favor verifica');
    }
    else if (this.selectedNumbers.length % 2 !== 0) {
      this.toastr.warning('El número de boletos debe ser multiplo de 2 (numero par)', 'Por favor verifica');
    }
    else {
      this.openModalPago();
    }
  }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
    this.selectedNumbers = [];
    this.cardNumerosSuerte = '';
  }

  onCloseModalPago() {
    this.displayModalPago = "none";
  }

  openModalPago() {
    this.displayModalPago = "block";
  }

  selectOption(value: any) {
    this.opcionSeleccionada = value.target.value;
  }

  calculaNumeros() {
    this.displaytextSuerte = 'none';
    this.displayGifImage = '';
    setTimeout(() => {
      this.displaytextSuerte = '';
      this.displayGifImage = 'none';
    }, 3000);

    const randomNumbers = this.getRandomNumbers(this.numerosDisponibles, this.opcionSeleccionada);
    this.selectedNumbers = randomNumbers;
    this.cardNumerosSuerte = randomNumbers.join(', ');
  }

  getRandomNumbers(array: string[], n: number): string[] {
    // Validar que n no sea mayor que la longitud del array
    if (n > array.length) {
      this.toastr.error('Selecciona una catindad menor', 'No hay boletos disponibles');
      return [];
    }

    // Crear una copia del array original para evitar modificarlo
    const arrayCopy = [...array];

    // Crear un array para almacenar los números seleccionados
    const result: string[] = [];

    // Seleccionar n elementos aleatorios
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      result.push(arrayCopy[randomIndex].toString().padStart(5, '0'));
      arrayCopy.splice(randomIndex, 1); // Eliminar el elemento seleccionado
    }

    return result;
  }

  btnSelecciona() {
    this.display = "none";
    this.cardNumerosSeleccionados = this.selectedNumbers.join(', ');
  }

  sendMessage() {

    // if (this.nombreUsuario.length === 0) {
    //   this.toastr.error('Debes indicarnos tu nombre(s).')
    //   return;
    // }

    // if (this.apellidoUsuario.length === 0) {
    //   this.toastr.error('Debes indicarnos tu apellido(s).')
    //   return;
    // }

    // if (String(this.numeroUsuario).length !== 10) {
    //   this.toastr.error('El número debe ser de 10 dígitos.')
    //   return;
    // }

    this.setApartados()
    // const textoMensajeApartado = 'Hola, Quiero boletos de la rifa!! ' + this.nombreSorteo + '!!! *' + this.selectedNumbers.length + ' BOLETOS:* ' + this.selectedNumbers.join(',') + ' *Nombre:* ' + this.nombreUsuario + ' ' + this.apellidoUsuario + ' *SI VAS A REALIZAR TRANSFERENCIA FAVOR DE PONER TU NOMBRE EN CONCEPTO DE PAGO*, ENVÍA TU COMPROBANTE DE PAGO POR AQUÍ SI NO, NO SERÁ VALIDO* 2 boletos por $10, 4 boletos por $20, 6 boletos por $30, 8 boleto por $ 40, 10 boletos por $50, 12 boletos por $60, 14 boletos por $70, 16 boletos por $80, 18 boletos por $90, 20 boletos por $100 ———————————— *CUENTAS DE PAGO AQUÍ:* https://sorteoslamochila.com *Celular:* ' + this.numeroUsuario + ' El siguiente paso es enviar foto del comprobante de pago por este medio';
    // const win = window.open(`https://wa.me/526681379618?text=${textoMensajeApartado}`, '_blank');
  }

}