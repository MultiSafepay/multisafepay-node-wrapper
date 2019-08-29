enum ErrorKeys {
  ERROR_CODE = 'error_code',
  ERROR_INFO = 'error_info',
}

interface ErrorResponse {
  error_code: number;
  error_info: string;
}

export { ErrorKeys, ErrorResponse };
