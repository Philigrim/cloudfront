import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chooseFile() {
    var fileInput = document.getElementById('fileInput');
    if(fileInput != null) {
      fileInput.click();
    }
  }

  fileChanged() {
    (<HTMLInputElement>document.getElementById('fileInputLabel')).innerHTML = (<HTMLInputElement>document.getElementById('fileInput')).value.substring(12);
  }
}