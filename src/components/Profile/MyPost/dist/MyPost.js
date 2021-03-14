"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_form_1 = require("redux-form");
var validator_1 = require("../../../utils/validator");
var FormsControl_1 = require("../../common/FormsControl/FormsControl");
var MyPost_module_css_1 = require("./MyPost.module.css");
var Post_1 = require("./Post/Post");
var MyPost = function (props) {
    var postElement = props.posts.map(function (post) { return react_1["default"].createElement(Post_1["default"], { like: post.like, message: post.message, ava: post.ava, key: post.id, id: post.id }); });
    var addPost = function (value) {
        props.addPost(value.addPostText);
    };
    return (react_1["default"].createElement("div", { className: MyPost_module_css_1["default"].content },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null, "My post"),
            react_1["default"].createElement(NewPostTextReactForm, { onSubmit: addPost }),
            react_1["default"].createElement("div", null, "New Post"),
            postElement)));
};
var maxLength10 = validator_1.maxLengthcreator(10);
var NewPostTextForm = function (props) {
    var reset = function () { return setTimeout(props.reset, 1); };
    return (react_1["default"].createElement("form", { onSubmit: props.handleSubmit },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(redux_form_1.Field, { component: FormsControl_1.Textarea, placeholder: 'input post text...', name: 'addPostText', validate: [validator_1.required, maxLength10] })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { type: "submit", onClick: reset }, "add post"))));
};
var NewPostTextReactForm = redux_form_1.reduxForm({ form: 'NewPostText' })(NewPostTextForm);
exports["default"] = MyPost;
// ХэшРоутер
