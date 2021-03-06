var Validator = require('../lib/modelValidator');
var validator = new Validator();

module.exports.userIssue2 = {
    testSampleOk: function(test) {
        var model = {
            id: "TestModel",
            type: "object",
            required: [ "foo" ],
            properties: {
                foo: {
                    type: "object",
                    required: [ "event", "data" ],
                    properties: {
                        event: {
                            type: "string",
                            description: "name"
                        },
                        data: {
                            type: "object",
                            required: [ "email" ],
                            properties: {
                                email: {
                                    type: "string",
                                    description: "email address"
                                },
                                description: {
                                    type: "string",
                                    description: "description"
                                }
                            }
                        }
                    }
                }
            }
        };

        var data = {
            foo: {
                event: "test",
                data: {
                    email: "a@b.com"
                }
            }
        };

        var swagger = {
            definitions: {
                TestModel: model
            }
        };

        var testValidator = new Validator(swagger);

        var result = swagger.validateModel("TestModel", data);

        test.expect(1);
        test.ok(result.valid);
        test.done();
    }
};
