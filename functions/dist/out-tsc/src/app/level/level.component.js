import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonDialogComponent } from '../dialogs/common-dialog/common-dialog.component';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
let LevelComponent = class LevelComponent {
    constructor(dialog, _auth, titleService, metaTagService) {
        this.dialog = dialog;
        this._auth = _auth;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.tokenForm = new FormGroup({
            user_token: new FormControl(this._auth.getToken())
        });
        this.currentLevel = '';
        this.nextLevel = '';
        this.currentVal = 0;
        this.maximumVal = 0;
        this.minimumVal = 0;
        this.percentageVal = 0;
        this.remainingVal = 0;
    }
    displayLevel() {
        this._auth.getLevel(this.tokenForm.value).subscribe(res => {
            this.currentLevel = res.data.user_level;
            this.currentVal = res.data.valuenow;
            this.minimumVal = res.data.valuemin;
            this.maximumVal = res.data.valuemax;
            this.percentageVal = res.data.percent;
            this.remainingVal = (this.maximumVal - this.currentVal).toFixed(2);
        });
    }
    ngOnInit() {
        this.titleService.setTitle("Get Lifetime Discount, Cash Back based on your Level");
        this.metaTagService.updateTag({ name: 'description', content: "n/a" });
        this.metaTagService.updateTag({ name: 'keywords', content: "n/a" });
        this.displayLevel();
    }
    openDialog() {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            height: '700px',
            width: '1000px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays level how it works component
                content_id: 6,
                user_level: this.currentLevel
            }
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    }
    getNextLevel(level) {
        let nextLevel;
        switch (level.toLowerCase()) {
            case 'vip':
                nextLevel = 'Top';
                break;
            case 'gold':
                nextLevel = 'VIP';
                break;
            case 'silver':
                nextLevel = 'Gold';
                break;
            default:
                nextLevel = 'Silver';
        }
        return nextLevel;
    }
};
LevelComponent = __decorate([
    Component({
        selector: 'app-level',
        templateUrl: './level.component.html',
        styleUrls: ['./level.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    })
], LevelComponent);
export { LevelComponent };
//# sourceMappingURL=level.component.js.map