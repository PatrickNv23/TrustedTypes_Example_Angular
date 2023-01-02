import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'securityangular-trustedtypes';
  htmlSnippet = 'Template <script>alert("Your website is hacking")</script> <b>XD</b>';
  dangerousURL: string;
  trustedURL: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: any;
  inputTask: any;
  inputTrustedTask: any;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousURL = 'javascript:alert("Hi Mr Robot")';
    this.trustedURL = sanitizer.bypassSecurityTrustUrl(this.dangerousURL);
    this.dangerousVideoUrl = '';
    this.updateVideoUrl('RxssCrRgPHI');
  }

  updateVideoUrl(id: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

  addToDom() {
    this.inputTrustedTask = this.sanitizer.bypassSecurityTrustHtml(this.inputTask);
  }

}
