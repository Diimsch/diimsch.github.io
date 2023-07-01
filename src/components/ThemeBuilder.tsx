import React from 'react';
import { SketchPicker } from 'react-color';

function ThemeBuilder() {
  return (
    <div className='w-96 h-24 mt-3'>
      <p>I couldn't decide on a Theme so you can make one yourself 😎</p>

      <ul
        className='ml-1 mt-8 flex items-center justify-start'
        aria-label='Social media'
      >
        <li className='mr-5 text-xs bg-background w-20 h-8 flex flex-col text-center'>
          Background
          <div className='drop-shadow-xl cursor-pointer border-2 hover:border-accent/30  border-primary-200 p-1 min-w-full bg-background min-h-full rounded-lg'></div>
          Hex
        </li>
        <li className='mr-5 text-xs bg-background w-20 h-8 rounded-lg flex flex-col text-center'>
          Text
          <div className='drop-shadow-xl cursor-pointer border-2 hover:border-accent/30  border-primary-200 p-1 min-w-full bg-text min-h-full rounded-lg'></div>
          Hex
        </li>
        <li className='mr-5 text-xs bg-background w-20 h-8 rounded-lg flex flex-col text-center'>
          Primary
          <div className='drop-shadow-xl cursor-pointer border-2 hover:border-accent/30 p-1 min-w-full bg-primary min-h-full rounded-lg'></div>
          Hex
        </li>{' '}
        <li className='mr-5 text-xs bg-background w-20 h-8 rounded-lg flex flex-col text-center'>
          Secondary
          <div className='drop-shadow-xl cursor-pointer border-2 hover:border-accent/30  border-primary-200 p-1 min-w-full bg-secondary min-h-full rounded-lg'></div>
          Hex
        </li>{' '}
        <li className='mr-5 text-xs bg-background w-20 h-8 rounded-lg flex flex-col text-center'>
          Accent
          <div className='drop-shadow-xl cursor-pointer border-2 hover:border-accent/30  border-primary-200 p-1 min-w-full bg-accent min-h-full rounded-lg'></div>
          Hex
        </li>
      </ul>
    </div>
  );
}

export default ThemeBuilder;
