import type { InputProps, TextareaProps } from '../../types';

/**
 * Input - Campo de entrada estilizado
 * Com label flutuante e estado de erro
 */
export function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className={`
          peer
          w-full
          px-4 py-3
          bg-white dark:bg-gray-800
          border-2 border-gray-200 dark:border-gray-700
          rounded-xl
          text-gray-900 dark:text-white
          placeholder-transparent
          transition-all duration-200
          focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
          focus:ring-4 focus:ring-blue-500/10
          ${error ? 'border-red-500 dark:border-red-400' : ''}
          ${className}
        `}
      />
      <label
        className={`
          absolute left-4 top-3
          text-gray-500 dark:text-gray-400
          transition-all duration-200
          pointer-events-none
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-focus:-top-2.5
          peer-focus:left-3
          peer-focus:text-sm
          peer-focus:text-blue-500
          peer-focus:bg-white dark:peer-focus:bg-gray-900
          peer-focus:px-1
          peer-[:not(:placeholder-shown)]:-top-2.5
          peer-[:not(:placeholder-shown)]:left-3
          peer-[:not(:placeholder-shown)]:text-sm
          peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-gray-900
          peer-[:not(:placeholder-shown)]:px-1
          ${error ? 'text-red-500' : ''}
        `}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

/**
 * Textarea - Campo de texto multilinha estilizado
 */
export function Textarea({
  label,
  error,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        placeholder=" "
        className={`
          peer
          w-full
          px-4 py-3
          bg-white dark:bg-gray-800
          border-2 border-gray-200 dark:border-gray-700
          rounded-xl
          text-gray-900 dark:text-white
          placeholder-transparent
          transition-all duration-200
          focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
          focus:ring-4 focus:ring-blue-500/10
          resize-none
          min-h-[120px]
          ${error ? 'border-red-500 dark:border-red-400' : ''}
          ${className}
        `}
      />
      <label
        className={`
          absolute left-4 top-3
          text-gray-500 dark:text-gray-400
          transition-all duration-200
          pointer-events-none
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-focus:-top-2.5
          peer-focus:left-3
          peer-focus:text-sm
          peer-focus:text-blue-500
          peer-focus:bg-white dark:peer-focus:bg-gray-900
          peer-focus:px-1
          peer-[:not(:placeholder-shown)]:-top-2.5
          peer-[:not(:placeholder-shown)]:left-3
          peer-[:not(:placeholder-shown)]:text-sm
          peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-gray-900
          peer-[:not(:placeholder-shown)]:px-1
          ${error ? 'text-red-500' : ''}
        `}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Input;
