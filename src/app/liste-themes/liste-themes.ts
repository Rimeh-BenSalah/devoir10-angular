import { Component, OnInit } from '@angular/core';
import { Theme } from '../model/theme.model';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { CommonModule } from '@angular/common';
import { UpdateTheme } from '../update-theme/update-theme';
@Component({
  selector: 'app-liste-themes',
  imports: [CommonModule,UpdateTheme],
  templateUrl: './liste-themes.html',
  styles: ``
})
export class ListeThemes implements OnInit{
  themes!: Theme[];
updatedTheme = { "idThe": 0, "nomThe": "" };

ajout: boolean = true;

constructor(private livreService: LivreService) {}

ngOnInit(): void {
  this.themes = this.livreService.listeThemes();
  console.log(this.themes);
}

themeUpdated(theme: Theme) {
  this.livreService.ajouterTheme(theme);
  this.themes = this.livreService.listeThemes();
}

updateTheme(theme: Theme) {
  this.updatedTheme = theme;
  this.ajout = false;
}

}
