export declare class Validator {
    private emailRegex;
    private numberRegex;
    private cepRegex;
    private telRegex;
    private celRegex;
    private cpfRegex;
    private cnpjRegex;
    /**
     * Verifica a validade do email segundo o regex emailRegex
     * @param {string} email Email
    */
    isValidEmail(email: string): boolean;
    /**
     * Verifica a validade do número segundo o regex numberRegex
     * @param {string} value Número
    */
    isValidNumber(value: string): boolean;
    /**
     * Verifica a validade do número de telefone segundo o regex telRegex
     * @param {string} value Número de telefone
    */
    isValidTel(value: string): boolean;
    /**
     * Verifica a validade do número de celular segundo o regex celRegex
     * @param {string} value Número de celular
    */
    isValidCel(value: string): boolean;
    /**
     * Verifica a validade do número de cpf segundo o regex cpfRegex
     * @param {string} value Número de cpf
    */
    isValidCpf(value: string): boolean;
    /**
     * Verifica a validade do número de cnpj segundo o regex cnpjRegex
     * @param {string} value Número de CNPJ
    */
    isValidCnpj(value: string): boolean;
    /**
     * Verifica a validade da senha segundo as regras de tamanho (length > = 6)
     * @param {string} value Senha
    */
    isValidPassword(value: string): boolean;
    /**
     * Verifica a validade do cep
     * @param {string} value CEP
    */
    isValidCep(value: string): boolean;
    /**
     * Verifica a validade do cel ou tel
     * @param {string} value CEL ou TEL
    */
    isValidTelCel(value: string): boolean;
    /**
     * Verifica a validade do percentual
     * @param {string} value Percent
    */
    isValidPercent(value: string): boolean;
}
