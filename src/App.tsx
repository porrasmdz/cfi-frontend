import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  List,
} from "react-admin";
import { CompaniesList } from "./companies/components/CompaniesList";
import { CorpGroupList } from "./companies/components/CorpGroupList";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";

export const App = () => {
  return (
    <Admin layout={Layout} dataProvider={dataProvider}>
      <Resource name="corporative_groups" list={CorpGroupList}></Resource>
      <Resource name="companies" list={CompaniesList}></Resource>
      <Resource name="contacts" list={ListGuesser}></Resource>
    </Admin>
  );
};
