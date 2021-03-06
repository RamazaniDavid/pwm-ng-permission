"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PwmNgPermission = exports.PermissionGuard = exports.PermissionService = exports.ExceptPermissionDirective = exports.HasPermissionDirective = void 0;
var has_permission_directive_1 = require("./directives/has-permission.directive");
Object.defineProperty(exports, "HasPermissionDirective", { enumerable: true, get: function () { return has_permission_directive_1.HasPermissionDirective; } });
var except_permission_directive_1 = require("./directives/except-permission.directive");
Object.defineProperty(exports, "ExceptPermissionDirective", { enumerable: true, get: function () { return except_permission_directive_1.ExceptPermissionDirective; } });
var permission_service_1 = require("./services/permission.service");
Object.defineProperty(exports, "PermissionService", { enumerable: true, get: function () { return permission_service_1.PermissionService; } });
var permission_guard_1 = require("./services/permission.guard");
Object.defineProperty(exports, "PermissionGuard", { enumerable: true, get: function () { return permission_guard_1.PermissionGuard; } });
var pwm_ng_permission_module_1 = require("./module/pwm-ng-permission.module");
Object.defineProperty(exports, "PwmNgPermission", { enumerable: true, get: function () { return pwm_ng_permission_module_1.PwmNgPermission; } });
//# sourceMappingURL=index.js.map