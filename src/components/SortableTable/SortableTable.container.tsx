import React, { useEffect, useState } from 'react';
import SortableTable from './SortableTable';
import { ShipData } from './SortableTable.types';

export default function SortableTableContainer() {
  const [ships, setShips] = useState<ShipData[]>([]);

  const fetchData = async (url: string): Promise<any[]> => {
    const data = await fetch(url);
    const json = await data.json();
    if (json.next) {
      const otherShips = await fetchData(json.next);
      return [...json.results, ...otherShips];
    } else {
      return json.results;
    }
  };

  useEffect(() => {
    fetchData('https://swapi.dev/api/starships/').then((data) => {
      setShips(data);
      console.log(data);
    });
  }, []);
  return <SortableTable ships={ships} />;
}
