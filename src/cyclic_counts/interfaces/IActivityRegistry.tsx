import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCountRegistry } from "./ICountRegistry";

export interface ReadActivityRegistry extends ReadSchema {
    id: string;  // UUID as string
    detail: string;
    commentary: string;
    user: string;  // UUID as string
    count_registry_id: string;  // UUID as string
}

export interface DetailedActivityRegistry extends ReadActivityRegistry {
    count_registry: ReadCountRegistry;
}

export interface CreateActivityRegistry extends CreateSchema {
    detail: string;
    commentary?: string;
    user: string;  // UUID as string
    count_registry_id: string;  // UUID as string
}

export interface UpdateActivityRegistry extends UpdateSchema {
    detail?: string;
    commentary?: string;
    user?: string;  // UUID as string
    count_registry_id?: string;  // UUID as string
}