import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  SimpleChanges,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, // None,Native
  //The None encapsulation applies the style to all the components,where as emeulated and native only apply the styles to the respective components
  //but they differ in the browser support
})
export class ServerElementComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('ContentParagraph', { static: true }) paragraph: ElementRef;
  //here in the Input decorator the passed argument denotes the name which should used to access element outside this component
  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('ngonInit called');
    console.log(this.heading.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
    //Now when we try to access templates elements on onit we cant access them ,because the template has not been rendered yet
    //calls before anything is initialized(at the load of the website)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    //here the changes is nothing but the element bound to this respective clas ,which is the element .
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
    //runs for every change in the component
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
    //This is called after the content in the component is initialized
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    //It is called after everytime Docheck is called
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChewcked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.heading.nativeElement.textContent);
    //Here we can access the element because the template has been rendered
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
