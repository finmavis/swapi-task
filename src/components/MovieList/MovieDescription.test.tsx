import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieDescription from './MovieDescription';

describe('<MovieDescription />', () => {
  it('Should render properly', () => {
    render(<MovieDescription description='Movie Description' />);
    const descriptionElement = screen.getByText(/movie description.../i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('Should render with suffix 3 dots', () => {
    const text =
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor facere aperiam sint explicabo mollitia error accusantium neque. Accusantium fugiat, odio illo vel labore eligendi! Ut error dolores earum nisi praesentium.';
    render(<MovieDescription description={text} />);
    const descriptionElement = screen.getByText(/lorem/i);
    expect(descriptionElement).toHaveTextContent(`${text}...`);
  });

  it('Should render text no more than 260 length and with suffix 3 dot', () => {
    const text =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis earum et odio architecto sit, fuga dolores qui mollitia. Eum odio voluptates cupiditate perspiciatis modi voluptatum at non aliquam laudantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut esse, impedit recusandae amet commodi animi quaerat voluptatem? Ipsam aliquam, tenetur eos quasi id dicta vel nam? Hic, est ipsam.';
    render(<MovieDescription description={text} />);
    const descriptionElement = screen.getByText(/lorem ipsum/i);
    expect(descriptionElement.textContent?.length).toBe(263);
  });
});
