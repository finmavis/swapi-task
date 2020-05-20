import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieDetailList from './MovieDetailList';

describe('<MovieDetailList />', () => {
  it('Should render list if have any list data', () => {
    render(
      <MovieDetailList label='Lucky Number' list={['One', 'Two', 'Three']} />
    );

    const labelElement = screen.getByText(/lucky number/i);
    const firstItemElement = screen.getByText(/one/i);
    const secondItemElement = screen.getByText(/two/i);
    const thirdItemElement = screen.getByText(/three/i);

    expect(labelElement).toBeInTheDocument();
    expect(firstItemElement).toBeInTheDocument();
    expect(secondItemElement).toBeInTheDocument();
    expect(thirdItemElement).toBeInTheDocument();
  });

  it("Should render no data text if there's no data", () => {
    render(<MovieDetailList label='Planets' list={[]} />);

    const labelElement = screen.getByText(/^planets$/i);
    const itemElement = screen.getByText(
      /We don't have any planets data yet!/i
    );

    expect(labelElement).toBeInTheDocument();
    expect(itemElement).toBeInTheDocument();
  });
});
