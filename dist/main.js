"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./filter/exception.filter");
const response_interceptor_1 = require("./interceptor/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new exception_filter_1.AllExceptionsFilter());
    app.useGlobalInterceptors(new response_interceptor_1.TransformInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map