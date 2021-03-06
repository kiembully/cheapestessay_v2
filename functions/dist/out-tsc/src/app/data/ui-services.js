import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CommonDialogComponent } from '../dialogs/common-dialog/common-dialog.component';
import { AnnouncementDialogComponent } from '../dialogs/announcement-dialog/announcement-dialog.component';
let loggedin_session = class loggedin_session {
    constructor(router, _snackBar, dialog) {
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.messagePositionH = 'center';
        this.messagePositionV = 'bottom';
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        }).afterDismissed().subscribe(() => {
            localStorage.clear();
            this.router.navigateByUrl('pricing', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/']);
            });
        });
    }
    messageSnackbar(message, action) {
        this._snackBar.open(message, action, {
            horizontalPosition: this.messagePositionH,
            verticalPosition: this.messagePositionV,
        });
    }
    tokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    isTokenExisting(token_name) {
        const token = localStorage.getItem(token_name);
        let status = (!token);
        return status;
    }
    openLoginDialog() {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            width: '600px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays user-entry component
                content_id: 0
            }
        });
        dialogRef.afterClosed().subscribe(() => {
        });
    }
};
loggedin_session = __decorate([
    Injectable()
], loggedin_session);
export { loggedin_session };
let DialogTriggers = class DialogTriggers {
    constructor(dialog, router, _common) {
        this.dialog = dialog;
        this.router = router;
        this._common = _common;
    }
    openDeleteDialog(id) {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            minHeight: '216px',
            maxHeight: '358px',
            height: '100%',
            width: '546px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays delete-dialog component
                content_id: 8,
                order_id: id,
            }
        });
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    openUploadDialog(id) {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            width: '600px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays upload-dialog component
                content_id: 9,
                order_id: id,
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            if (localStorage.getItem('file_update') === 'true') {
                let path = this._common.getCurrentPath();
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/' + path]);
                });
            }
        });
    }
    openPayDialog(order_id) {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            maxHeight: '95vh',
            width: '600px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays user-coupon component
                content_id: 2,
                order_id: order_id
            }
        });
    }
    openRateWriterDialog(order_id, rate) {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            maxHeight: '800px',
            width: '600px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays rate writer component
                content_id: 10,
                order_id: order_id,
                rate: rate
            }
        });
    }
    openAnnouncementDialog() {
        const dialogRef = this.dialog.open(AnnouncementDialogComponent, {
            maxHeight: '638px',
            width: '575px',
            backdropClass: 'announcement-dialog',
            panelClass: 'panel-dialog',
        });
        dialogRef.afterClosed().subscribe(() => {
        });
    }
};
DialogTriggers = __decorate([
    Injectable()
], DialogTriggers);
export { DialogTriggers };
let countdownTimer = class countdownTimer {
    getDeadline(order_date, days, hours, minutes, seconds) {
        let date_ordered = new Date(order_date);
        let day = parseInt(days);
        let hrs = parseInt(hours);
        let min = parseInt(minutes);
        let sec = parseInt(seconds);
        return this.calculateDeadline(date_ordered, day, hrs, min, sec);
    }
    readDeadline(timestamp) {
        let deadline = new Date(timestamp).getTime();
        let today = Date.now();
        let seconds = Math.floor((deadline - (today)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    calculateDeadline(date, days, hours, mins, secs) {
        const deadline = new Date(Number(date));
        deadline.setDate(date.getDate() + days);
        deadline.setHours(date.getHours() + hours);
        deadline.setMinutes(date.getMinutes() + mins);
        deadline.setSeconds(date.getSeconds() + secs);
        return deadline;
    }
    displayDeadline(timestamp) {
        let deadline = new Date(timestamp).getTime();
        let today = Date.now();
        let seconds = Math.floor((deadline - (today)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        let str_deadline = days.toString() + ' days : ' + hours.toString() + ' h : ' + minutes.toString() + ' m : ' + seconds.toString() + ' s';
        return str_deadline;
    }
};
countdownTimer = __decorate([
    Injectable()
], countdownTimer);
export { countdownTimer };
let services_functions = class services_functions {
    getCTA(id, services) {
        let url = id;
        let filtered = services.filter(function (el) {
            return el.name == url;
        });
        return filtered[0];
    }
};
services_functions = __decorate([
    Injectable()
], services_functions);
export { services_functions };
//# sourceMappingURL=ui-services.js.map