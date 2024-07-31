import { ReadSchema, CreateSchema, UpdateSchema } from "../../commons/interfaces/IBase";
import { ReadCorporateGroup } from "./ICorporativeGroup";

export interface ReadContact extends ReadSchema {
    full_name: string;
    contact_number: string;
    alt_contact_number?: string;
    employee_charge?: string;
    email: string;
    company_id: string;

}   

export interface DetailedContact extends ReadContact {}

export interface CreateContact extends CreateSchema {
    full_name: string;
    contact_number: string;
    alt_contact_number?: string;
    employee_charge?: string;
    email: string;
    company_id: string;
}

export interface UpdateContact extends UpdateSchema {
    full_name?: string;
    contact_number?: string;
    alt_contact_number?: string;
    employee_charge?: string;
    email?: string;
    company_id?: string;
}
