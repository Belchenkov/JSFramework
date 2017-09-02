import {WFMComponent} from "../framework/index";

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        
        <div class="container">
            <div class="row">
                <div class="col z-depth-3 s8 center-align offset-s2" style="margin-top: 30px;">
                  <div class="card grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title ">Welcome</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                      <a href="#" class="waves-effect waves-light btn">Next Page</a>
                    </div>
                </div>
            </div>
      </div>
            
        </div>
    `
});