export class Validator {
    constructor() {
        this.emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        this.numberRegex = /^[0-9]+$/;
        this.cepRegex = /^\d{5}\d{3}$/;
        this.telRegex = /(^\d{10}$)|(^$)/;
        this.celRegex = /(^\d{11}$)|(^$)/;
        this.cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
        this.cnpjRegex = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;
    }
    /**
     * Verifica a validade do email segundo o regex emailRegex
     * @param {string} email Email
    */
    isValidEmail(email) {
        return this.emailRegex.test(email);
    }
    /**
     * Verifica a validade do número segundo o regex numberRegex
     * @param {string} value Número
    */
    isValidNumber(value) {
        return this.numberRegex.test(value);
    }
    /**
     * Verifica a validade do número de telefone segundo o regex telRegex
     * @param {string} value Número de telefone
    */
    isValidTel(value) {
        return this.telRegex.test(value);
    }
    /**
     * Verifica a validade do número de celular segundo o regex celRegex
     * @param {string} value Número de celular
    */
    isValidCel(value) {
        return this.celRegex.test(value);
    }
    /**
     * Verifica a validade do número de cpf segundo o regex cpfRegex
     * @param {string} value Número de cpf
    */
    isValidCpf(value) {
        return this.cpfRegex.test(value);
    }
    /**
     * Verifica a validade do número de cnpj segundo o regex cnpjRegex
     * @param {string} value Número de CNPJ
    */
    isValidCnpj(value) {
        return this.cnpjRegex.test(value);
    }
    /**
     * Verifica a validade da senha segundo as regras de tamanho (length > = 6)
     * @param {string} value Senha
    */
    isValidPassword(value) {
        return value.length >= 6;
    }
    /**
     * Verifica a validade do cep
     * @param {string} value CEP
    */
    isValidCep(value) {
        return this.cepRegex.test(value);
    }
    /**
     * Verifica a validade do cel ou tel
     * @param {string} value CEL ou TEL
    */
    isValidTelCel(value) {
        return value.length === 10 || value.length === 11;
    }
    /**
     * Verifica a validade do percentual
     * @param {string} value Percent
    */
    isValidPercent(value) {
        return Number(value) >= 0 && Number(value) <= 100;
    }
}
//# sourceMappingURL=validator.service.js.map