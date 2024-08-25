import {
  Admin,
  Resource,
  ShowGuesser,
  ListGuesser,
  EditGuesser,
  CustomRoutes,
} from "react-admin";
import { Route } from 'react-router-dom';
//TODO: Refactor this boilerplate code with index.ts per feature
import { Dashboard } from "../auth/pages/Dashboard";
// Companies Module
import { CorpGroupList } from "../companies/components/CorpGroupList";
import { CorpGroupCreate } from "../companies/components/CorpGroupCreate";
import { CorpGroupShow } from "../companies/components/CorpGroupShow";
import { CorpGroupEdit } from "../companies/components/CorpGroupEdit";

import { CompaniesList } from "../companies/components/CompaniesList";
import { CompaniesShow } from "../companies/components/CompaniesShow";
import { CompaniesEdit } from "../companies/components/CompaniesEdit";
import { CompaniesCreate } from "../companies/components/CompaniesCreate";

import { ContactsList } from "../companies/components/ContactsList";
import { ContactsShow } from "../companies/components/ContactsShow";
import { ContactsCreate } from "../companies/components/ContactsCreate";
import { ContactsEdit } from "../companies/components/ContactsEdit";
// Inventory Module
import { WHLocationTypesList } from "../inventory/components/WHLocationTypesList";
import { WHLocationTypesShow } from "../inventory/components/WHLocationTypesShow";
import { WHLocationTypesCreate } from "../inventory/components/WHLocationTypesCreate";
import { WHLocationTypesEdit } from "../inventory/components/WHLocationTypesEdit";
import { CFILayout, HomeLayout, RBACLayout } from "../Layout";
import dataProvider from "../dataProvider";
import { WHLocationList } from "../inventory/components/WHLocationList ";
import { WHLocationShow } from "../inventory/components/WHLocationShow";
import { WHLocationEdit } from "../inventory/components/WHLocationEdit";
import { WHLocationCreate } from "../inventory/components/WHLocationCreate";
import { WHTypeList } from "../inventory/components/WHTypeList";
import { WHTypeShow } from "../inventory/components/WHTypeShow";
import { WHTypeEdit } from "../inventory/components/WHTypeEdit";
import { WHTypeCreate } from "../inventory/components/WHTypeCreate";
import { WarehouseList } from "../inventory/components/WarehouseList";
import { WarehouseShow } from "../inventory/components/WarehouseShow";
import { WarehouseEdit } from "../inventory/components/WarehouseEdit";
import { WarehouseCreate } from "../inventory/components/WarehouseCreate";
import { ProductCategoryList } from "../inventory/components/ProductCategoryList";
import { ProductCategoryShow } from "../inventory/components/ProductCategoryShow";
import { ProductCategoryEdit } from "../inventory/components/ProductCategoryEdit";
import { ProductCategoryCreate } from "../inventory/components/ProductCategoryCreate";
import { ProductList } from "../inventory/components/ProductList";
import { ProductShow } from "../inventory/components/ProductShow";
import { ProductEdit } from "../inventory/components/ProductEdit";
import { ProductCreate } from "../inventory/components/ProductCreate";
import { MeasureUnitList } from "../inventory/components/MeasureUnitList";
import { MeasureUnitShow } from "../inventory/components/MeasureUnitShow";
import { MeasureUnitEdit } from "../inventory/components/MeasureUnitEdit";
import { MeasureUnitCreate } from "../inventory/components/MeasureUnitCreate";
import { CyclicCountList } from "../cyclic_counts/components/CyclicCountList";
import { CyclicCountShow } from "../cyclic_counts/components/CyclicCountShow";
import { CyclicCountEdit } from "../cyclic_counts/components/CyclicCountEdit";
import { CyclicCountCreate } from "../cyclic_counts/components/CyclicCountCreate";
import { CountRegistryList } from "../cyclic_counts/components/CountRegistryList";
import { CountRegistryShow } from "../cyclic_counts/components/CountRegistryShow";
import { CountRegistryEdit } from "../cyclic_counts/components/CountRegistryEdit";
import { CountRegistryCreate } from "../cyclic_counts/components/CountRegistryCreate";
import { ActivityRegistryList } from "../cyclic_counts/components/ActivityRegistryList";
import { ActivityRegistryShow } from "../cyclic_counts/components/ActivityRegistryShow";
import { ActivityRegistryEdit } from "../cyclic_counts/components/ActivityRegistryEdit";
import { ActivityRegistryCreate } from "../cyclic_counts/components/ActivityRegistryCreate";

