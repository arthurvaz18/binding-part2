import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  title = 'meuBinding';

  buttonClicked(){
    console.log('Clicou no botão!');
  }

  onCardButtonClicked(){
    console.log('Você clicou no botão!')
  }
}
