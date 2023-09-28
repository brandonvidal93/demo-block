import * as React from 'react';
import {render, screen} from '@testing-library/react';
import { PaginadorProductos } from 'app/feature/Producto/components/PaginadorProductos';

describe('PaginadorProductos Test', () => {


  it('should match snapshot', () => {
    const { container }  = render(
      <PaginadorProductos
        cantidadTotalProductos={11}
        onClickCambiarPagina={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('Renderizar con menos de 10 productos no debe pintar botones', () => {
    const { container } = render(
      <PaginadorProductos
        cantidadTotalProductos={9}
        onClickCambiarPagina={() => {}}
      />
    );

    expect(container).toBeTruthy();
  });

  it('Renderizar con  20 productos debe pintar 2 botones', () => {
    const { container } = render(
      <PaginadorProductos
        cantidadTotalProductos={20}
        onClickCambiarPagina={() => {}}
      />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeTruthy();
    expect(buttons[1]).toBeTruthy();
    
  });
});

export {};
