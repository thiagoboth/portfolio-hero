import { useState, useCallback, type ChangeEvent, type FormEvent } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  [key: string]: string;
}

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  validate?: (values: T) => FormErrors;
}

interface UseFormReturn<T> {
  values: T;
  errors: FormErrors;
  status: FormStatus;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  reset: () => void;
  setFieldValue: (field: keyof T, value: string) => void;
}

/**
 * useForm - Hook para gerenciamento de formulários
 * Inclui validação, estados de loading/success/error
 */
export function useForm<T extends { [key: string]: string }>({
  initialValues,
  onSubmit,
  validate,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const setFieldValue = useCallback((field: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    // Validação
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    // Submit
    setStatus('loading');
    try {
      await onSubmit(values);
      setStatus('success');
      // Reset após sucesso
      setTimeout(() => {
        setValues(initialValues);
        setStatus('idle');
      }, 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }, [values, validate, onSubmit, initialValues]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  }, [initialValues]);

  return {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    reset,
    setFieldValue,
  };
}

export default useForm;
