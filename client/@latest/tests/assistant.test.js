import test from 'node:test';import assert from 'node:assert/strict';import {createConversation,appendUserMessage} from '../src/utils/conversation.js'
test('新对话包含助手欢迎消息',()=>{const messages=createConversation();assert.equal(messages[0].role,'assistant')})
test('空白消息不会加入对话',()=>{const messages=createConversation();assert.equal(appendUserMessage(messages,'   ').length,1)})
