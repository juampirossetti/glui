export type Order = 'asc' | 'desc';

export interface Data {
  model: string;
  name: string;
  cargo_capacity: number;
}

export interface HeadTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  order: Order;
  orderBy: string;
}

export interface ShipData {
  name: string;
  model: string;
  cargo_capacity: number;
}
