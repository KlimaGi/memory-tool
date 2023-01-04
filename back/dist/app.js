/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable func-names */

const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));

const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send('Hello');
});
app.listen(5000, () => console.log('server is running'));
