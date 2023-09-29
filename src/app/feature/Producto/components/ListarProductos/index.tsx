import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Table, TextTable, TitleTableBold } from './styles';
import { BtnEliminarProducto } from '../EliminarProducto';
import { Producto } from '../../models/Producto';

export interface ListaProductosProps {
  productos: Array<Producto>;
  onClickEliminarProducto: (productos: Producto) => void;
}

export const ListaProductos: React.FC<ListaProductosProps> = ({
  productos,
  onClickEliminarProducto,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <TitleTableBold>Título</TitleTableBold>
          </td>
          <td>
            <TitleTableBold>Fecha creación</TitleTableBold>
          </td>
          <td>
            <TitleTableBold>Eliminar</TitleTableBold>
          </td>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto: Producto) => {
          return (
            <tr key={producto.slug}>
              <TextTable>{producto.title}</TextTable>
              <TextTable>{`${producto.createdAt} `}</TextTable>
              <td>
                <BtnEliminarProducto
                  producto={producto}
                  onEliminar={onClickEliminarProducto}
                ></BtnEliminarProducto>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListaProductos.propTypes = {
  productos: PropTypes.array.isRequired,
  onClickEliminarProducto: PropTypes.func.isRequired,
};
