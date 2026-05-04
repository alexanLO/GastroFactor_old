/**
 * Modelo para representar os dados do cálculo culinário
 */
export interface CalculationRequest {
  foodName: string;
  foodWeight: number;
  typeWeight: 'GROSS' | 'NET' | 'COOKED';
}

/**
 * Resposta do servidor contendo os resultados do cálculo
 */
export interface CalculationResponse {
  foodName: string;
  grossWeight: number;
  netWeight: number;
  cookedWeight: number;
}

/**
 * Modelo para erros da API
 */
export interface ApiErrorResponse {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
