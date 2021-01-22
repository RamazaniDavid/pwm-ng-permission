import { PermissionService } from '../services/permission.service';
import { PermissionGuard } from '../services/permission.guard';
import { PermissionHelper } from '../services/permission-helper.service';
export declare class PwmNgPermission {
    static forRoot(): {
        ngModule: typeof PwmNgPermission;
        providers: (typeof PermissionService | typeof PermissionHelper | typeof PermissionGuard)[];
    };
}
