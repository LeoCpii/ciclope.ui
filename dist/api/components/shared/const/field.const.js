"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIELD_MESSAGES = exports.NUMBER_MASK = exports.MASKS = exports.NUMBER = void 0;
exports.NUMBER = ['cpf', 'cel', 'tel', 'cnpj', 'cep'];
exports.MASKS = ['cpf', 'celWithDDD', 'cel', 'tel', 'cnpj', 'cep', 'currency'];
exports.NUMBER_MASK = ['number', 'decimal', 'percent'];
exports.FIELD_MESSAGES = {
    required: 'FORM.ERROR.REQUIRED',
    cpf: 'FORM.ERROR.CPF',
    cnpj: 'FORM.ERROR.CNPJ',
    tel: 'FORM.ERROR.TEL',
    cel: 'FORM.ERROR.CEL',
    cep: 'FORM.ERROR.CEP',
    number: 'FORM.ERROR.NUMBER',
    email: 'FORM.ERROR.EMAIL',
    password: 'FORM.ERROR.PASSWORD',
    cnpjcpf: 'FORM.ERROR.DOCUMENT',
    telcel: 'FORM.ERROR.CONTACT',
    date: 'FORM.ERROR.DATE',
    percent: 'FORM.ERROR.PERCENT'
};
//# sourceMappingURL=field.const.js.map