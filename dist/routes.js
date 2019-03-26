"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsoa_1 = require("tsoa");
var controller_1 = require("./controllers/hotels/controller");
var models = {
    "HotelModel": {
        "properties": {
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "stars": { "dataType": "double", "required": true },
            "price": { "dataType": "double", "required": true },
            "image": { "dataType": "string", "required": true },
            "amenities": { "dataType": "array", "array": { "dataType": "string" }, "default": [] },
        },
    },
};
var validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
    app.get('/hotels', function (request, response, next) {
        var args = {};
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        var controller = new controller_1.HotelController();
        var promise = controller.getAll.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/hotels/:id', function (request, response, next) {
        var args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        var controller = new controller_1.HotelController();
        var promise = controller.getById.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/hotels', function (request, response, next) {
        var args = {
            hotel: { "in": "body-prop", "name": "hotel", "required": true, "ref": "HotelModel" },
        };
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        var controller = new controller_1.HotelController();
        var promise = controller.add.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/hotels/:id', function (request, response, next) {
        var args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        var controller = new controller_1.HotelController();
        var promise = controller.remove.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then(function (data) {
            var statusCode;
            if (isController(controllerObj)) {
                var headers_1 = controllerObj.getHeaders();
                Object.keys(headers_1).forEach(function (name) {
                    response.set(name, headers_1[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            if (data || data === false) {
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch(function (error) { return next(error); });
    }
    function getValidatedArgs(args, request) {
        var fieldErrors = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.js.map