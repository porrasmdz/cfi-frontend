import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadWarehouse } from "./IWarehouse";
import { ReadWHLocationType } from "./IWHLocationType";

export interface ReadWHLocation extends ReadSchema {
    id: string;  // UUID as string
    name: string;
    description?: string;
    wh_location_type_id?: string;  // UUID as string
    parent_id?: string;  // UUID as string
    warehouse_id: string;  // UUID as string
}

export interface DetailedWHLocation extends ReadWHLocation {
    wh_location_type?: ReadWHLocationType
    parent_whlocation?: ReadWHLocation
    warehouse: ReadWarehouse
}

export interface CreateWHLocation extends CreateSchema {
    name: string;
    description?: string;
    wh_location_type_id?: string;  // UUID as string
    parent_id?: string;  // UUID as string
    warehouse_id: string;  // UUID as string
}

export interface UpdateWHLocation extends UpdateSchema {
    name?: string;
    description?: string;
    wh_location_type_id?: string;  // UUID as string
    parent_id?: string;  // UUID as string
    warehouse_id?: string;  // UUID as string
}
