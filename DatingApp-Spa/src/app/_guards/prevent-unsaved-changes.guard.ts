import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
    constructor(private router: Router, private alertify: AlertifyService) { }

    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}
