import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ButtonNav, NavContainer } from './styles';

interface PaginadorProductosProps {
  cantidadTotalProductos: number;
  onClickCambiarPagina: (numeroPagina: number) => void;
}

const PRODUCTOS_VISIBLES_POR_PAGINA = 10;

export const PaginadorProductos: React.FC<PaginadorProductosProps> = ({
  onClickCambiarPagina,
  cantidadTotalProductos,
}) => {
  if (cantidadTotalProductos <= PRODUCTOS_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(cantidadTotalProductos / PRODUCTOS_VISIBLES_POR_PAGINA)
    ).keys()
  );

  return (
    <NavContainer>
      {rango.map((index) => {
        return (
          <ButtonNav
            onClick={() => onClickCambiarPagina(index)}
            key={index.toString()}
          >
            {index + 1}
          </ButtonNav>
        );
      })}
    </NavContainer>
  );
};

PaginadorProductos.propTypes = {
  cantidadTotalProductos: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
