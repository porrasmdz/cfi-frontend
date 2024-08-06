import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { alpha, styled, Theme } from '@mui/material/styles';
import { MUIStyledCommonProps } from '@mui/system';
import { JSX } from 'react/jsx-runtime';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
  { id: 2, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 3, product: 'DevExtreme Reactive', owner: 'DevExpress' },
  { id: 4, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 5, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

export default () => (
  <Paper>
    <Grid
      rows={rows}
      columns={columns}
    >
      <Table tableComponent={TableComponent} />
      <TableHeaderRow />
    </Grid>
  </Paper>
);


const PREFIX = 'Demo';
const classes = {
  tableStriped: `${PREFIX}-tableStriped`,
};
const StyledTable = styled(Table.Table)(({ theme }) => ({
  [`&.${classes.tableStriped}`]: {
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
    },
  },
}));

const TableComponent = (props: JSX.IntrinsicAttributes & object & { [x: string]: any; className?: string; style?: React.CSSProperties; } & MUIStyledCommonProps<Theme>) => (
    <StyledTable
      {...props}
      className={classes.tableStriped}
    />
  );