import themes from "../commons/themes";
import authProvider from "../authProvider";
import { ModulesList } from "./components/ModulesList";


export const HomeModule = () => {
    return (
      <Admin
        layout={HomeLayout}
        {...themes}
        basename="/home"
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
       <CustomRoutes>
        <Route path="/" element={<ModulesList></ModulesList>}></Route>
       </CustomRoutes>
      </Admin>
    );
  };
export const CFIModule = () => {
  return (
    <Admin
      layout={CFILayout}
      {...themes}
      basename="/cfi"
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      {/* Auth RBAC */}
      <Resource name="users" list={ListGuesser} />

      {/* Companies */}
      <Resource
        name="corporative_groups"
        list={CorpGroupList}
        show={CorpGroupShow}
        edit={CorpGroupEdit}
        create={CorpGroupCreate}
      />
      <Resource
        name="companies"
        list={CompaniesList}
        show={CompaniesShow}
        edit={CompaniesEdit}
        create={CompaniesCreate}
      />
      <Resource
        name="contacts"
        list={ContactsList}
        show={ContactsShow}
        edit={ContactsEdit}
        create={ContactsCreate}
      />

      {/* Inventory */}
      <Resource
        name="whlocation_types"
        list={WHLocationTypesList}
        show={WHLocationTypesShow}
        edit={WHLocationTypesEdit}
        create={WHLocationTypesCreate}
      />
      <Resource
        name="whlocations"
        list={WHLocationList}
        show={WHLocationShow}
        edit={WHLocationEdit}
        create={WHLocationCreate}
      />
      <Resource
        name="warehouse_types"
        list={WHTypeList}
        show={WHTypeShow}
        edit={WHTypeEdit}
        create={WHTypeCreate}
      />
      <Resource
        name="warehouses"
        list={WarehouseList}
        show={WarehouseShow}
        edit={WarehouseEdit}
        create={WarehouseCreate}
      />
      <Resource
        name="product_categories"
        list={ProductCategoryList}
        show={ProductCategoryShow}
        edit={ProductCategoryEdit}
        create={ProductCategoryCreate}
      />

      <Resource
        name="products"
        list={ProductList}
        show={ProductShow}
        edit={ProductEdit}
        create={ProductCreate}
      />
      <Resource
        name="measure_units"
        list={MeasureUnitList}
        show={MeasureUnitShow}
        edit={MeasureUnitEdit}
        create={MeasureUnitCreate}
      />
      {/* Cyclic Counts */}

      <Resource
        name="cyclic_counts"
        list={CyclicCountList}
        show={CyclicCountShow}
        edit={CyclicCountEdit}
        create={CyclicCountCreate}
      />
      <Resource
        name="count_registries"
        list={CountRegistryList}
        show={CountRegistryShow}
        edit={CountRegistryEdit}
        create={CountRegistryCreate}
      />
      <Resource
        name="activity_registries"
        list={ActivityRegistryList}
        show={ActivityRegistryShow}
        edit={ActivityRegistryEdit}
        create={ActivityRegistryCreate}
      />
    </Admin>
  );
};
export const RBACModule = () => {
  return (
    <Admin
      layout={RBACLayout}
      {...themes}
      basename="/rbac"
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="roles"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
        create={EditGuesser}
      />
      <Resource
        name="permissions"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
        create={EditGuesser}
      />
    </Admin>
  );
};
