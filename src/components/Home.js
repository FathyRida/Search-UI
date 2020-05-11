import React from "react";
import {
  Layout,
  TopBar,
  LayoutBody,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  SideBar,
  ViewSwitcherToggle,
  SearchBox,
  RefinementListFilter,
  Hits,
  HitsStats,
  SelectedFilters,
  HierarchicalMenuFilter,
  Pagination,
  ResetFilters,
  SortingSelector,
} from "searchkit";

const Home = () => {
  return (
    <Layout>
      <TopBar>
        <SearchBox />
      </TopBar>
      <LayoutBody>
        <SideBar></SideBar>
        <LayoutResults>
          <ActionBar>
            <ActionBarRow>
              <HitsStats />
              <ViewSwitcherToggle />
            </ActionBarRow>
            <ActionBarRow>
              <SelectedFilters />
              <ResetFilters />
            </ActionBarRow>
          </ActionBar>
          <Hits />
          <Pagination />
        </LayoutResults>
      </LayoutBody>
    </Layout>
  );
};

export default Home;
