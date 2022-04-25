export interface IConfig {
    length: number;
    regex: RegExp;
    mask: string;
    example: string;
}
export interface IReturn {
    value: string;
    length: number;
}
export declare class Formatter {
    static config: {
        cep: {
            length: number;
            regex: RegExp;
            mask: string;
            example: string;
        };
        cpf: {
            length: number;
            regex: RegExp;
            mask: string;
            example: string;
        };
        cnpj: {
            length: number;
            regex: RegExp;
            mask: string;
            example: string;
        };
        cel: {
            length: number;
            regex: RegExp;
            mask: string;
            example: string;
        };
        celWithDDD: {
            length: number;
            regex: RegExp;
            mask: string;
            example: string;
        };
    };
    private leadingZerosValue;
    private fn;
    /**
     * Fomatter CEP.
     * @param {string | number} value - cep Ex: 00000000
     * @return {string} Ex: 00000-000
    */
    cep(value: string | number): IReturn;
    /**
     * Fomatter CPF.
     * @param {string | number} value - cep Ex: 000000000000
     * @return {string} Ex: 000.000.000-00
    */
    cpf(value: string | number): IReturn;
    /**
     * Fomatter CNPJ.
     * @param {string | number} value - cep Ex: 00000000000000
     * @return {string} Ex: 00.000.000/0000-00
    */
    cnpj(value: string | number): IReturn;
    /**
     * Fomatter Cel with DDD.
     * @param {string | number} value - cep Ex: 00000000000
     * @return {string} Ex: (00) 00000-0000
    */
    cellWithDDD(value: string | number): IReturn;
    /**
     * cell.
     * @param {string | number} value - cep Ex: 000000000
     * @return {string} Ex: 00000-0000
    */
    cell(value: string | number): IReturn;
    /**
     * Dynamically format the value.
     * @param {string | number} value
     * @param {IConfig} config
     * @example <caption>Dynamically format.</caption>
     * const formatter = new Formatter();

       const config = {
           length: 8,
           regex: /^(\d{5})(\d{3})$/,
           mask: '$1-$2'
       }

       formatter.generic(99999999, config);
     * @returns {String} Return value format -> 99999-999.
     */
    generic(value: string | number, config: IConfig): IReturn;
}
