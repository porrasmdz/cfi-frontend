import {
  ReadSchema,
  CreateSchema,
  UpdateSchema,
} from "../../commons/interfaces/IBase";
import { ReadWarehouse } from "./IWarehouse";

export interface ReadWarehouseType extends ReadSchema {
  id: string; // UUID as string
  name: string;
  description?: string;
}

export interface DetailedWarehouseType extends ReadWarehouseType {
  warehouses?: ReadWarehouse[];
}

export interface CreateWarehouseType extends CreateSchema {
  name: string;
  description?: string;
}

export interface UpdateWarehouseType extends UpdateSchema {
  name?: string;
  description?: string;
}
