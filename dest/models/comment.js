"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    likes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    parentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Comment" },
    postId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Post" },
}, { timestamps: true });
exports.Comment = (0, mongoose_1.model)("Comment", commentSchema);
