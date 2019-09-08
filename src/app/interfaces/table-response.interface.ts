import {IClientData} from './client-data.interface';

export interface ITableResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IClientData[];
}
