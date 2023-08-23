export type ModalProps = {
  title: string;
  btnText: string;
};
export type InputProps = {
  label: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
};
