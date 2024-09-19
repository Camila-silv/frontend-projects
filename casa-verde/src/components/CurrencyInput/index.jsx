import { InputNumberFormat } from '@react-input/number-format';

const CurrencyInput = ({value, setFunc, placeholder, id}) => {
  return (
    <InputNumberFormat
    locales="pt-BR"
    format="currency"
    currency="BRL"
    value={value}
    placeholder={placeholder}
    id={id}
    className="border-2 outline-none rounded h-10 px-4 w-full max-w-56"
    onChange={setFunc} 
    maxLength={11}
  />
  );
};

export default CurrencyInput;
