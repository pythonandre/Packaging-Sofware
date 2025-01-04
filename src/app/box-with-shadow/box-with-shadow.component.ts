import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-with-shadow',
  templateUrl: './box-with-shadow.component.html',
  styleUrls: ['./box-with-shadow.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class BoxWithShadowComponent {
  volume: number = 20; // Volumen inicial

  options = [
    { label: 'Sin protección adicional', value: 0 },
    { label: 'Con bolsa de aire', value: 10000 },
    { label: 'Bolsa de aire + Cartón coarrugado', value: 15000 },
  ];
  selectedOption: string | null = null;
  dropdownOpen: boolean = false;
  precioEmpaquetamiento: number = 20;
  precioEmpaquetadura: number = 0;

  
  get volumePrice(): number {
    return (this.volume) * 100 + this.precioEmpaquetadura; // Dynamically calculate price
  }

  onAddPackage() {
    this.precioEmpaquetamiento = (this.volume) * 100 + this.precioEmpaquetadura;
    const idProducto = Math.floor(1000 + Math.random() * 9000);

    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    const horaIngreso = `${horas}:${minutos}:${segundos}`;


    const mensaje = `Añadido satisfactoriamente, el volumen es ${this.volume} cm³\n` +
                    `El precio del empaquetamiento es: ${this.precioEmpaquetamiento} CLP\n` +
                    `ID del producto: ${idProducto}\n` +
                    `Fecha de ingreso: ${fechaFormateada}\n` +
                    `Hora de ingreso: ${horaIngreso}`;

    alert(mensaje);
    this.volume = 20;
  }

  onPackageTooLarge() {
    alert('Porfavor, contacte a un ejecutivo en el fono 000-0000');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: { label: string; value: number }) {
    this.selectedOption = option.label;
    this.precioEmpaquetadura = option.value;
    this.dropdownOpen = false; // Cerrar el dropdown
  }

}