"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => ({
            statusCode: common_1.HttpStatus.OK,
            message: null,
            data,
        })));
    }
}
exports.TransformInterceptor = TransformInterceptor;
//# sourceMappingURL=response.interceptor.js.map