import {WFMComponent} from "../../framework/index";

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="teal darken-2 z-depth-3">
            <div class="nav-wrapper">
              <a href="/" class="brand-logo" style="margin-left: 30px;">Native Framework</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="#">Sass</a></li>
                <li><a href="#">Components</a></li>
              </ul>
            </div>
        </nav>
    `
});