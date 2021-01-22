import { PermissionService } from '../services/permission.service';
import { PermissionGuard } from '../services/permission.guard';
import { PermissionHelper } from '../services/permission-helper.service';
export declare class PwmPermission {
    static forRoot(): {
        ngModule: typeof PwmPermission;
        providers: (typeof PermissionService | typeof PermissionHelper | typeof PermissionGuard)[];
    };
}
