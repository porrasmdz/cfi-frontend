import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCountRegistry } from "./ICountRegistry";

interface ReadActivityRegistry extends ReadSchema {
    id: string;  // UUID as string
    detail: string;
    commentary: string;
    user: string;  // UUID as string
    count_registry_id: string;  // UUID as string
}

interface DetailedReadActivityRegistry extends ReadActivityRegistry {
    count_registry: ReadCountRegistry;
}

interface CreateActivityRegistry extends CreateSchema {
    detail: string;
    commentary?: string;
    user: string;  // UUID as string
    count_registry_id: string;  // UUID as string
}

interface UpdateActivityRegistry extends UpdateSchema {
    detail?: string;
    commentary?: string;
    user?: string;  // UUID as string
    count_registry_id?: string;  // UUID as string
}